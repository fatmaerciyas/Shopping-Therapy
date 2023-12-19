import { useParams } from "react-router-dom";
import { IAuthUser } from "../../models/Auth";
import { useEffect, useState } from "react";
import axios from "axios";
import { baseUrl } from "../../api/url.contants";
import Spinner from "../../layout/Spinner";

export default function UpdateMyProfilePage() {
  const { userName } = useParams();

  const [user, setUser] = useState<IAuthUser>();

  const [loading, setLoading] = useState<boolean>(false);
  const [imageURL, setImageURL] = useState("");

  useEffect(() => {
    axios
      .get<IAuthUser>(`${baseUrl}Auth/users/${userName}`)
      .then((response) => setUser(response.data))
      .catch((error) => console.log(error));

    setLoading(true);
  }, [userName]);

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    } as IAuthUser);
    if (e.target.files && e.target.files[0]) {
      setImageURL(URL.createObjectURL(e.target.files[0]));
      if (user) {
        user.image = imageURL;
      }
    }
  };

  const handleSaveBtnClick = (e) => {
    e.preventDefault();

    if (user?.userName === "" || user?.email === "" || user?.image === "") {
      alert("Please Enter All Values");
      return;
    }

    if (user) {
      user.image = imageURL;
    }

    // const data: Partial<IAuthUser> = {
    //   id: user?.id,
    //   userName: user?.userName,
    //   firstName: user?.firstName,
    //   lastName: user?.lastName,
    //   email: user?.email,
    //   createdAt: user?.createdAt,
    //   roles: user?.roles,
    //   image: imageURL,
    // };

    console.log(user);

    axios
      .post("https://localhost:7049/api/Auth/update-user", user)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  if (!loading) return <Spinner />;

  return (
    <div
      id="root"
      className="min-h-100vh flex grow  bg-slate-50 dark:bg-navy-900"
    >
      <form className="w-full mx-56">
        <div className="space-y-12">
          <div className=" pb-12">
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              Add New Item
            </h2>

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
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="last-name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Image
                </label>
                <div className="mt-2">
                  <input type="file" onChange={changeHandler} />
                  <img src={user?.image} alt="uploaded" />
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6 flex items-center justify-end gap-x-6">
            <button
              type="submit"
              onClick={(e) => handleBackBtnClick(e)}
              className="rounded-md bg-yellow-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-yelow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Back
            </button>
            <button
              type="submit"
              onClick={(e) => handleSaveBtnClick(e)}
              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
