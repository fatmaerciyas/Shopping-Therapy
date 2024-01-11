import { PATH_DASHBOARD } from "../../router/Routes";
import useAuth from "../../hooks/useAuth.hook";
import { NavLink, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  AiOutlineHome,
  AiOutlineMessage,
  AiOutlineShopping,
  AiOutlineSkin,
  AiOutlineCar,
  AiOutlineTeam,
  AiOutlineKey,
  AiOutlineMail,
  AiOutlineLayout,
  AiOutlineShop,
  AiOutlineMenu,
  AiOutlineDatabase,
} from "react-icons/ai";

export default function SidebarDashboard() {
  const { user } = useAuth();
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const handleClick = (url: string) => {
    setSidebarVisible(false);

    navigate(url);
  };

  useEffect(() => {
    setSidebarVisible(false);
  }, [sidebarVisible]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <button></button>
      <div className="self-center mt-12 flex flex-col items-center"></div>
      <button
        className={`text-black z-1000 ${
          isOpen ? "absolute top-16 left-44" : " absolute top-16 left-14 "
        }`}
        onClick={toggleMenu}
      >
        <div className="logo p-6 flex items-center z-1000">
          <AiOutlineMenu className="w-7 h-7 z-1000" />
        </div>
      </button>

      <div
        className={`sidebarDashboard rounded-xl ${
          sidebarVisible ? "sidebar-visible" : ""
        }`}
      >
        <div
          className={` main-sidebar rounded-xl  ${
            isOpen ? "mt-10 ml-12  " : "mt-8"
          }`}
        >
          <div className=" flex  items-center flex-col space-y-4 pt-6  ">
            <div className="flex h-screen overflow-hidden text-sm bg-white">
              <div className="hidden md:flex md:flex-shrink-0">
                <div
                  className={` ${
                    isOpen ? "flex flex-col w-56 " : "flex flex-col w-14 "
                  }`}
                >
                  <div className="flex flex-col flex-grow pt-5 overflow-y-auto bg-white border-r">
                    <div className="flex flex-col flex-shrink-0 "></div>
                    <div
                      className={` ${
                        isOpen
                          ? "flex flex-col flex-grow px-6   "
                          : "flex flex-col flex-grow py-4  "
                      }`}
                    >
                      <nav className="flex-1 space-y-2 bg-white">
                        {user?.roles && user.roles.includes("ADMIN") ? (
                          <>
                            <a
                              onClick={() =>
                                handleClick(PATH_DASHBOARD.usersManagement)
                              }
                              className="flex h-11 p-2 w-full text-blue-700 cursor-pointer  rounded-lg outline-none transition-colors duration-200 hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
                            >
                              <AiOutlineHome className="w-7 h-7" />

                              {isOpen && (
                                <span className="text-black mt-2  px-4 ">
                                  Dashboard
                                </span>
                              )}
                            </a>
                            <a
                              onClick={() => handleClick(PATH_DASHBOARD.inbox)}
                              className="flex h-11 p-2 w-full text-blue-700 cursor-pointer rounded-lg outline-none transition-colors duration-200 hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
                            >
                              <AiOutlineMessage className="w-7 h-7" />

                              {isOpen && (
                                <span className="text-black mt-2  px-4 ">
                                  My Messages
                                </span>
                              )}
                            </a>
                            <a
                              onClick={() =>
                                handleClick(PATH_DASHBOARD.systemLogs)
                              }
                              className="flex h-11 p-2 w-full text-blue-700 cursor-pointer  rounded-lg outline-none transition-colors duration-200 hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
                            >
                              <AiOutlineDatabase className="w-7 h-7" />

                              {isOpen && (
                                <span className="text-black mt-2  px-4">
                                  System Logs
                                </span>
                              )}
                            </a>
                            <a
                              onClick={() =>
                                handleClick(PATH_DASHBOARD.productManagement)
                              }
                              className="flex h-11 p-2 w-full text-blue-700 cursor-pointer  rounded-lg outline-none transition-colors duration-200 hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
                            >
                              <AiOutlineSkin className="w-7 h-7" />

                              {isOpen && (
                                <span className="text-black mt-2  px-4">
                                  Products
                                </span>
                              )}
                            </a>
                            <a
                              onClick={() =>
                                handleClick(PATH_DASHBOARD.cargoManagement)
                              }
                              className="flex h-11 p-2 w-full text-blue-700 cursor-pointer  rounded-lg outline-none transition-colors duration-200 hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
                            >
                              <AiOutlineCar className="w-7 h-7" />
                              {isOpen && (
                                <span className="text-black mt-2  px-4">
                                  Cargos
                                </span>
                              )}
                            </a>
                            <a
                              onClick={() => handleClick(PATH_DASHBOARD.user)}
                              className="flex h-11 p-2 w-full text-blue-700 cursor-pointer  rounded-lg outline-none transition-colors duration-200 hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
                            >
                              <AiOutlineTeam className="w-7 h-7" />

                              {isOpen && (
                                <span className="text-black mt-2  px-4">
                                  Users
                                </span>
                              )}
                            </a>
                            <a
                              onClick={() => handleClick(PATH_DASHBOARD.myLogs)}
                              className="flex h-11 p-2 w-full text-blue-700 cursor-pointer  rounded-lg outline-none transition-colors duration-200 hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
                            >
                              <AiOutlineKey className="w-7 h-7" />

                              {isOpen && (
                                <span className="text-black mt-2  px-4">
                                  My Logs
                                </span>
                              )}
                            </a>
                            <a
                              onClick={() =>
                                handleClick(PATH_DASHBOARD.allMessages)
                              }
                              className="flex h-11 p-2 w-full text-blue-700 cursor-pointer  rounded-lg outline-none transition-colors duration-200 hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
                            >
                              <AiOutlineMail className="w-7 h-7" />

                              {isOpen && (
                                <span className="text-black mt-2  px-4">
                                  Messages
                                </span>
                              )}
                            </a>
                            <a
                              onClick={() =>
                                handleClick(PATH_DASHBOARD.categoryManagement)
                              }
                              className="flex h-11 p-2 w-full text-blue-700 cursor-pointer  rounded-lg outline-none transition-colors duration-200 hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
                            >
                              <AiOutlineLayout className="w-7 h-7" />

                              {isOpen && (
                                <span className="text-black mt-2  px-4">
                                  Categories
                                </span>
                              )}
                            </a>
                            <a
                              onClick={() => handleClick(PATH_DASHBOARD.orders)}
                              className="flex h-11 p-2 w-full text-blue-700 cursor-pointer  rounded-lg outline-none transition-colors duration-200 hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
                            >
                              <AiOutlineShop className="w-7 h-7" />

                              {isOpen && (
                                <span className="text-black mt-2  px-4">
                                  Orders
                                </span>
                              )}
                            </a>
                          </>
                        ) : (
                          <>
                            <a
                              onClick={() =>
                                handleClick(PATH_DASHBOARD.dashboard)
                              }
                              className="flex h-11 p-2 w-full text-blue-700 cursor-pointer  rounded-lg outline-none transition-colors duration-200 hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
                            >
                              <AiOutlineHome className="w-7 h-7" />

                              {isOpen && (
                                <span className="text-black mt-2  px-4 ">
                                  Dashboard
                                </span>
                              )}
                            </a>
                            <a
                              onClick={() => handleClick(PATH_DASHBOARD.orders)}
                              className="flex h-11 p-2 w-full text-blue-700 cursor-pointer  rounded-lg outline-none transition-colors duration-200 hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
                            >
                              <AiOutlineShopping className="w-7 h-7" />
                              {isOpen && (
                                <span className="text-black mt-2  px-4">
                                  My Orders
                                </span>
                              )}
                            </a>
                            <a
                              onClick={() => handleClick(PATH_DASHBOARD.inbox)}
                              className="flex h-11 p-2 w-full text-blue-700 cursor-pointer rounded-lg outline-none transition-colors duration-200 hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
                            >
                              <AiOutlineMessage className="w-7 h-7" />

                              {isOpen && (
                                <span className="text-black mt-2  px-4 ">
                                  My Messages
                                </span>
                              )}
                            </a>
                            <a
                              onClick={() => handleClick(PATH_DASHBOARD.cargo)}
                              className="flex h-11 p-2 w-full text-blue-700 cursor-pointer  rounded-lg outline-none transition-colors duration-200 hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
                            >
                              <AiOutlineCar className="w-7 h-7" />

                              {isOpen && (
                                <span className="text-black mt-2  px-4">
                                  Cargo
                                </span>
                              )}
                            </a>
                          </>
                        )}

                        <div className="flex absolute flex-col bottom-16 pr-3 items-center space-y-3 py-3">
                          <NavLink
                            to={`/dashboard/update-my-profile/${user?.id}`}
                          >
                            <div className="flex align-bottom">
                              <div className="flex pt-4 flex-col text-center items-center">
                                <button
                                  x-ref="popperRef"
                                  className="avatar h-12 w-12"
                                >
                                  <img
                                    className="rounded-full"
                                    src={user?.image}
                                  />
                                </button>
                                <h4 className="text-slate-700">
                                  {user?.firstName} {user?.lastName}
                                </h4>
                              </div>
                              {/* ${item.cartId} } */}
                              <div
                                className=" popper-root fixedisShowPopper && 'show'"
                                x-ref="popperRoot"
                              >
                                <div className="popper-box w-64 rounded-lg border border-slate-150 bg-white shadow-soft dark:border-navy-600 dark:bg-navy-700">
                                  <div className="flex items-center space-x-4 rounded-t-lg bg-slate-100 py-5 px-4 dark:bg-navy-800">
                                    <div className="avatar h-14 w-14">
                                      <img
                                        className="rounded-full"
                                        src={user?.image}
                                        alt="avatar"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </NavLink>
                        </div>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
