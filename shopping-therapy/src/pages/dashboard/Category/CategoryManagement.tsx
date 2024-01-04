import axios from "axios";
import { useEffect, useState } from "react";
import { Category } from "../../../models/Category";
import { baseUrl } from "../../../api/url.contants";
import Spinner from "../../../layout/Spinner";
import { NavLink, useNavigate } from "react-router-dom";
import { AiOutlineDelete } from "react-icons/ai";
import Button from "../../../layout/dashboard/Button";
import toast from "react-hot-toast";

export default function CategoryManagement() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [category, setCategory] = useState<Category[]>([]);
  const navigate = useNavigate();
  useEffect(() => {
    async function fetchdata() {
      const response = await axios.get<Category[]>(baseUrl + "Category");
      setCategory(response.data);

      setIsLoaded(true);
    }
    fetchdata();
  }, [category]);

  const handleDelete = (categoryId: number) => {
    try {
      axios.post(
        `https://localhost:7049/api/Category/deleteItem?id=${categoryId}`
      );
      console.log(category);
      toast.success("Deleted category");

      setIsLoaded(true);
    } catch (error) {
      setIsLoaded(true);
      const err = error as { data: string; status: number };
      const { status } = err;
      if (status === 401) {
        toast.error("Somethings went wrong");
      } else {
        toast.error("An Error occurred. Please contact admins");
      }
    }
  };

  if (!isLoaded) return <Spinner />;
  return (
    <>
      <div
        id="root"
        className="min-h-100vh flex grow bg-slate-50 dark:bg-navy-900"
      >
        <main className="main-content mail-app w-full px-[var(--margin-x)] pb-6">
          <div className="flex justify-between">
            <p className="ml-0 text-2xl text-indigo-500 mb-8">
              Category Management
            </p>
            <Button
              label="New Category"
              onClick={() => navigate(`/dashboard/add-category`)}
              type="button"
              variant="success"
            />
          </div>
          <div className="mb-12 flex cursor-pointer flex-row border-b border-zinc-400 p-2.5 font-semibold text-slate-700 hover:bg-slate-100 dark:border-navy-500 dark:text-navy-100 dark:hover:bg-navy-600 sm:flex-row sm:items-left">
            <div className="flex items-left justify-between">
              <div className="flex space-x-2 sm:w-36">
                <div className="flex items-left  space-x-2">
                  <div className="avatar h-6 w-6 pl-12 font-bold text-black">
                    Name
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-1 ml-40 items-left font-bold text-black ">
              Image
            </div>
            <div className="shrink-0 px-1  ml-26 mr-44 font-bold text-black ">
              Description
            </div>

            <div className="hidden px-2 font-bold text-black  ml-40 sm:flex">
              Update
            </div>
            <div className="hidden px-2 font-bold text-black  mx-12 sm:flex">
              Delete
            </div>
          </div>
          <div className="card ml-0">
            {category.map((item) => (
              <div
                key={item.categoryId}
                className="flex cursor-pointer flex-row border-b p-2.5 font-semibold text-slate-700 hover:bg-slate-100 dark:border-navy-500 dark:text-navy-100 dark:hover:bg-navy-600 sm:flex-row sm:items-left"
              >
                <div className="flex items-left justify-between">
                  <div className="flex  space-x-2 sm:w-56">
                    <div className="flex items-left  space-x-2">
                      <div className="avatar h-6 w-6 pl-12 text-indigo-700">
                        {item.name}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-left ">
                    <img
                      className="rounded-full mx-20 w-16 "
                      src={item.image}
                      alt="avatar"
                    />
                  </div>
                  <div className=" w-36  text-md ml-36 ">
                    {item.description}
                  </div>
                </div>

                <div className="item-right ml-[260px]">
                  <button className="mr-6 btn space-x-2 bg-info/10 text-indigo-500  hover:bg-info/20 focus:bg-info/20 active:bg-info/25">
                    <NavLink
                      to={`/dashboard/update-category/${item?.categoryId}`}
                    >
                      <span>Update</span>
                    </NavLink>
                  </button>
                  <button
                    onClick={() => handleDelete(item.categoryId)}
                    className="btn space-x-2 bg-error/10 text-error  hover:bg-error/20 focus:bg-error/20 active:bg-error/25"
                  >
                    <AiOutlineDelete />
                    <span> Delete </span>{" "}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </>
  );
}
