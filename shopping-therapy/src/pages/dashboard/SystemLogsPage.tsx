import axiosInstance from "../../api/axiosInstance";
import { LOGS_URL } from "../../api/globalConfig";
import { ILogDto } from "../../models/Log";
import { toast } from "react-hot-toast";

import { useEffect, useState } from "react";
import Spinner from "../../layout/Spinner";
import moment from "moment";

const SystemLogsPage = () => {
  const [logs, setLogs] = useState<ILogDto[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const getLogs = async () => {
    try {
      setLoading(true);
      const response = await axiosInstance.get<ILogDto[]>(LOGS_URL);
      const { data } = response;
      setLogs(data);
      setLoading(false);
    } catch (error) {
      toast.error("An Error happened. Please Contact admins");
      setLoading(false);
    }
  };

  useEffect(() => {
    getLogs();
  }, []);

  if (loading) {
    return (
      <div className="w-full">
        <Spinner />
      </div>
    );
  }

  return (
    <div className="min-h-100vh flex grow bg-slate-50 text-slate-900 dark:bg-navy-900">
      <div className="text-center w-full container content-end justify-center mt-20">
        {" "}
        <h1 className="text-2xl font-bold">System Logs</h1>
        <div className="pageTemplate3 items-stretch">
          <div className="grid grid-cols-6 p-2 border-2 border-gray-200 rounded-lg">
            <span>No</span>
            <span>Date</span>
            <span>Username</span>
            <span className="col-span-3">Description</span>
          </div>
          {logs.map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-6 p-2 border-2 border-gray-200 rounded-lg"
            >
              <span>{index + 1}</span>
              <span>{moment(item.createdAt).fromNow()}</span>
              <span>{item.userName}</span>
              <span className="col-span-3">{item.description}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SystemLogsPage;
