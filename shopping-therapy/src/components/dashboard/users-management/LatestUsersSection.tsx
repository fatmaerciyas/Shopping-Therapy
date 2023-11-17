import moment from "moment";
import { IAuthUser } from "../../../models/Auth";

interface IProps {
  usersList: IAuthUser[];
}

const LatestUsersSection = ({ usersList }: IProps) => {
  const selectedUsers = usersList.sort((a, b) => {
    if (a.createdAt < b.createdAt) {
      return 1;
    } else return -1;
  });

  return (
    <div className="col-span-1 bg-white p-2 rounded-md my-8">
      <h1 className="text-xl font-bold">Latest Users</h1>
      {selectedUsers.slice(0, 7).map((item) => (
        <div key={item.id} className="bg-gray-100 p-2 my-6 rounded-md">
          <div className="flex justify-between items-center">
            <span className="text-lg font-bold ">{item.userName}</span>
            <span className="px-2 text-sm text-white bg-sky-500 rounded-xl">
              {moment(item.createdAt).fromNow()}
            </span>
          </div>
          <h6 className=" text-slate-700">
            {item.firstName} {item.lastName}
          </h6>
        </div>
      ))}
    </div>
  );
};

export default LatestUsersSection;
