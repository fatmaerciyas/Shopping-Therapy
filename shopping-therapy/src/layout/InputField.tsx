import { Control, Controller } from "react-hook-form";

interface IProps {
  control: Control<any, any>;
  label?: string;
  inputName: string;
  inputType?: string;
  error?: string;
}

const InputField = ({
  control,
  label,
  inputName,
  inputType = "text",
  error,
}: IProps) => {
  const renderTopRow = () => {
    if (error) {
      return <span className="text-red-600 font-semibold">{error}</span>;
    }
    if (label) {
      return <label className="font-semibold">{label}</label>;
    }
    return null;
  };

  const dynamicClassName = error
    ? "rounded-lg block w-full "
    : "border-[#754eb477] rounded-lg block w-full ";

  return (
    <div className="px-4 my-2 w-9/12 rounded-lg">
      {renderTopRow()}
      <Controller
        name={inputName}
        control={control}
        render={({ field }) => (
          <input
            {...field}
            autoComplete="off"
            type={inputType}
            className={dynamicClassName}
          />
        )}
      />
    </div>
  );
};

export default InputField;
