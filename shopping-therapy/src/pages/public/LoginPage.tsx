import { useForm } from "react-hook-form";
import InputField from "../../layout/InputField";
import Button from "../../layout/dashboard/Button";
import { PATH_PUBLIC } from "../../router/Routes";
import useAuth from "../../hooks/useAuth.hook";
import { toast } from "react-hot-toast";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { ILoginDto } from "../../models/Auth";

const LoginPage = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const loginSchema = Yup.object().shape({
    userName: Yup.string().required("User Name is required"),
    password: Yup.string()
      .required("Password is required")
      .min(8, "Password must be at least 8 character"),
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ILoginDto>({
    resolver: yupResolver(loginSchema),
    defaultValues: {
      userName: "",
      password: "",
    },
  });

  const onSubmitLoginForm = async (data: ILoginDto) => {
    try {
      setLoading(true);
      await login(data.userName, data.password);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      const err = error as { data: string; status: number };
      const { status } = err;
      if (status === 401) {
        toast.error("Invalid Username or Password");
      } else {
        toast.error("An Error occurred. Please contact admins");
      }
    }
  };

  return (
    <div className="pageTemplate1 flex flex-row  bg-[#f0ecf7] gap-4  py-24 ">
      {/* <div>Left</div> */}

      {/* <div className="absolute -top-40 -left-40 w-48 h-48 bg-gradient-to-br from-[#ef32d9]  to-[#89fffd] rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -right-40 w-32 h-32 bg-gradient-to-br from-[#cc2b5e] to-[#753a88] rounded-full blur-3xl"></div> */}
      {/* <div>Right</div> */}
      <form
        onSubmit={handleSubmit(onSubmitLoginForm)}
        className="rounded-md flex-1 py-16 flex flex-col w-1/3 justify-center items-center  rounded-r-2xl"
      >
        <h1 className="text-4xl font-bold mb-2 text-[#754eb4]">Login</h1>
        <div className="card mt-5 w-1/4 rounded-lg p-5 lg:p-7">
          <label className="relative mt-4 flex">
            <InputField
              control={control}
              placeholder="User Name"
              inputName="userName"
              error={errors.userName?.message}
            />
          </label>

          <label className="relative mt-4 flex">
            <InputField
              control={control}
              placeholder="Password"
              inputName="password"
              inputType="password"
              error={errors.password?.message}
            />
          </label>

          <div className="flex justify-center items-center gap-4 mt-6">
            <Button
              variant="secondary"
              type="button"
              label="Reset"
              onClick={() => reset()}
            />
            <Button
              variant="primary"
              type="submit"
              label="Login"
              onClick={() => {}}
              loading={loading}
            />
          </div>

          <div className="px-4 mt-6 mb-6  items-center text-center flex-col flex gap-2">
            <h1 className="mb-4">Don't you have an account?</h1>
            <Button
              variant="primary"
              type="submit"
              label="Register"
              onClick={() => {
                navigate(PATH_PUBLIC.register);
              }}
              loading={loading}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
