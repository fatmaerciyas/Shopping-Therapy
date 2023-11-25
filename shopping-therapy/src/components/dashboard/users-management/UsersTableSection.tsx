import { useNavigate } from "react-router-dom";

import moment from "moment";
import { isAuthorizedForUpdateRole } from "../../../auth/auth.utils";
import useAuth from "../../../hooks/useAuth.hook";
import { IAuthUser, RolesEnum } from "../../../models/Auth";
import Button from "../../../layout/dashboard/Button";

interface IProps {
  usersList: IAuthUser[];
}

const UsersTableSection = ({ usersList }: IProps) => {
  const { user: loggedInUser } = useAuth();
  const navigate = useNavigate();

  const RoleClassNameCreator = (Roles: string[]) => {
    let className = "px-3 py-1 rounded-md ";
    if (Roles.includes(RolesEnum.OWNER)) {
      className += "bg-success/10 text-success";
    } else if (Roles.includes(RolesEnum.ADMIN)) {
      className += "bg-primary/10 text-primary";
    } else if (Roles.includes(RolesEnum.MANAGER)) {
      className += "bg-info/10 text-info";
    } else if (Roles.includes(RolesEnum.USER)) {
      className += " bg-warning/10 text-warning";
    }
    return className;
  };

  return (
    // <div className="bg-white p-2 rounded-md">
    //   <h1 className="text-xl font-bold">Users Table</h1>
    //   <div className="grid grid-cols-7 px-2 my-1 text-lg font-semibold border border-gray-300 rounded-md">
    //     <div>No</div>
    //     <div>User Name</div>
    //     <div>First Name</div>
    //     <div>Last Name</div>
    //     <div>Creation Time</div>
    //     <div className="flex justify-center">Roles</div>
    //     <div>Operations</div>
    //   </div>
    //   {usersList.map((user, index) => (
    //     <div
    //       key={index}
    //       className="grid grid-cols-7 px-2 h-12 my-1 border border-gray-200 hover:bg-gray-200 rounded-md"
    //     >
    //       <div className="flex items-center">{index + 1}</div>
    //       <div className="flex items-center font-semibold">{user.userName}</div>
    //       <div className="flex items-center">{user.firstName}</div>
    //       <div className="flex items-center">{user.lastName}</div>
    //       <div className="flex items-center">
    //         {moment(user.createdAt).format("YYYY-MM-DD|HH:mm")}
    //       </div>
    //       <div className="flex justify-center items-center">
    //         <span className={RoleClassNameCreator(user.roles)}>
    //           {user.roles}
    //         </span>
    //       </div>
    //       <div className="flex items-center">
    //         <Button
    //           label="Update Role"
    //           onClick={() =>
    //             navigate(`/dashboard/update-role/${user.userName}`)
    //           }
    //           type="button"
    //           variant="primary"
    //           disabled={
    //             !isAuthorizedForUpdateRole(
    //               loggedInUser!.roles[0],
    //               user.roles[0]
    //             )
    //           }
    //         />
    //       </div>
    //     </div>
    //   ))}
    // </div>

    <div className="col-span-12">
      <div className="card mt-3">
        <div className="is-scrollbar-hidden min-w-full overflow-x-auto">
          <table className="is-hoverable w-full text-left mb-16">
            <thead>
              <tr>
                <th className="whitespace-nowrap rounded-tl-lg bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5">
                  No
                </th>
                <th className="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5">
                  Creation Time
                </th>
                <th className="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5">
                  Username
                </th>
                <th className="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5">
                  Email
                </th>
                <th className="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5">
                  Roles
                </th>
                <th className="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5">
                  Operations
                </th>

                <th className="whitespace-nowrap rounded-tr-lg bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5"></th>
              </tr>
            </thead>
            <tbody>
              {usersList.map((user, index) => (
                <tr
                  key={index}
                  className="border-y border-transparent border-b-slate-200 dark:border-b-navy-500"
                >
                  <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                    <p className="font-medium text-primary dark:text-accent-light">
                      {index + 1}
                    </p>
                  </td>
                  <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                    <p className="font-medium">
                      {moment(user.createdAt).format("YYYY-MM-DD|HH:mm")}
                    </p>
                  </td>
                  <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                    <div className="flex items-center space-x-4">
                      <div className="avatar h-9 w-9">
                        <img
                          className="mask is-squircle"
                          src={user.image}
                          alt="avatar"
                        />
                      </div>

                      <span className="font-medium text-slate-700 dark:text-navy-100">
                        {user.userName}
                      </span>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                    <p className="w-48 overflow-hidden text-ellipsis text-xs+">
                      {user.email}
                    </p>
                  </td>
                  <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                    <span className={RoleClassNameCreator(user.roles)}>
                      {user.roles}
                    </span>
                  </td>
                  <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                    <Button
                      label="Update Role"
                      onClick={() =>
                        navigate(`/dashboard/update-role/${user.userName}`)
                      }
                      type="button"
                      variant="primary"
                      disabled={
                        !isAuthorizedForUpdateRole(
                          loggedInUser!.roles[0],
                          user.roles[0]
                        )
                      }
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* <div className="flex flex-col justify-between space-y-4 px-4 py-4 sm:flex-row sm:items-center sm:space-y-0 sm:px-5">
          <div className="flex items-center space-x-2 text-xs+">
            <span>Show</span>
            <label className="block">
              <select className="form-select rounded-full border border-slate-300 bg-white px-2 py-1 pr-6 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:bg-navy-700 dark:hover:border-navy-400 dark:focus:border-accent">
                <option>10</option>
                <option>30</option>
                <option>50</option>
              </select>
            </label>
            <span>entries</span>
          </div>

          <ol className="pagination">
            <li className="rounded-l-lg bg-slate-150 dark:bg-navy-500">
              <a
                href="#"
                className="flex h-8 w-8 items-center justify-center rounded-lg text-slate-500 transition-colors hover:bg-slate-300 focus:bg-slate-300 active:bg-slate-300/80 dark:text-navy-200 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </a>
            </li>
            <li className="bg-slate-150 dark:bg-navy-500">
              <a
                href="#"
                className="flex h-8 min-w-[2rem] items-center justify-center rounded-lg px-3 leading-tight transition-colors hover:bg-slate-300 focus:bg-slate-300 active:bg-slate-300/80 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
              >
                1
              </a>
            </li>
            <li className="bg-slate-150 dark:bg-navy-500">
              <a
                href="#"
                className="flex h-8 min-w-[2rem] items-center justify-center rounded-lg bg-primary px-3 leading-tight text-white transition-colors hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90"
              >
                2
              </a>
            </li>
            <li className="bg-slate-150 dark:bg-navy-500">
              <a
                href="#"
                className="flex h-8 min-w-[2rem] items-center justify-center rounded-lg px-3 leading-tight transition-colors hover:bg-slate-300 focus:bg-slate-300 active:bg-slate-300/80 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
              >
                3
              </a>
            </li>
            <li className="bg-slate-150 dark:bg-navy-500">
              <a
                href="#"
                className="flex h-8 min-w-[2rem] items-center justify-center rounded-lg px-3 leading-tight transition-colors hover:bg-slate-300 focus:bg-slate-300 active:bg-slate-300/80 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
              >
                4
              </a>
            </li>
            <li className="bg-slate-150 dark:bg-navy-500">
              <a
                href="#"
                className="flex h-8 min-w-[2rem] items-center justify-center rounded-lg px-3 leading-tight transition-colors hover:bg-slate-300 focus:bg-slate-300 active:bg-slate-300/80 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
              >
                5
              </a>
            </li>
            <li className="rounded-r-lg bg-slate-150 dark:bg-navy-500">
              <a
                href="#"
                className="flex h-8 w-8 items-center justify-center rounded-lg text-slate-500 transition-colors hover:bg-slate-300 focus:bg-slate-300 active:bg-slate-300/80 dark:text-navy-200 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </li>
          </ol>

          <div className="text-xs+">1 - 10 of 10 entries</div>
        </div> */}
      </div>
    </div>
  );
};

export default UsersTableSection;
