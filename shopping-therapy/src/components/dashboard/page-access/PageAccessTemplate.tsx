interface IProps {}
import { ReactNode } from "react";
import { IconType } from "react-icons";

interface IProps {
  role: string;
  icon: IconType;
  color: string;
  children?: ReactNode;
}

const PageAccessTemplate = ({ role, icon: Icon, color, children }: IProps) => {
  return (
    <div className="pageTemplate3" style={{ borderColor: color }}>
      <section>{children}</section>
    </div>
  );
};

export default PageAccessTemplate;
