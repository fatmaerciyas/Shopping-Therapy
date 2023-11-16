import { FaUser } from "react-icons/fa";
import PageAccessTemplate from "../../components/dashboard/page-access/PageAccessTemplate";

const UserPage = () => {
  return (
    <div className="text-center w-full content-end justify-center mt-20">
      <PageAccessTemplate color="#FEC223" icon={FaUser} role="User" />
    </div>
  );
};

export default UserPage;
