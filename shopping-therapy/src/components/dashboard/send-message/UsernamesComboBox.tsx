import { useState } from "react";
import { Control, Controller } from "react-hook-form";

interface IProps {
  usernames: string[];
  control: Control<any, any>;
  name: string;
  error?: string;
}

const UsernamesComboBox = ({ usernames, control, name, error }: IProps) => {
  const [inputValue, setInputValue] = useState<string>("");
  const [showComboBox, setShowComboBox] = useState<boolean>(false);

  const renderTopRow = () => {
    if (error) {
      return <span className="text-red-600 font-semibold">{error}</span>;
    }
    return (
      <span className="font-medium text-slate-600 dark:text-navy-100">To:</span>
    );
  };

  const usernamesToShow = inputValue
    ? usernames.filter((q) => q.includes(inputValue))
    : usernames;

  const dynamicClassName = error
    ? "form-input peer w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:z-10 hover:border-slate-400 focus:z-10 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
    : "form-input peer w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:z-10 hover:border-slate-400 focus:z-10 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent";

  return (
    <div className="px-4 my-2 w-full">
      {renderTopRow()}
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <>
            <input
              type="text"
              autoComplete="off"
              className={dynamicClassName}
              value={inputValue}
              onChange={(event) => {
                if (!showComboBox) {
                  setShowComboBox(true);
                }
                const { value } = event.target;
                setInputValue(value);
                field.onChange(value);
                if (usernames.includes(value)) {
                  setShowComboBox(false);
                }
              }}
              onFocus={() => setShowComboBox(true)}
            />
            {showComboBox && usernamesToShow.length > 0 ? (
              <div className="relative z-50">
                <div className="absolute p-1 top-0 left-0 right-0 bg-violet-100">
                  {usernamesToShow.map((item, index) => (
                    <div
                      key={index}
                      className="p-2 m-1 bg-white rounded-md  font-semibold cursor-pointer"
                      onClick={() => {
                        setInputValue(item);
                        setShowComboBox(false);
                        field.onChange(item);
                      }}
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ) : null}
          </>
        )}
      />
    </div>
  );
};

export default UsernamesComboBox;
