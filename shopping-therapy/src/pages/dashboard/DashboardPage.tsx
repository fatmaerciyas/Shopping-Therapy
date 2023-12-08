import PageAccessTemplate from "../../components/dashboard/page-access/PageAccessTemplate";
import { BsGlobeAmericas } from "react-icons/bs";

const DashboardPage = () => {
  return (
    <div className="text-center w-full pt-10 bg-white content-end justify-center ">
      <PageAccessTemplate color="#000" icon={BsGlobeAmericas} role="Dashboard">
        <div className="text-3xl text-zinc-950 space-y-2">
          <h1 className=" text-purple-800">Welcome the OneStopShop </h1>
        </div>
      </PageAccessTemplate>
    </div>
  );
};

export default DashboardPage;
