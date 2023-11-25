import moment from "moment";
import { IAuthUser } from "../../../models/Auth";
import { NavLink } from "react-router-dom";

interface IProps {
  usersList: IAuthUser[];
}

const LatestUsersSection = ({ usersList }: IProps) => {
  const selectedUsers = usersList.sort((a, b) => {
    if (a.createdAt < b.createdAt) {
      return 1;
    } else return -1;
  });

  // return (
  //   <div className="col-span-1 bg-white p-2 rounded-md my-8">
  //     <h1 className="text-xl font-bold">Latest Users</h1>
  //     {selectedUsers.slice(0, 7).map((item) => (
  //       <div key={item.id} className="bg-gray-100 p-2 my-6 rounded-md">
  //         <div className="flex justify-between items-center">
  //           <span className="text-lg font-bold ">{item.userName}</span>
  //           <span className="px-2 text-sm text-white bg-sky-500 rounded-xl">
  //             {moment(item.createdAt).fromNow()}
  //           </span>
  //         </div>
  //         <h6 className=" text-slate-700">
  //           {item.firstName} {item.lastName}
  //         </h6>
  //       </div>
  //     ))}
  //   </div>
  // );

  return (
    <div className="card px-4 py-0 sm:px-5 my-6">
      <div className="my-3 flex h-8 items-center justify-between">
        <h2 className="font-medium tracking-wide text-slate-700 dark:text-navy-100">
          Latest Users
        </h2>
        <NavLink
          to="/dashboard/system-logs"
          className="border-b border-dotted border-current pb-0.5 text-xs+ font-medium text-primary outline-none transition-colors duration-300 hover:text-primary/70 focus:text-primary/70 dark:text-accent-light dark:hover:text-accent-light/70 dark:focus:text-accent-light/70"
        >
          View All
        </NavLink>
      </div>

      <div className="mt-12 space-y-4">
        {selectedUsers.slice(0, 7).map((item) => (
          <div key={item.id} className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className=" text-rose-600">#</span>
              <p className="ml-2 ">
                {item.firstName} {item.lastName}
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <p className="text-sm+ text-slate-800 dark:text-navy-100">
                {moment(item.createdAt).fromNow()}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestUsersSection;
