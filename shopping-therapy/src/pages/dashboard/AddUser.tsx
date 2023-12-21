import { useEffect, useState } from "react";
// import { IAuthUser } from "../../models/Auth";
// import axios from "axios";
// import { baseUrl } from "../../api/url.contants";
import Spinner from "../../layout/Spinner";
import { IRegisterDto } from "../../models/Auth";
import axios from "axios";
import toast from "react-hot-toast";

import * as Yup from "yup";

export default function AddUser() {
  const [user, setUser] = useState<IRegisterDto>();
  //   const { register } = useAuth();

  const [loading, setLoading] = useState<boolean>(false);
  const [imageURL, setImageURL] = useState("");

  //   const { handleSubmit } = useForm<IRegisterDto>({
  //     resolver: yupResolver(registerSchema),
  //     defaultValues: {
  //       firstName: "",
  //       lastName: "",
  //       userName: "",
  //       email: "",
  //       password: "",
  //       address: "",
  //       image: "",
  //     },
  //   });

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const imageURL = URL.createObjectURL(e.target.files[0]);
      setImageURL(imageURL);
      setUser({
        ...user,
        image: imageURL,
      } as IRegisterDto);
    } else {
      setUser({
        ...user,
        [e.target.name]: e.target.value,
      } as IRegisterDto);
    }
  };

  const handleSaveBtnClick = (e) => {
    e.preventDefault();

    if (user?.userName === "" || user?.email === "" || user?.image === "") {
      alert("Please Enter All Values");
      return;
    }

    console.log(user);

    try {
      axios.post("https://localhost:7049/api/Auth/register", user);
      console.log(user);
      toast.success("Added new user");
      //   await register(
      //     data.firstName,
      //     data.lastName,
      //     data.userName,
      //     data.email,
      //     data.password,
      //     data.address
      //   );
      setLoading(true);
    } catch (error) {
      setLoading(true);
      const err = error as { data: string; status: number };
      const { status } = err;
      if (status === 401) {
        toast.error("Somethings went wrong");
      } else {
        toast.error("An Error occurred. Please contact admins");
      }
    }
  };

  //   if (!loading) return <Spinner />;

  return (
    <div
      id="root"
      className="min-h-100vh flex grow  bg-slate-50 dark:bg-navy-900"
    >
      <form className="w-full mx-56">
        <div className="space-y-12">
          <div className=" pb-12">
            <p className="ml-0 mt-12 text-2xl text-indigo-500 mb-8">Add User</p>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label
                  htmlFor="first-name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Username
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="userName"
                    value={user?.userName}
                    onChange={changeHandler}
                    className="block px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="last-name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Email
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="email"
                    value={user?.email}
                    onChange={changeHandler}
                    className="block px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label
                  htmlFor="first-name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  First Name
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="firstName"
                    value={user?.firstName}
                    onChange={changeHandler}
                    className="block px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="last-name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Last Name
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="lastName"
                    value={user?.lastName}
                    onChange={changeHandler}
                    className="block px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  Address
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="address"
                    value={user?.address}
                    onChange={changeHandler}
                    className="block px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="password"
                    value={user?.password}
                    onChange={changeHandler}
                    className="block px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-3 h-36">
                <label
                  htmlFor="last-name"
                  className="block text-md font-medium leading-6 text-gray-900"
                >
                  Image
                </label>
                <div className="mt-2 w-48 h-56">
                  <input
                    type="file"
                    className="mb-4"
                    onChange={changeHandler}
                  />
                  <img src={imageURL} alt="uploaded" />
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6 flex items-center justify-end gap-x-6">
            <button
              type="submit"
              onClick={(e) => handleSaveBtnClick(e)}
              className="rounded-md mb-24 px-8 bg-indigo-600  py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
