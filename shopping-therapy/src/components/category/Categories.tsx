import { useEffect, useState } from "react";
import { Category } from "../../models/Category";
import { baseUrl } from "../../api/url.contants";
import axios from "axios";

export default function Categories() {
  const [categories, setCategories] = useState<Category[]>([]);

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    async function fetchdata() {
      const response = await axios.get<Category[]>(baseUrl + "Category");
      setCategories(response.data);
      setIsLoaded(true);
      console.log(response.data);
    }
    fetchdata();
  }, [categories]);

  return (
    <>
      <div className="shadow dark:shadow-gray-800 p-6 rounded-md bg-white dark:bg-slate-900 sticky top-20">
        <form>
          <div className="grid grid-cols-1 gap-3">
            <div>
              <label className="hidden font-semibold"></label>
              <div className="relative">
                <i
                  data-feather="search"
                  className="w-4 h-4 absolute top-3 start-3"
                ></i>

                <input
                  name="search"
                  id="searchname"
                  type="text"
                  className="form-input w-full py-2 px-3 h-10 ps-9 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0"
                  placeholder="Search"
                />
              </div>
            </div>

            <div>
              <>
                <label className="font-semibold">Categories</label>

                {!isLoaded ? (
                  <p>Loading...</p>
                ) : (
                  categories.map((category) => {
                    return (
                      <>
                        <div className="block mt-2">
                          <div>
                            <label className="inline-flex items-center">
                              <input
                                type="radio"
                                className="form-radio border-gray-200 dark:border-gray-800 text-indigo-600 focus:border-indigo-300 focus:ring focus:ring-offset-0 focus:ring-indigo-200 focus:ring-opacity-50 me-2"
                                name="radio-colors"
                                value="1"
                                checked
                              />
                              <span className="text-slate-400">
                                {category.name}
                              </span>
                            </label>
                          </div>
                        </div>
                      </>
                      //   <CategoryItem
                      //   category={category}
                      //   key={category.categoryId}
                      ///>
                    );
                  })
                )}
              </>
            </div>

            <div className="mt-2">
              <input
                type="submit"
                className="py-2 px-5 inline-block tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md w-full"
                value="Apply Filter"
              />
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
