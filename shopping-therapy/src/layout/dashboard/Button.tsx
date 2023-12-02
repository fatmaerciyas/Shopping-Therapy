interface IProps {
  variant: "primary" | "secondary" | "danger" | "light" | "header";
  type: "submit" | "button";
  label: string;
  onClick: () => void;
  loading?: boolean;
  disabled?: boolean;
}
export default function Button({
  variant,
  type,
  label,
  onClick,
  loading,
  disabled,
}: IProps) {
  const primaryClasses =
    "text-primary bg-primary/10 border-[#754eb4] hover:shadow-[0_0_5px_5px_#754eb44c]";

  const secondaryClasses =
    "bg-info/10 text-info border-amber-400 hover:shadow-[0_0_5px_5px_#fbbe2465]";

  const dangerClasses =
    "bg-warning/10 text-warningborder-[#AE899A] hover:shadow-[0_0_5px_5px_#ae899a70]";

  const lightClasses =
    "bg-success/10 text-slate-300 hover:shadow-[0_0_5px_5px_#754eb44c]";

  const headerClasses =
    "text-white hover:shadow-[0_0_5px_5px_#ae899a70] text-3xl";

  const classNameCreator = (): string => {
    let finalClassName =
      "flex justify-center items-center outline-none duration-300 h-10 text-lg font-semibold px-6 rounded-2xl border-2";
    if (variant === "primary") {
      finalClassName += primaryClasses;
    } else if (variant === "secondary") {
      finalClassName += secondaryClasses;
    } else if (variant === "danger") {
      finalClassName += dangerClasses;
    } else if (variant === "light") {
      finalClassName += lightClasses;
    } else if (variant === "header") {
      finalClassName += headerClasses;
    }
    finalClassName +=
      " disabled:shadow-none disabled:bg-gray-300 disabled:border-gray-300";
    return finalClassName;
  };

  const loadingIconCreator = () => {
    return (
      <div className="w-6 h-6 rounded-full animate-spin border-2 border-gray-400 border-t-gray-800"></div>
    );
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={classNameCreator()}
      disabled={disabled}
    >
      {loading ? loadingIconCreator() : label}
    </button>
  );
}
