import { useNavigate } from "react-router-dom";
import axiosInstance from "../../api/axiosInstance";
import { CREATE_MESSAGE_URL, USERNAMES_LIST_URL } from "../../api/globalConfig";
import UsernamesComboBox from "../../components/dashboard/send-message/UsernamesComboBox";
import InputField from "../../layout/InputField";
import Spinner from "../../layout/Spinner";
import Button from "../../layout/dashboard/Button";
import { ISendMessageDto } from "../../models/Message";
import { PATH_DASHBOARD } from "../../router/Routes";
import { useState, useEffect } from "react";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-hot-toast";

const SendMessagePage = () => {
  const [usernames, setUsernames] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const sendMessageSchema = Yup.object().shape({
    receiverUserName: Yup.string()
      .required("User Name is required")
      .oneOf(usernames, "Invalid username"),
    text: Yup.string().required("Message Text is required"),
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ISendMessageDto>({
    resolver: yupResolver(sendMessageSchema),
    defaultValues: {
      receiverUserName: "",
      subject: "",
      details: "",
    },
  });

  const getUsernamesList = async () => {
    try {
      setLoading(true);
      const response = await axiosInstance.get<string[]>(USERNAMES_LIST_URL);
      const { data } = response;
      setUsernames(data);
      setLoading(false);
    } catch (error) {
      toast.error("An Error happened. Please Contact admins");
      setLoading(false);
    }
  };

  useEffect(() => {
    getUsernamesList();
  }, []);

  const onSubmitSendMessageForm = async (submittedData: ISendMessageDto) => {
    try {
      setLoading(true);
      const newMessage: ISendMessageDto = {
        receiverUserName: submittedData.receiverUserName,
        subject: submittedData.subject,
        details: submittedData.details,
      };
      await axiosInstance.post(CREATE_MESSAGE_URL, newMessage);
      setLoading(false);
      toast.success("Your message Sent successfully.");
      navigate(PATH_DASHBOARD.inbox);
    } catch (error) {
      setLoading(false);
      reset();
      const err = error as { data: string; status: number };
      if (err.status === 400) {
        toast.error(err.data);
      } else {
        toast.error("An Error occurred. Please contact admins");
      }
    }
  };

  if (loading) {
    return (
      <div className="w-full">
        <Spinner />
      </div>
    );
  }

  return (
    <div className="text-center w-full content-end justify-center m-12">
      <h1 className="text-2xl font-bold">Send Message</h1>
      <div className="pageTemplate3 items-stretch">
        <form onSubmit={handleSubmit(onSubmitSendMessageForm)}>
          <UsernamesComboBox
            usernames={usernames}
            control={control}
            name="receiverUserName"
            error={errors.receiverUserName?.message}
          />
          <InputField
            control={control}
            label="Subject"
            inputName="subject"
            error={errors.subject?.message}
          />
          <InputField
            control={control}
            label="Details"
            inputName="details"
            error={errors.details?.message}
          />
          <div className="flex justify-center items-center gap-4 mt-6">
            <Button
              variant="secondary"
              type="button"
              label="Discard"
              onClick={() => {}}
            />
            <Button
              variant="primary"
              type="submit"
              label="Send"
              onClick={() => navigate(PATH_DASHBOARD.inbox)}
              loading={loading}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default SendMessagePage;
