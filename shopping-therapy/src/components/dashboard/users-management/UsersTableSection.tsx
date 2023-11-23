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
    let className = "px-3 py-1 text-white rounded-3xl ";
    if (Roles.includes(RolesEnum.OWNER)) {
      className += "bg-[#3b3549]";
    } else if (Roles.includes(RolesEnum.ADMIN)) {
      className += "bg-[#9333EA]";
    } else if (Roles.includes(RolesEnum.MANAGER)) {
      className += "bg-[#0B96BC]";
    } else if (Roles.includes(RolesEnum.USER)) {
      className += "bg-[#FEC223]";
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
          <table className="is-hoverable w-full text-left">
            <thead>
              <tr>
                <th className="whitespace-nowrap rounded-tl-lg bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5">
                  Order
                </th>
                <th className="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5">
                  Date
                </th>
                <th className="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5">
                  Name
                </th>
                <th className="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5">
                  Address
                </th>
                <th className="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5">
                  Order Status
                </th>
                <th className="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5">
                  Payment
                </th>
                <th className="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5">
                  Total
                </th>

                <th className="whitespace-nowrap rounded-tr-lg bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5"></th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-y border-transparent border-b-slate-200 dark:border-b-navy-500">
                <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                  <p className="font-medium text-primary dark:text-accent-light">
                    #95647
                  </p>
                </td>
                <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                  <p className="font-medium">25 May 2021</p>
                  <p className="mt-0.5 text-xs">01:25 AM</p>
                </td>
                <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                  <div className="flex items-center space-x-4">
                    <div className="avatar h-9 w-9">
                      <img
                        className="mask is-squircle"
                        src="images/avatar/avatar-20.jpg"
                        alt="avatar"
                      />
                    </div>

                    <span className="font-medium text-slate-700 dark:text-navy-100">
                      Anthony Jensen
                    </span>
                  </div>
                </td>
                <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                  <p className="w-48 overflow-hidden text-ellipsis text-xs+">
                    260 W. Storm Street New York, NY 10025.
                  </p>
                </td>
                <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                  <div className="badge bg-warning/10 text-warning dark:bg-warning/15">
                    Unconfirmed
                  </div>
                </td>
                <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                  <div className="badge space-x-2.5 text-xs+ text-warning">
                    <div className="h-2 w-2 rounded-full bg-current"></div>
                    <span>Await Auth</span>
                  </div>
                </td>

                <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                  <p className="text-sm+ font-medium text-slate-700 dark:text-navy-100">
                    $2 654
                  </p>
                </td>
                <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                  <button className="btn h-8 w-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                      />
                    </svg>
                  </button>
                </td>
              </tr>
              <tr className="border-y border-transparent border-b-slate-200 dark:border-b-navy-500">
                <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                  <p className="font-medium text-primary dark:text-accent-light">
                    #84895
                  </p>
                </td>
                <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                  <p className="font-medium">03 May 2021</p>
                  <p className="mt-0.5 text-xs">09:44 AM</p>
                </td>
                <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                  <div className="flex items-center space-x-4">
                    <div className="avatar h-9 w-9">
                      <img
                        className="mask is-squircle"
                        src="images/avatar/avatar-19.jpg"
                        alt="avatar"
                      />
                    </div>

                    <span className="font-medium text-slate-700 dark:text-navy-100">
                      John Due
                    </span>
                  </div>
                </td>
                <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                  <p className="w-48 overflow-hidden text-ellipsis text-xs+">
                    13811 Gimbert Ln Santa Ana, California(CA), 92705
                  </p>
                </td>
                <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                  <div className="badge bg-success/10 text-success dark:bg-success/15">
                    Completed
                  </div>
                </td>
                <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                  <div className="badge space-x-2.5 text-xs+ text-success">
                    <div className="h-2 w-2 rounded-full bg-current"></div>
                    <span>Paid</span>
                  </div>
                </td>
                <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                  <p className="text-sm+ font-medium text-slate-700 dark:text-navy-100">
                    $3 654
                  </p>
                </td>
                <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                  <button className="btn h-8 w-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                      />
                    </svg>
                  </button>
                </td>
              </tr>
              <tr className="border-y border-transparent border-b-slate-200 dark:border-b-navy-500">
                <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                  <p className="font-medium text-primary dark:text-accent-light">
                    #49756
                  </p>
                </td>
                <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                  <p className="font-medium">19 Jun 2021</p>
                  <p className="mt-0.5 text-xs">5:43 AM</p>
                </td>
                <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                  <div className="flex items-center space-x-4">
                    <div className="avatar h-9 w-9">
                      <img
                        className="mask is-squircle"
                        src="images/avatar/avatar-18.jpg"
                        alt="avatar"
                      />
                    </div>

                    <span className="font-medium text-slate-700 dark:text-navy-100">
                      Tom Robert
                    </span>
                  </div>
                </td>
                <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                  <p className="w-48 overflow-hidden text-ellipsis text-xs+">
                    3803 Fox Rd Huron, Ohio(OH), 44839
                  </p>
                </td>
                <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                  <div className="badge bg-info/10 text-info dark:bg-info/15">
                    Shipped
                  </div>
                </td>
                <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                  <div className="badge space-x-2.5 text-xs+ text-success">
                    <div className="h-2 w-2 rounded-full bg-current"></div>
                    <span>Paid</span>
                  </div>
                </td>
                <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                  <p className="text-sm+ font-medium text-slate-700 dark:text-navy-100">
                    $6 156
                  </p>
                </td>
                <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                  <button className="btn h-8 w-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                      />
                    </svg>
                  </button>
                </td>
              </tr>
              <tr className="border-y border-transparent border-b-slate-200 dark:border-b-navy-500">
                <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                  <p className="font-medium text-primary dark:text-accent-light">
                    #79632
                  </p>
                </td>
                <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                  <p className="font-medium">03 Jun 2021</p>
                  <p className="mt-0.5 text-xs">4:54 AM</p>
                </td>
                <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                  <div className="flex items-center space-x-4">
                    <div className="avatar h-9 w-9">
                      <img
                        className="mask is-squircle"
                        src="images/avatar/avatar-17.jpg"
                        alt="avatar"
                      />
                    </div>

                    <span className="font-medium text-slate-700 dark:text-navy-100">
                      Nolan Doe
                    </span>
                  </div>
                </td>
                <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                  <p className="w-48 overflow-hidden text-ellipsis text-xs+">
                    1805 Jackson Ave Seaford, New York(NY), 11783
                  </p>
                </td>
                <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                  <div className="badge bg-primary/10 text-primary dark:bg-accent-light/15 dark:text-accent-light">
                    Processing
                  </div>
                </td>
                <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                  <div className="badge space-x-2.5 text-xs+ text-success">
                    <div className="h-2 w-2 rounded-full bg-current"></div>
                    <span>Paid</span>
                  </div>
                </td>
                <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                  <p className="text-sm+ font-medium text-slate-700 dark:text-navy-100">
                    $7 621
                  </p>
                </td>
                <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                  <button className="btn h-8 w-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                      />
                    </svg>
                  </button>
                </td>
              </tr>
              <tr className="border-y border-transparent border-b-slate-200 dark:border-b-navy-500">
                <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                  <p className="font-medium text-primary dark:text-accent-light">
                    #12668
                  </p>
                </td>
                <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                  <p className="font-medium">09 Jun 2021</p>
                  <p className="mt-0.5 text-xs">2:03 AM</p>
                </td>
                <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                  <div className="flex items-center space-x-4">
                    <div className="avatar h-9 w-9">
                      <img
                        className="mask is-squircle"
                        src="images/avatar/avatar-16.jpg"
                        alt="avatar"
                      />
                    </div>

                    <span className="font-medium text-slate-700 dark:text-navy-100">
                      Henry Curtis
                    </span>
                  </div>
                </td>
                <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                  <p className="w-48 overflow-hidden text-ellipsis text-xs+">
                    421 Basswood Ln Haysville, Kansas(KS), 67060
                  </p>
                </td>
                <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                  <div className="badge bg-error/10 text-error dark:bg-error/15">
                    Cancelled
                  </div>
                </td>
                <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                  <div className="badge space-x-2.5 text-xs+ text-error">
                    <div className="h-2 w-2 rounded-full bg-current"></div>
                    <span>Failed</span>
                  </div>
                </td>
                <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                  <p className="text-sm+ font-medium text-slate-700 dark:text-navy-100">
                    $456
                  </p>
                </td>
                <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                  <button className="btn h-8 w-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                      />
                    </svg>
                  </button>
                </td>
              </tr>
              <tr className="border-y border-transparent border-b-slate-200 dark:border-b-navy-500">
                <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                  <p className="font-medium text-primary dark:text-accent-light">
                    #66463
                  </p>
                </td>
                <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                  <p className="font-medium">23 Jul 2021</p>
                  <p className="mt-0.5 text-xs">9:11 AM</p>
                </td>
                <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                  <div className="flex items-center space-x-4">
                    <div className="avatar h-9 w-9">
                      <img
                        className="mask is-squircle"
                        src="images/avatar/avatar-11.jpg"
                        alt="avatar"
                      />
                    </div>

                    <span className="font-medium text-slate-700 dark:text-navy-100">
                      Katrina West
                    </span>
                  </div>
                </td>
                <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                  <p className="w-48 overflow-hidden text-ellipsis text-xs+">
                    205 Hope Rd Helena, Montana(MT), 59602
                  </p>
                </td>
                <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                  <div className="badge bg-warning/10 text-warning dark:bg-warning/15">
                    Unconfirmed
                  </div>
                </td>
                <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                  <div className="badge space-x-2.5 text-xs+ text-warning">
                    <div className="h-2 w-2 rounded-full bg-current"></div>
                    <span>Await Auth</span>
                  </div>
                </td>
                <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                  <p className="text-sm+ font-medium text-slate-700 dark:text-navy-100">
                    $5 116
                  </p>
                </td>
                <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                  <button className="btn h-8 w-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                      />
                    </svg>
                  </button>
                </td>
              </tr>

              <tr className="border-y border-transparent border-b-slate-200 dark:border-b-navy-500">
                <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                  <p className="font-medium text-primary dark:text-accent-light">
                    #53133
                  </p>
                </td>
                <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                  <p className="font-medium">11 Aug 2021</p>
                  <p className="mt-0.5 text-xs">12:11 AM</p>
                </td>
                <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                  <div className="flex items-center space-x-4">
                    <div className="avatar h-9 w-9">
                      <img
                        className="mask is-squircle"
                        src="images/avatar/avatar-1.jpg"
                        alt="avatar"
                      />
                    </div>

                    <span className="font-medium text-slate-700 dark:text-navy-100">
                      Lance Tucker
                    </span>
                  </div>
                </td>
                <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                  <p className="w-48 overflow-hidden text-ellipsis text-xs+">
                    1805 Jackson Ave Seaford, New York(NY), 11783
                  </p>
                </td>
                <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                  <div className="badge bg-warning/10 text-warning dark:bg-warning/15">
                    Unconfirmed
                  </div>
                </td>
                <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                  <div className="badge space-x-2.5 text-xs+ text-warning">
                    <div className="h-2 w-2 rounded-full bg-current"></div>
                    <span>Await Auth</span>
                  </div>
                </td>

                <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                  <p className="text-sm+ font-medium text-slate-700 dark:text-navy-100">
                    $4 952
                  </p>
                </td>
                <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                  <button className="btn h-8 w-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                      />
                    </svg>
                  </button>
                </td>
              </tr>
              <tr className="border-y border-transparent border-b-slate-200 dark:border-b-navy-500">
                <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                  <p className="font-medium text-primary dark:text-accent-light">
                    #5684
                  </p>
                </td>
                <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                  <p className="font-medium">11 May 2021</p>
                  <p className="mt-0.5 text-xs">07:55 AM</p>
                </td>
                <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                  <div className="flex items-center space-x-4">
                    <div className="avatar h-9 w-9">
                      <img
                        className="mask is-squircle"
                        src="images/avatar/avatar-2.jpg"
                        alt="avatar"
                      />
                    </div>

                    <span className="font-medium text-slate-700 dark:text-navy-100">
                      Raul Bradley
                    </span>
                  </div>
                </td>
                <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                  <p className="w-48 overflow-hidden text-ellipsis text-xs+">
                    13811 Gimbert Ln Santa Ana, California(CA), 92705
                  </p>
                </td>
                <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                  <div className="badge bg-success/10 text-success dark:bg-success/15">
                    Completed
                  </div>
                </td>
                <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                  <div className="badge space-x-2.5 text-xs+ text-success">
                    <div className="h-2 w-2 rounded-full bg-current"></div>
                    <span>Paid</span>
                  </div>
                </td>
                <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                  <p className="text-sm+ font-medium text-slate-700 dark:text-navy-100">
                    $5 137
                  </p>
                </td>
                <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                  <button className="btn h-8 w-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                      />
                    </svg>
                  </button>
                </td>
              </tr>
              <tr className="border-y border-transparent border-b-slate-200 dark:border-b-navy-500">
                <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                  <p className="font-medium text-primary dark:text-accent-light">
                    #64669
                  </p>
                </td>
                <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                  <p className="font-medium">29 Jun 2021</p>
                  <p className="mt-0.5 text-xs">1:54 AM</p>
                </td>
                <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                  <div className="flex items-center space-x-4">
                    <div className="avatar h-9 w-9">
                      <img
                        className="mask is-squircle"
                        src="images/avatar/avatar-5.jpg"
                        alt="avatar"
                      />
                    </div>

                    <span className="font-medium text-slate-700 dark:text-navy-100">
                      Derrick Simmons
                    </span>
                  </div>
                </td>
                <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                  <p className="w-48 overflow-hidden text-ellipsis text-xs+">
                    3803 Fox Rd Huron, Ohio(OH), 44839
                  </p>
                </td>
                <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                  <div className="badge bg-info/10 text-info dark:bg-info/15">
                    Shipped
                  </div>
                </td>
                <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                  <div className="badge space-x-2.5 text-xs+ text-success">
                    <div className="h-2 w-2 rounded-full bg-current"></div>
                    <span>Paid</span>
                  </div>
                </td>
                <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                  <p className="text-sm+ font-medium text-slate-700 dark:text-navy-100">
                    $2 566
                  </p>
                </td>
                <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                  <button className="btn h-8 w-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                      />
                    </svg>
                  </button>
                </td>
              </tr>
              <tr className="border-y border-transparent border-b-slate-200 dark:border-b-navy-500">
                <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                  <p className="font-medium text-primary dark:text-accent-light">
                    #31669
                  </p>
                </td>
                <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                  <p className="font-medium">08 Jun 2021</p>
                  <p className="mt-0.5 text-xs">7:36 AM</p>
                </td>
                <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                  <div className="flex items-center space-x-4">
                    <div className="avatar h-9 w-9">
                      <img
                        className="mask is-squircle"
                        src="images/avatar/avatar-7.jpg"
                        alt="avatar"
                      />
                    </div>

                    <span className="font-medium text-slate-700 dark:text-navy-100">
                      Samantha Shelton
                    </span>
                  </div>
                </td>
                <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                  <p className="w-48 overflow-hidden text-ellipsis text-xs+">
                    1805 Jackson Ave Seaford, New York(NY), 11783
                  </p>
                </td>
                <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                  <div className="badge bg-primary/10 text-primary dark:bg-accent-light/15 dark:text-accent-light">
                    Processing
                  </div>
                </td>
                <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                  <div className="badge space-x-2.5 text-xs+ text-success">
                    <div className="h-2 w-2 rounded-full bg-current"></div>
                    <span>Paid</span>
                  </div>
                </td>
                <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                  <p className="text-sm+ font-medium text-slate-700 dark:text-navy-100">
                    $9 665
                  </p>
                </td>
                <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                  <button className="btn h-8 w-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                      />
                    </svg>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="flex flex-col justify-between space-y-4 px-4 py-4 sm:flex-row sm:items-center sm:space-y-0 sm:px-5">
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
        </div>
      </div>
    </div>
  );
};

export default UsersTableSection;
