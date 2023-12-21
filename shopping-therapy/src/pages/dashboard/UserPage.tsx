import { useEffect, useState } from "react";
import { baseUrl } from "../../api/url.contants";
import axios from "axios";
import { IAuthUser } from "../../models/Auth";
import Spinner from "../../layout/Spinner";
import { NavLink, useNavigate } from "react-router-dom";
import Button from "../../layout/dashboard/Button";
import { AiOutlineDelete } from "react-icons/ai";

const UserPage = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [users, setUsers] = useState<IAuthUser[]>([]);

  const navigate = useNavigate();

  useEffect(() => {
    async function fetchdata() {
      await axios
        .get<IAuthUser[]>(baseUrl + "Auth/users")
        .then((response) => {
          setUsers(response.data);
        })
        .catch((error) => console.log(error));

      setIsLoaded(true);
    }
    fetchdata();
  }, []);

  if (!isLoaded) return <Spinner />;

  const handleDelete = (id: string) => {
    console.log(id);
  };
  return (
    <div
      id="root"
      className="min-h-100vh flex grow  bg-slate-50 dark:bg-navy-900"
    >
      <main className="main-content  w-full px-[var(--margin-x)] pb-6 ">
        <div className="flex justify-between">
          <p className="ml-0 text-2xl text-indigo-500 mb-8">User Management</p>
          <Button
            label="New User"
            onClick={() => navigate(`/dashboard/add-user`)}
            type="button"
            variant="success"
          />
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6 xl:grid-cols-4">
          {users &&
            users.map((user) => (
              <div className="card">
                <div className="p-2 text-right">
                  <div
                    x-data="usePopper({placement:'bottom-end',offset:4})"
                    className="inline-flex"
                  >
                    <button
                      x-ref="popperRef"
                      className="btn h-8 w-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
                    ></button>
                  </div>
                </div>
                <div className="flex grow flex-col items-center px-4 pb-5 sm:px-5">
                  <div className="avatar h-20 w-20">
                    <img
                      className="rounded-full"
                      src={user.image}
                      alt="avatar"
                    />
                  </div>
                  <h3 className="pt-3 text-lg font-medium text-slate-700 dark:text-navy-100">
                    {user.firstName} {user.lastName}
                  </h3>
                  <p className="text-xs+">Senior Developer</p>
                  <div className="inline-space mt-3 flex grow flex-wrap items-start">
                    <a
                      href="#"
                      className="tag rounded-full bg-secondary/10 text-secondary hover:bg-secondary/20 focus:bg-secondary/20 active:bg-secondary/25 dark:bg-secondary-light/10 dark:text-secondary-light dark:hover:bg-secondary-light/20 dark:focus:bg-secondary-light/20 dark:active:bg-secondary-light/25"
                    >
                      {user.roles}
                    </a>
                    <a
                      href="#"
                      className="tag rounded-full bg-success/10 text-success hover:bg-success/20 focus:bg-success/20 active:bg-success/25"
                    >
                      {user.userName}
                    </a>
                    <a
                      href="#"
                      className="tag rounded-full bg-warning/10 text-warning hover:bg-warning/20 focus:bg-warning/20 active:bg-warning/25"
                    >
                      {new Intl.DateTimeFormat("tr-TR").format(
                        new Date(user.createdAt)
                      )}
                    </a>
                  </div>
                  <div className="mt-6 grid w-full grid-cols-2 gap-2">
                    <button className="btn space-x-2 bg-primary px-0 font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke="currentColor"
                          stroke-width="2"
                          d="M5 19.111c0-2.413 1.697-4.468 4.004-4.848l.208-.035a17.134 17.134 0 015.576 0l.208.035c2.307.38 4.004 2.435 4.004 4.848C19 20.154 18.181 21 17.172 21H6.828C5.818 21 5 20.154 5 19.111zM16.083 6.938c0 2.174-1.828 3.937-4.083 3.937S7.917 9.112 7.917 6.937C7.917 4.764 9.745 3 12 3s4.083 1.763 4.083 3.938z"
                        />
                      </svg>
                      <NavLink to={`/dashboard/update-my-profile/${user?.id}`}>
                        <span>Profile</span>
                      </NavLink>
                    </button>
                    <button
                      onClick={() => handleDelete(user.id)}
                      className="btn space-x-2 bg-error/10 text-error  hover:bg-error/20 focus:bg-error/20 active:bg-error/25"
                    >
                      <AiOutlineDelete />
                      <span> Delete </span>{" "}
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </main>
    </div>
  );
};

export default UserPage;
