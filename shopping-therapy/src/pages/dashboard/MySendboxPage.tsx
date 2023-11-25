import axiosInstance from "../../api/axiosInstance";
import { IMessageDto } from "../../models/Message";
import { MY_SENDBOX_MESSAGE_URL } from "../../api/globalConfig";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import moment from "moment";
import Spinner from "../../layout/Spinner";
import DashboardSidebar from "../../components/dashboard/sidebar/DashboardSidebar";
import { NavLink } from "react-router-dom";

const MySendboxPage = () => {
  const [messages, setMessages] = useState<IMessageDto[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const getMyMessages = async () => {
    try {
      setLoading(true);
      const response = await axiosInstance.get<IMessageDto[]>(
        MY_SENDBOX_MESSAGE_URL
      );
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
    <>
      <div
        id="root"
        className="min-h-100vh flex grow bg-slate-50 dark:bg-navy-900"
      >
        <DashboardSidebar />
        <main className="main-content mail-app w-full px-[var(--margin-x)] pb-6">
          <div className="flex flex-col-reverse py-5 sm:flex-row sm:justify-between">
            <div className="mt-2 flex items-left justify-between space-x-1">
              <div className="flex">
                <p className="ml-28 text-2xl">Sendbox</p>
              </div>
            </div>
          </div>
          <div className="card ml-28">
            {/* IF NOT READ CSS IS */}
            {/* <div className="flex cursor-pointer flex-row rounded-t-lg border-b p-2.5 font-semibold text-slate-700 hover:bg-slate-100 dark:border-navy-500 dark:text-navy-100 dark:hover:bg-navy-600 sm:flex-row sm:items-left">
              <div className="flex items-left justify-between">
                <div className="flex space-x-2 sm:w-72">
                  <div className="flex">
                    <label
                      className="flex h-8 w-8 items-left justify-center"
                      x-tooltip="'Select'"
                    >
                      <input
                        className="form-checkbox is-outline h-4.5 w-4.5 rounded border-slate-400/70 before:bg-primary checked:border-primary hover:border-primary focus:border-primary dark:border-navy-400 dark:before:bg-accent dark:checked:border-accent dark:hover:border-accent dark:focus:border-accent"
                        type="checkbox"
                      />
                    </label>
                    <button
                      x-tooltip="'Starred'"
                      className="btn hidden h-8 w-8 rounded-full p-0 text-slate-400 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:text-navy-300 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25 sm:inline-flex"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        stroke-width="1.5"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                        />
                      </svg>
                    </button>
                    <button
                      x-tooltip="'Actions'"
                      className="btn hidden h-8 w-8 rounded-full p-0 text-slate-400 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:text-navy-300 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25 sm:inline-flex"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        stroke-width="1.5"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                        />
                      </svg>
                    </button>
                  </div>
                  <div className="flex items-left space-x-2">
                    <div className="avatar h-6 w-6">
                      <img
                        className="rounded-full"
                        src="images/avatar/avatar-3.jpg"
                        alt="avatar"
                      />
                    </div>
                    <h3 className="line-clamp-1">Konnor Guzman</h3>
                    <span className="h-2 w-2 shrink-0 rounded-full bg-secondary lg:hidden"></span>
                  </div>
                </div>
                <div className="shrink-0 px-1 text-xs sm:hidden">Dec 03</div>
              </div>
              <div className="flex flex-1 items-left justify-between space-x-2">
                <div className="flex items-left space-x-2 px-2">
                  <span className="line-clamp-1">
                    Nemo enim ipsam voluptatem quia voluptas sit
                  </span>
                  <div className="badge hidden h-6 rounded-full border border-secondary text-secondary dark:border-secondary-light dark:text-secondary-light lg:inline-flex">
                    Work
                  </div>
                </div>
                <div className="flex sm:hidden">
                  <button
                    x-tooltip="'Starred'"
                    className="btn h-8 w-8 rounded-full p-0 text-slate-400 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:text-navy-300 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      stroke-width="1.5"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                      />
                    </svg>
                  </button>
                  <button
                    x-tooltip="'Actions'"
                    className="btn h-8 w-8 rounded-full p-0 text-slate-400 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:text-navy-300 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      stroke-width="1.5"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="hidden px-2 text-xs+ sm:flex">Dec 03</div>
            </div> */}
            {messages.map((item) => (
              <NavLink to={`/dashboard/message-detail/${item.messageId}`}>
                <div
                  key={item.messageId}
                  className="flex cursor-pointer flex-row border-b p-2.5 font-semibold text-slate-700 hover:bg-slate-100 dark:border-navy-500 dark:text-navy-100 dark:hover:bg-navy-600 sm:flex-row sm:items-left"
                >
                  <div className="flex items-left justify-between">
                    <div className="flex space-x-2 sm:w-72">
                      <div className="flex">
                        <label
                          className="flex h-8 w-8 items-left justify-center"
                          x-tooltip="'Select'"
                        >
                          <input
                            className="form-checkbox is-outline h-4.5 w-4.5 rounded border-slate-400/70 before:bg-primary checked:border-primary hover:border-primary focus:border-primary dark:border-navy-400 dark:before:bg-accent dark:checked:border-accent dark:hover:border-accent dark:focus:border-accent"
                            type="checkbox"
                          />
                        </label>
                        <button
                          x-tooltip="'Starred'"
                          className="btn hidden h-8 w-8 rounded-full p-0 text-slate-400 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:text-navy-300 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25 sm:inline-flex"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            stroke-width="1.5"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                            />
                          </svg>
                        </button>
                        <button
                          x-tooltip="'Actions'"
                          className="btn hidden h-8 w-8 rounded-full p-0 text-slate-400 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:text-navy-300 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25 sm:inline-flex"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            stroke-width="1.5"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                            />
                          </svg>
                        </button>
                      </div>
                      <div className="flex items-left space-x-2">
                        <h3 className="line-clamp-1 text-indigo-700">
                          {item.sender}
                        </h3>
                      </div>
                    </div>
                    <div className="shrink-0 px-1 text-xs sm:hidden">
                      Nov 29
                    </div>
                  </div>
                  <div className="flex flex-1 items-left justify-between space-x-2">
                    <div className="flex items-left space-x-2 px-2">
                      <span className="line-clamp-1">{item.subject}</span>
                    </div>
                    <div className="flex sm:hidden">
                      <button
                        x-tooltip="'Starred'"
                        className="btn h-8 w-8 rounded-full p-0 text-slate-400 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:text-navy-300 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          stroke-width="1.5"
                          className="h-5 w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                          />
                        </svg>
                      </button>
                      <button
                        x-tooltip="'Actions'"
                        className="btn h-8 w-8 rounded-full p-0 text-slate-400 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:text-navy-300 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          stroke-width="1.5"
                          className="h-5 w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className="hidden px-2 text-xs+ sm:flex">
                    {moment(item.createdAt).fromNow()}
                  </div>
                </div>
              </NavLink>
            ))}
          </div>
        </main>
      </div>
    </>

    // <div className="text-center w-full content-end justify-center mt-20">
    //   <h1 className="text-2xl font-bold">Inbox</h1>
    //   <div className="pageTemplate3 items-stretch">
    //     <div className="grid grid-cols-8 p-2 border-2 border-gray-200 rounded-lg">
    //       <span>Date</span>
    //       <span>Type</span>
    //       <span className="col-span-2">Subject</span>
    //       <span className="col-span-2">Description</span>
    //       <span>Sender</span>
    //       <span>Receiver</span>
    //     </div>
    //     {messages.map((item) => (
    //       <div
    //         key={item.id}
    //         className="grid grid-cols-8 p-2 border-2 border-gray-200 rounded-lg"
    //       >
    //         <span>{moment(item.createdAt).fromNow()}</span>
    //         <span>
    //           {item.senderUserName === user?.userName ? (
    //             <MdOutput className="text-2xl text-purple-500" />
    //           ) : (
    //             <MdInput className="text-2xl text-green-500" />
    //           )}
    //         </span>
    //         <div className=" col-span-2">{item.subject}</div>
    //         <div className="col-span-2">{item.details}</div>
    //         <span>{item.senderUserName}</span>
    //         <span>{item.receiverUserName}</span>
    //       </div>
    //     ))}
    //   </div>
    // </div>
  );
};

export default MySendboxPage;
