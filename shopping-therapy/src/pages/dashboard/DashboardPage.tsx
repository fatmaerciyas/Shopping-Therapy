import PageAccessTemplate from "../../components/dashboard/page-access/PageAccessTemplate";
import { BsGlobeAmericas } from "react-icons/bs";

const DashboardPage = () => {
  return (
    <div className="text-center w-full content-end justify-center mt-20">
      <PageAccessTemplate color="#000" icon={BsGlobeAmericas} role="Dashboard">
        <div className="text-3xl text-zinc-950 space-y-2">
          <h1>Dashboard Access:</h1>
          <h1>Owner</h1>
          <h1>Admin</h1>
          <h1>Manager</h1>
          <h1>User</h1>
        </div>
      </PageAccessTemplate>
    </div>
  );
};

export default DashboardPage;
