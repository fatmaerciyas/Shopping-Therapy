import { FaUser, FaUserCog, FaUserShield, FaUserTie } from "react-icons/fa";
import { IAuthUser, RolesEnum } from "../../../models/Auth";
import UserCountCard from "./UserCountCard";

interface IProps {
  usersList: IAuthUser[];
}

const UserCountSection = ({ usersList }: IProps) => {
  let owners = 0;
  let admins = 0;
  let managers = 0;
  let users = 0;

  usersList.forEach((item) => {
    if (item.roles.includes(RolesEnum.OWNER)) {
      owners++;
    } else if (item.roles.includes(RolesEnum.ADMIN)) {
      admins++;
    } else if (item.roles.includes(RolesEnum.MANAGER)) {
      managers++;
    } else if (item.roles.includes(RolesEnum.USER)) {
      users++;
    }
  });

  const userCountData = [
    {
      count: owners,
      role: RolesEnum.OWNER,
      icon: FaUserCog,
      color: "rgb(251 207 232)",
    },
    {
      count: admins,
      role: RolesEnum.ADMIN,
      icon: FaUserShield,
      color: "rgb(165 243 252)",
    },
    {
      count: managers,
      role: RolesEnum.MANAGER,
      icon: FaUserTie,
      color: "rgb(245 158 11)",
    },
    {
      count: users,
      role: RolesEnum.USER,
      icon: FaUser,
      color: "rgb(167 243 208)",
    },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-x-4">
      {userCountData.map((item, index) => (
        <UserCountCard
          key={index}
          count={item.count}
          role={item.role}
          icon={item.icon}
          color={item.color}
        />
      ))}
    </div>
  );
};

export default UserCountSection;
