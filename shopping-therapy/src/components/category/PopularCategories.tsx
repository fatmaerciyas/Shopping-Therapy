import { useEffect, useState } from "react";
import { Category } from "../../models/Category";
import axios from "axios";
import { baseUrl } from "../../api/url.contants";
import Spinner from "../../layout/Spinner";
import { useNavigate } from "react-router-dom";

export default function PopularCategories() {
  const [categories, setCategories] = useState<Category[]>([]);

  const [isLoaded, setIsLoaded] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    async function fetchdata() {
      const response = await axios.get<Category[]>(baseUrl + "Category");
      setCategories(response.data);
      setIsLoaded(true);
    }
    fetchdata();
  }, [categories]);

  if (!isLoaded) return <Spinner />;

  return (
    <>
      <div className="grid lg:grid-cols-6 md:grid-cols-3 grid-cols-2 mt-8 gap-[30px]">
        {categories.map((category) => (
          <div className="group relative overflow-hidden hover:shadow-lg hover:dark:shadow-gray-800 rounded-md duration-500 p-6 text-center">
            <img
              onClick={() => navigate("/catalog")}
              src={category.image}
              className="rounded-full shadow-md dark:shadow-gray-800 h-20 w-20 block mx-auto mb-2"
            />

            <a className="font-semibold hover:text-indigo-600 text-lg">
              {category.name}
            </a>
          </div>
        ))}
      </div>
    </>
  );
}
