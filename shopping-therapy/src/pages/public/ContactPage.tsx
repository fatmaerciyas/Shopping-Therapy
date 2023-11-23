import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-hot-toast";
import { ISendMessageDto } from "../../models/Message";
import { CREATE_MESSAGE_URL } from "../../api/globalConfig";
import { PATH_DASHBOARD, PATH_PUBLIC } from "../../router/Routes";
import axiosInstance from "../../api/axiosInstance";
import Spinner from "../../layout/Spinner";
import InputField from "../../layout/InputField";
import Button from "../../layout/dashboard/Button";

export default function ContactPage() {
  const [loading, setLoading] = useState<boolean>(false);

  const [usernames, setUsernames] = useState<string[]>([]);
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

  const onSubmitSendMessageForm = async (submittedData: ISendMessageDto) => {
    try {
      setLoading(true);
      const newMessage: ISendMessageDto = {
        receiverUserName: "user",

        subject: submittedData.subject,
        details: submittedData.details,
      };
      console.log("AAAAAAAAAAAAAA");
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
    <div className="text-center w-full h-full content-end justify-center mt-48 mb-24 mr-40">
      <h1 className="text-2xl font-bold">Send Message</h1>
      <div className="pageTemplate3 items-stretch container">
        <form onSubmit={handleSubmit(onSubmitSendMessageForm)}>
          <label className="relative mt-4 flex"></label>{" "}
          <label className="relative mt-4 flex">
            <InputField
              control={control}
              placeholder="Subject"
              inputName="subject"
              error={errors.subject?.message}
            />
          </label>{" "}
          <label className="relative mt-4 flex">
            <InputField
              control={control}
              placeholder="Details"
              inputName="details"
              error={errors.details?.message}
            />
          </label>
          <div className="flex justify-center items-center mt-6">
            <Button
              variant="primary"
              type="submit"
              label="Send"
              onClick={() => navigate(PATH_PUBLIC.thankyou)}
              loading={loading}
            />
          </div>
        </form>
      </div>
    </div>
  );
}
