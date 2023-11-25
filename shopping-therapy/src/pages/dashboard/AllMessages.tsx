import axiosInstance from "../../api/axiosInstance";
import { toast } from "react-hot-toast";

import { useEffect, useState } from "react";
import Spinner from "../../layout/Spinner";
import moment from "moment";
import { IMessageDto } from "../../models/Message";
import { ALL_MESSAGES_URL } from "../../api/globalConfig";

const AllMessagesPage = () => {
  const [messages, setMessages] = useState<IMessageDto[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const getAllMessages = async () => {
    try {
      setLoading(true);
      const response = await axiosInstance.get<IMessageDto[]>(ALL_MESSAGES_URL);
      const { data } = response;
      setMessages(data);
      setLoading(false);
    } catch (error) {
      toast.error("An Error happened. Please Contact admins");
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllMessages();
  }, []);

  if (loading) {
    return (
      <div className="w-full">
        <Spinner />
      </div>
    );
  }

  return (
    <div className="text-center w-full content-end justify-center m-12">
      <h1 className="text-2xl font-bold">All Messages</h1>
      <div className="pageTemplate3 items-stretch">
        <div className="grid grid-cols-8 p-2 border-2 border-gray-200 rounded-lg">
          <span>Date</span>
          <span className="col-span-5">Text</span>
          <span>Sender</span>
          <span>Receiver</span>
        </div>
        {messages.map((item) => (
          <div
            key={item.id}
            className="grid grid-cols-8 p-2 border-2 border-gray-200 rounded-lg"
          >
            <span>{moment(item.createdAt).fromNow()}</span>
            <span>{item.subject}</span>
            <span className="col-span-5">{item.details}</span>
            <span>{item.sender}</span>
            <span>{item.receiver}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllMessagesPage;
