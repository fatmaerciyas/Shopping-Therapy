import { FaUserTie } from "react-icons/fa";
import PageAccessTemplate from "../../components/dashboard/page-access/PageAccessTemplate";

const ManagerPage = () => {
  return (
    <div className="text-center w-full content-end justify-center mt-20">
      <PageAccessTemplate color="#0B96BC" icon={FaUserTie} role="Manager" />
    </div>
  );
};

export default ManagerPage;
