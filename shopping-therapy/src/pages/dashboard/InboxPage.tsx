import { MdInput, MdOutput } from "react-icons/md";
import axiosInstance from "../../api/axiosInstance";
import { IMessageDto } from "../../models/Message";
import { MY_MESSAGE_URL } from "../../api/globalConfig";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth.hook";
import { toast } from "react-hot-toast";
import moment from "moment";
import Spinner from "../../layout/Spinner";

const InboxPage = () => {
  const { user } = useAuth();
  const [messages, setMessages] = useState<IMessageDto[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const getMyMessages = async () => {
    try {
      setLoading(true);
      const response = await axiosInstance.get<IMessageDto[]>(MY_MESSAGE_URL);
      const { data } = response;
      setMessages(data);
      setLoading(false);
    } catch (error) {
      toast.error("An Error happened. Please Contact admins");
      setLoading(false);
    }
  };

  useEffect(() => {
    getMyMessages();
  }, []);

  if (loading) {
    return (
      <div className="w-full">
        <Spinner />
      </div>
    );
  }

  return (
    <div className="text-center w-full content-end justify-center mt-20">
      <h1 className="text-2xl font-bold">Inbox</h1>
      <div className="pageTemplate3 items-stretch">
        <div className="grid grid-cols-8 p-2 border-2 border-gray-200 rounded-lg">
          <span>Date</span>
          <span>Type</span>
          <span className="col-span-2">Subject</span>
          <span className="col-span-2">Description</span>
          <span>Sender</span>
          <span>Receiver</span>
        </div>
        {messages.map((item) => (
          <div
            key={item.id}
            className="grid grid-cols-8 p-2 border-2 border-gray-200 rounded-lg"
          >
            <span>{moment(item.createdAt).fromNow()}</span>
            <span>
              {item.senderUserName === user?.userName ? (
                <MdOutput className="text-2xl text-purple-500" />
              ) : (
                <MdInput className="text-2xl text-green-500" />
              )}
            </span>
            <div className=" col-span-2">{item.subject}</div>
            <div className="col-span-2">{item.details}</div>
            <span>{item.senderUserName}</span>
            <span>{item.receiverUserName}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InboxPage;
