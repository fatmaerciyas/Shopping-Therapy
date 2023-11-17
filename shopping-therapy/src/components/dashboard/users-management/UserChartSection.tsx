import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";
import { IAuthUser, RolesEnum } from "../../../models/Auth";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

interface IProps {
  usersList: IAuthUser[];
}

const UserChartSection = ({ usersList }: IProps) => {
  const chartLabels = [
    RolesEnum.OWNER,
    RolesEnum.ADMIN,
    RolesEnum.MANAGER,
    RolesEnum.USER,
  ];
  const chartValues = [];

  const ownersCount = usersList.filter((q) =>
    q.roles.includes(RolesEnum.OWNER)
  ).length;
  chartValues.push(ownersCount);

  const adminsCount = usersList.filter((q) =>
    q.roles.includes(RolesEnum.ADMIN)
  ).length;
  chartValues.push(adminsCount);

  const managersCount = usersList.filter((q) =>
    q.roles.includes(RolesEnum.MANAGER)
  ).length;
  chartValues.push(managersCount);

  const usersCount = usersList.filter((q) =>
    q.roles.includes(RolesEnum.USER)
  ).length;
  chartValues.push(usersCount);

  const chartOptions = {
    responsive: true,
    scales: {
      x: {
        grid: { display: false },
      },
      y: {
        ticks: { stepSize: 5 },
      },
    },
  };

  const chartData = {
    labels: chartLabels,
    datasets: [
      {
        label: "count",
        data: chartValues,
        borderColor: "rgb(9, 181, 33)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  return (
    <div className="col-span-1 lg:col-span-3  bg-white p-2 rounded-md">
      <h1 className="text-xl font-bold my-6">Users Chart</h1>
      <Line
        options={chartOptions}
        data={chartData}
        className="bg-gray-50 p-2 rounded-lg"
      />
    </div>
  );
};

export default UserChartSection;
