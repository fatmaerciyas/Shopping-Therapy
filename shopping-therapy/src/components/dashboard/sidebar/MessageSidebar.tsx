import { NavLink } from "react-router-dom";

export default function MessageSidebar() {
  return (
    <>
      <div className="sidebar print:hidden">
        <div className="sidebar-panel">
          <div className="flex h-full grow flex-col bg-white pl-[var(--main-sidebar-width)] dark:bg-navy-750">
            <div className="flex h-[calc(100%-4.5rem)] grow flex-col">
              <div className="is-scrollbar-hidden grow overflow-y-auto">
                <div className="mt-2 px-4">
                  <button className="btn mb-4 w-full space-x-2 rounded-full border border-slate-200 py-2 font-medium text-slate-800 hover:bg-slate-150 focus:bg-slate-150 active:bg-slate-150/80 dark:border-navy-500 dark:text-navy-50 dark:hover:bg-navy-500 dark:focus:bg-navy-500 dark:active:bg-navy-500/90">
                    <NavLink
                      to="/dashboard/create-message"
                      className="text-xs w-12 h-8"
                    >
                      New Message
                    </NavLink>
                  </button>
                </div>
                <ul className="mt-4 space-y-1.5 px-2 font-inter text-xs+ font-medium"></ul>
                <div className="my-3 mx-4 h-px bg-slate-200 dark:bg-navy-500"></div>

                <div className="flex items-left justify-between px-4">
                  <span className="text-xs font-medium uppercase">Labels </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="sidebar-panel-min w-36 my-2">
          <div className="flex h-full flex-col items-left bg-white dark:bg-navy-750">
            <div className="flex h-[calc(100%-4.5rem)] grow mt-8 flex-col">
              {/* NAV MAIL */}
              <div className="is-scrollbar-hidden flex grow flex-col overflow-y-auto">
                <ul className="mt-4 space-y-1">
                  <li>
                    <a
                      className="group flex justify-between space-x-2 rounded-lg p-2 tracking-wide text-primary outline-none transition-all dark:bg-accent-light/10 dark:text-accent-light"
                      href="#"
                    >
                      <div className="flex items-left space-x-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4.5 w-4.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="1.5"
                            d="M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v8m0 0l3-3m-3 3L9 8m-5 5h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293h3.172a1 1 0 00.707-.293l2.414-2.414a1 1 0 01.707-.293H20"
                          />
                        </svg>
                        <NavLink
                          to="/dashboard/inbox"
                          className="text-xs w-12 h-8"
                        >
                          Inbox
                        </NavLink>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      className="group flex justify-between space-x-2 rounded-lg p-2 tracking-wide text-slate-800 outline-none transition-all hover:bg-slate-100 focus:bg-slate-100 dark:text-navy-100 dark:hover:bg-navy-600 dark:focus:bg-navy-600"
                      href="#"
                    >
                      <div className="flex items-left space-x-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4.5 w-4.5 text-slate-400 transition-colors group-hover:text-slate-500 group-focus:text-slate-500 dark:text-navy-300 dark:group-hover:text-navy-200 dark:group-focus:text-navy-200"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="currentColor"
                            d="m8.625 3.37.353-.661-.353.661Zm10.49 5.602-.354.662.353-.662Zm-.005 6.082.352.662-.352-.662ZM8.626 20.632l-.352-.662.352.662Zm-4.461-4.08-.718-.216.718.216Zm-.007-9.107-.718.215.718-.215Zm4.713 5.323a.75.75 0 0 0 0-1.5v1.5Zm-.6-8.736 10.49 5.602.707-1.323-10.49-5.602-.707 1.323Zm10.487 10.36L8.274 19.97l.704 1.324 10.484-5.578-.704-1.324ZM4.883 16.768l1.364-4.534-1.437-.432-1.363 4.534 1.436.432Zm1.364-4.965-1.37-4.574-1.437.43 1.37 4.574 1.437-.43Zm-.719.965h3.343v-1.5H5.528v1.5Zm2.746 7.202c-.95.505-1.94.289-2.643-.353-.706-.646-1.091-1.708-.748-2.85l-1.436-.431c-.519 1.724.064 3.374 1.172 4.388 1.113 1.017 2.783 1.409 4.36.57l-.705-1.324ZM18.76 9.634c1.82.972 1.818 3.79-.003 4.758l.704 1.325c2.882-1.534 2.884-5.869.006-7.406l-.707 1.323ZM8.978 2.709c-1.575-.841-3.246-.453-4.36.564C3.507 4.285 2.922 5.935 3.44 7.66l1.437-.43c-.343-1.143.044-2.204.751-2.85.703-.64 1.694-.855 2.643-.348l.707-1.323Z"
                          />
                        </svg>

                        <NavLink
                          to="/dashboard/send-message"
                          className="text-xs w-12 h-8"
                        >
                          SendBox
                        </NavLink>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      className="group flex justify-between space-x-2 rounded-lg p-2 tracking-wide text-slate-800 outline-none transition-all hover:bg-slate-100 focus:bg-slate-100 dark:text-navy-100 dark:hover:bg-navy-600 dark:focus:bg-navy-600"
                      href="#"
                    >
                      <div className="flex items-left space-x-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4.5 w-4.5 text-slate-400 transition-colors group-hover:text-slate-500 group-focus:text-slate-500 dark:text-navy-300 dark:group-hover:text-navy-200 dark:group-focus:text-navy-200"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                          />
                        </svg>

                        <NavLink
                          to="/dashboard/create-message"
                          className="text-xs w-12 h-8"
                        >
                          New Message
                        </NavLink>
                      </div>
                    </a>
                  </li>

                  <li>
                    <a
                      className="group flex justify-between space-x-2 rounded-lg p-2 tracking-wide text-error outline-none transition-all hover:bg-error/20 focus:bg-error/20"
                      href="#"
                    >
                      <div className="flex items-left space-x-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4.5 w-4.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                          />
                        </svg>

                        <NavLink
                          to="/dashboard/create-message"
                          className="text-xs w-12 h-8"
                        >
                          Trash
                        </NavLink>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
              {/* NAV MAIL END */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
