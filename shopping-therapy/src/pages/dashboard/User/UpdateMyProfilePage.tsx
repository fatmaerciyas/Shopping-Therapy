import { useParams } from "react-router-dom";
import { IAuthUser } from "../../../models/Auth";
import { useEffect, useState } from "react";
import axios from "axios";
import { baseUrl } from "../../../api/url.contants";
import Spinner from "../../../layout/Spinner";
import toast from "react-hot-toast";

export default function UpdateMyProfilePage() {
  const { id } = useParams();

  const [user, setUser] = useState<IAuthUser>();

  const [loading, setLoading] = useState<boolean>(false);
  const [imageURL, setImageURL] = useState("");

  useEffect(() => {
    axios
      .get<IAuthUser>(`${baseUrl}Auth/getByUserId/${id}`)
      .then((response) => {
        setUser(response.data);
        if (response.data.image) {
          setImageURL(response.data.image);
        }
      })
      .catch((error) => console.log(error));
    setLoading(true);
  }, [id]);

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const imageURL = URL.createObjectURL(e.target.files[0]);
      setImageURL(imageURL);
      setUser({
        ...user,
        image: imageURL,
      } as IAuthUser);
    } else {
      setUser({
        ...user,
        [e.target.name]: e.target.value,
      } as IAuthUser);
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
      axios.post("https://localhost:7049/api/Auth/update-user", user);
      toast.success("User updated");
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

  if (!loading) return <Spinner />;

  return (
    <div
      id="root"
      className="min-h-100vh flex grow  bg-slate-50 dark:bg-navy-900"
    >
      <form className="w-full mx-56">
        <div className="space-y-12">
          <div className=" pb-12">
            <p className="ml-0 text-2xl text-indigo-500 mb-8">Update Profile</p>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              {/* <div className="sm:col-span-3">
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
              </div> */}

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
                <label
                  htmlFor="last-name"
                  className="block text-md font-medium leading-6 text-gray-900"
                >
                  Image
                </label>
                <div className="mt-2 w-48 h-36">
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
              className="rounded-md px-8 bg-indigo-600  py-2 text-md font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
