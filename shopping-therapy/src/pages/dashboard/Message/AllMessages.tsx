import axiosInstance from "../../../api/axiosInstance";
import { toast } from "react-hot-toast";

import { useEffect, useState } from "react";
import { IMessageDto } from "../../../models/Message";
import { ALL_MESSAGES_URL } from "../../../api/globalConfig";
import { IAuthUser } from "../../../models/Auth";
import { baseUrl } from "../../../api/url.contants";
import axios from "axios";
import { NavLink } from "react-router-dom";

const AllMessagesPage = () => {
  const [messages, setMessages] = useState<IMessageDto[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [query, setQuery] = useState<string>("");

  const [users, setUsers] = useState<IAuthUser[]>([]);

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
    async function fetchdata() {
      await axios
        .get<IAuthUser[]>(baseUrl + "Auth/users")
        .then((response) => {
          setUsers(response.data);
        })
        .catch((error) => console.log(error));
    }
    fetchdata();
    getAllMessages();
    setLoading(true);
  }, []);

  const handleDelete = (messageId: number) => {
    // e.preventDefault();

    console.log(messageId);

    try {
      axios.post(`${baseUrl}Message/deleteMessage?id=${messageId}`);

      toast.success("Deleted message");

      setLoading(true);
    } catch (error) {
      setLoading(true);
      const err = error as { data: string; status: number };
      const { status } = err;
      if (status === 401) {
        toast.error("Somethings went wrong");
      } else {
        toast.error("An Error occurred. Please contact admins");
      }
    }
  };

  function handleSearch() {
    setLoading(false);

    if (!query) {
      // If the query is empty, show all messages
      getAllMessages();
      return;
    }

    // Filter messages based on the query value
    const filteredMessages = messages.filter((item) => {
      return (
        item.sender.toLowerCase().includes(query.toLowerCase()) ||
        item.subject.toLowerCase().includes(query.toLowerCase())
      );
    });

    console.log(query);
    setMessages(filteredMessages);
  }

  function handlersetQuery(item: string) {
    setQuery(item);
    handleSearch();
  }

  return (
    <div
      id="root"
      className="min-h-100vh flex grow  bg-slate-50 dark:bg-navy-900"
    >
      <main className="main-content w-full px-[var(--margin-x)] pb-8">
        <div className="flex items-center justify-between py-5 lg:py-6">
          <div className="flex items-center space-x-1">
            <h2 className="text-xl font-medium text-slate-700 line-clamp-1 dark:text-navy-50 lg:text-2xl">
              All Messages
            </h2>
            <div className="inline-flex">
              <button className="btn h-8 w-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25">
                <i className="fas fa-chevron-down"></i>
              </button>

              <div className="popper-root">
                <div className="popper-box rounded-md border border-slate-150 bg-white py-1.5 font-inter dark:border-navy-500 dark:bg-navy-700">
                  <ul>
                    <li>
                      <a
                        href="#"
                        className="flex h-8 items-center space-x-3 px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="mt-px h-4.5 w-4.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          stroke-width="2"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M12 4v16m8-8H4"
                          />
                        </svg>
                        <span> New User</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="flex h-8 items-center space-x-3 px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="mt-px h-4.5 w-4.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          stroke-width="2"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                          />
                        </svg>
                        <span>Export Users</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="flex h-8 items-center space-x-3 px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="mt-px h-4.5 w-4.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          stroke-width="2"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                          />
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                        <span>Setting</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-2 text-slate-700">
            <label className="relative hidden sm:flex">
              <input
                onChange={(e) => handlersetQuery(e.target.value)}
                className="form-input peer  h-9 w-full rounded-full border border-slate-300 bg-transparent px-8 py-2 pl-9 text-xs+ placeholder:text-slate-600 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
                placeholder="Search user..."
              />
              <span className="pointer-events-none absolute flex h-full w-10 items-center justify-center text-slate-400 peer-focus:text-primary dark:text-navy-300 dark:peer-focus:text-accent">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 transition-colors duration-200"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M3.316 13.781l.73-.171-.73.171zm0-5.457l.73.171-.73-.171zm15.473 0l.73-.171-.73.171zm0 5.457l.73.171-.73-.171zm-5.008 5.008l-.171-.73.171.73zm-5.457 0l-.171.73.171-.73zm0-15.473l-.171-.73.171.73zm5.457 0l.171-.73-.171.73zM20.47 21.53a.75.75 0 101.06-1.06l-1.06 1.06zM4.046 13.61a11.198 11.198 0 010-5.115l-1.46-.342a12.698 12.698 0 000 5.8l1.46-.343zm14.013-5.115a11.196 11.196 0 010 5.115l1.46.342a12.698 12.698 0 000-5.8l-1.46.343zm-4.45 9.564a11.196 11.196 0 01-5.114 0l-.342 1.46c1.907.448 3.892.448 5.8 0l-.343-1.46zM8.496 4.046a11.198 11.198 0 015.115 0l.342-1.46a12.698 12.698 0 00-5.8 0l.343 1.46zm0 14.013a5.97 5.97 0 01-4.45-4.45l-1.46.343a7.47 7.47 0 005.568 5.568l.342-1.46zm5.457 1.46a7.47 7.47 0 005.568-5.567l-1.46-.342a5.97 5.97 0 01-4.45 4.45l.342 1.46zM13.61 4.046a5.97 5.97 0 014.45 4.45l1.46-.343a7.47 7.47 0 00-5.568-5.567l-.342 1.46zm-5.457-1.46a7.47 7.47 0 00-5.567 5.567l1.46.342a5.97 5.97 0 014.45-4.45l-.343-1.46zm8.652 15.28l3.665 3.664 1.06-1.06-3.665-3.665-1.06 1.06z" />
                </svg>
              </span>
            </label>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
          {messages.map((item) => (
            <div className="card flex-row justify-between space-x-2 p-4 sm:p-5">
              <div>
                <div className="flex space-x-1">
                  <h4 className="text-base font-medium text-slate-700 line-clamp-1 dark:text-navy-100">
                    {item.subject}
                  </h4>
                  <NavLink to={`/dashboard/message-detail/${item.messageId}`}>
                    <button className="btn h-6 rounded-full px-2 text-xs font-medium text-primary bg-primary/10 hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:text-accent-light dark:hover:bg-accent-light/20 dark:focus:bg-accent-light/20 dark:active:bg-accent-light/25 lg:inline-flex">
                      Details
                    </button>
                  </NavLink>

                  <button
                    onClick={() => {
                      handleDelete(item.messageId);
                    }}
                    className="btn h-6 rounded-full px-2 text-xs font-medium  bg-error/10 text-error hover:bg-error/20 focus:bg-error/20 active:bg-error/25 lg:inline-flex"
                  >
                    Delete
                  </button>
                </div>

                <a
                  href="#"
                  className="text-xs+ transition-colors duration-300 ease-in-out hover:text-slate-800 dark:hover:text-navy-50"
                >
                  <p className="font-bold">
                    Receiver:
                    <span className="font-normal">{item.sender} </span>
                  </p>
                </a>
              </div>

              <div className="avatar h-10 w-10">
                {users &&
                  users.map((user) =>
                    user.userName === item.sender ? (
                      <img
                        className="mask is-squircle"
                        src={user.image}
                        alt="avatar"
                      />
                    ) : null
                  )}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default AllMessagesPage;
