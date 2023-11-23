import { baseUrl } from "../../api/url.contants";
import axios from "axios";
import { Product } from "../../models/Product";
import { Category } from "../../models/Category";

let count = true;

interface CategoriesItems {
  isLoaded: boolean;
  categories: Category[];
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
}

export default function Categories({
  setProducts,
  categories,
  isLoaded,
}: CategoriesItems) {
  function handleGetFiterByCategory(categoryId: string) {
    console.log(`category Id is : ${categoryId}`);

    axios
      .get<Product[]>(baseUrl + `Product?categoryId=${categoryId}`)
      .then((response) => {
        setProducts(response.data);
        console.log(response.data);
      });
  }

  if (count) {
    axios
      .get<Product[]>(baseUrl + `Product?categoryId=${1}`)
      .then((response) => {
        setProducts(response.data);
        console.log(response.data);
      });
    count = false;
  }
  return (
    <>
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
                          onClick={() =>
                            handleGetFiterByCategory(
                              category.categoryId.toString()
                            )
                          }
                          type="radio"
                          className="form-radio border-gray-200 dark:border-gray-800 text-indigo-600 focus:border-indigo-300 focus:ring focus:ring-offset-0 focus:ring-indigo-200 focus:ring-opacity-50 me-2"
                          name="radio-colors"
                          value="1"
                        />
                        <span className="text-slate-400">{category.name}</span>
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
    </>
  );
}
