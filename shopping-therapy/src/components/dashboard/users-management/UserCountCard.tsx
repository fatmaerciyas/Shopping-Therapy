import { IconType } from "react-icons";

interface IProps {
  count: number;
  role: string;
  icon: IconType;
  color: string;
}

const UserCountCard = ({ count, role, icon: Icon, color }: IProps) => {
  return (
    <div className="card shadow-none">
      <div
        className={`flex flex-1 flex-row justify-between  rounded-lg dark:bg-transparent sm:p-5 p-8`}
        style={{ backgroundColor: color }}
      >
        {<Icon className="text-white fill-white text-6xl" />}
        <div>
          <h3 className="mt-3 font-medium text-slate-700 line-clamp-2 dark:text-navy-100">
            {count}
          </h3>
          <p className="text-lg ">{role}</p>
        </div>
      </div>
    </div>
  );
};

export default UserCountCard;
{
  /* <div
  className="px-4 py-6 rounded-lg flex justify-between items-center text-white"
  style={{ backgroundColor: color }}
>
  <div>
    <h2 className="text-4xl">{count}</h2>
    <h2 className="text-xl">{role}</h2>
  </div>
  <div>{<Icon className="text-white fill-white text-6xl" />}</div>
</div>; */
}
