import { useForm } from "react-hook-form";
import InputField from "../../layout/InputField";
import Button from "../../layout/dashboard/Button";
import { IRegisterDto } from "../../models/Auth";
import useAuth from "../../hooks/useAuth.hook";
import { toast } from "react-hot-toast";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const RegisterPage = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const { register } = useAuth();

  const registerSchema = Yup.object().shape({
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last Name is required"),
    userName: Yup.string().required("User Name is required"),
    email: Yup.string()
      .required("Email is required")
      .email("Input text must be a valid email"),
    password: Yup.string()
      .required("Password is required")
      .min(8, "Password must be at least 8 character"),
    address: Yup.string().required("Address Is required"),
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IRegisterDto>({
    resolver: yupResolver(registerSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      userName: "",
      email: "",
      password: "",
      address: "",
    },
  });

  const onSubmitRegisterForm = async (data: IRegisterDto) => {
    try {
      setLoading(true);
      await register(
        data.firstName,
        data.lastName,
        data.userName,
        data.email,
        data.password,
        data.address
      );
      setLoading(false);
    } catch (error) {
      setLoading(false);
      const err = error as { data: string; status: number };
      const { status, data } = err;
      if (status === 400 || status === 409) {
        toast.error(data);
      } else {
        toast.error("An Error occurred. Please contact admins");
      }
    }
  };

  return (
    <div className="pageTemplate1 flex flex-row  bg-[#f0ecf7] gap-4  py-24">
      {/* <div>Left</div> */}
      <div className="max-sm:hidden ml-20 mt-40 rounded-md flex-1 min-h-[500px] h-3/5 bg-gradient-to-tr from-[#DAC6FB] via-amber-400 to-[#AAC1F6] flex flex-col justify-center items-center rounded-l-2xl">
        <h1 className="text-6xl font-bold text-[#754eb4]">Register</h1>
        <div className="h-3/5 w-3/5 p-6 rounded-2xl flex flex-col gap-8 justify-center items-start  relative">
          <img
            src="../public/assets/images/shop/backgrounds/e-commerce.jpg"
            className="blur-[2px]"
          />
          <div className="absolute -top-40 -left-40 w-48 h-48 bg-gradient-to-br from-[#ef32d9]  to-[#89fffd] rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -right-40 w-32 h-32 bg-gradient-to-br from-[#cc2b5e] to-[#753a88] rounded-full blur-3xl"></div>
        </div>
      </div>
      {/* <div>Right</div> */}
      <form
        onSubmit={handleSubmit(onSubmitRegisterForm)}
        className="  rounded-md flex-1 min-h-[600px] h-4/5 flex flex-col justify-center items-center  rounded-r-2xl"
      >
        <h1 className="text-4xl font-bold mb-2 hover:bg-violet-500 text-[#754eb4]">
          Register
        </h1>
        <div className="card mt-5 w-3/4 rounded-lg p-5 lg:p-7">
          <label className="relative flex">
            <InputField
              control={control}
              placeholder="First Name"
              inputName="firstName"
              error={errors.firstName?.message}
            />
          </label>
          <label className="relative mt-4 flex">
            <InputField
              control={control}
              placeholder="Last Name"
              inputName="lastName"
              error={errors.firstName?.message}
            />
          </label>
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
              placeholder="Email"
              inputName="email"
              error={errors.email?.message}
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
          <label className="relative mt-4 flex">
            <InputField
              control={control}
              placeholder="Address"
              inputName="address"
              error={errors.address?.message}
            />
          </label>

          <Button
            variant="primary"
            type="submit"
            label="Register"
            onClick={() => {}}
            loading={loading}
          />
          <div className="mt-4 text-center text-xs+">
            <p className="line-clamp-1">
              <span>Already have an account? </span>
              <NavLink
                to="/login"
                className="text-primary transition-colors hover:text-primary-focus dark:text-accent-light dark:hover:text-accent"
              >
                Sign In
              </NavLink>
            </p>
          </div>
          <div className="my-7 flex items-center space-x-3">
            <div className="h-px flex-1 bg-slate-200 dark:bg-navy-500"></div>
            <p className="text-tiny+ uppercase">or sign up with email</p>
            <div className="h-px flex-1 bg-slate-200 dark:bg-navy-500"></div>
          </div>

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
              label="Register"
              onClick={() => {}}
              loading={loading}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default RegisterPage;
