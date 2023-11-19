import { Control, Controller } from "react-hook-form";

interface IProps {
  control: Control<any, any>;
  placeholder?: string;
  inputName: string;
  inputType?: string;
  error?: string;
}

const InputField = ({
  control,

  inputName,
  inputType = "text",
  error,
  placeholder,
}: IProps) => {
  const renderTopRow = () => {
    if (error) {
      return <span className="text-red-600 font-semibold">{error}</span>;
    }

    return null;
  };

  const dynamicClassName = error
    ? "form-input peer w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:z-10 hover:border-slate-400 focus:z-10 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
    : "form-input peer w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:z-10 hover:border-slate-400 focus:z-10 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent";

  return (
    <div className="px-4 my-2 w-full rounded-lg">
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
            placeholder={placeholder}
          />
        )}
      />
    </div>
  );
};

export default InputField;
