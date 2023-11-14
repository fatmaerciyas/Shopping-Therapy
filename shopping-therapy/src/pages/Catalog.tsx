import { useEffect, useState } from "react";
import { Product } from "../models/Product";
import { Category } from "../models/Category";
import axios from "axios";
import { baseUrl } from "../api/url.contants";
import Categories from "../components/category/Categories";
import ProductListing from "../components/product/ProductListing";

export default function Catalog() {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);

  const [isLoaded, setIsLoaded] = useState(false);
  const [sort, setSort] = useState("");

  useEffect(() => {
    async function fetchdata() {
      try {
        const responseProduct = await axios.get<Product[]>(baseUrl + "Product");
        setProducts(responseProduct.data);

        setIsLoaded(true);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    }
    fetchdata();
  }, []);

  useEffect(() => {
    async function fetchdata() {
      const response = await axios.get<Category[]>(baseUrl + "Category");
      setCategories(response.data);
      setIsLoaded(true);
    }
    fetchdata();
  }, [categories]);

  return (
    <>
      <section className="relative table w-full py-20 lg:py-24 bg-gray-50 dark:bg-slate-800">
        <div className="container relative">
          <div className="grid grid-cols-1 mt-14">
            <h3 className="text-3xl leading-normal font-semibold">Shop Grid</h3>
          </div>

          <div className="relative mt-3">
            <ul className="tracking-[0.5px] mb-0 inline-block">
              <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out hover:text-indigo-600">
                <a href="index-shop.html">Techwind</a>
              </li>
              <li className="inline-block text-base text-slate-950 dark:text-white mx-0.5 ltr:rotate-0 rtl:rotate-180">
                <i className="uil uil-angle-right-b"></i>
              </li>
              <li
                className="inline-block uppercase text-[13px] font-bold text-indigo-600"
                aria-current="page"
              >
                Product Grid Two
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="relative md:py-24 py-16">
        <div className="container">
          <div className="grid md:grid-cols-12 grid-cols-1 gap-[30px]">
            <div className="lg:col-span-4 md:col-span-6">
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

                    <Categories
                      isLoaded={isLoaded}
                      categories={categories}
                      setProducts={setProducts}
                    />

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
            </div>

            <ProductListing products={products} setSort={setSort} sort={sort} />
          </div>
        </div>

        <div className="container relative md:mt-24 mt-16">
          <div className="grid md:grid-cols-12 grid-cols-1 items-center">
            <div className="lg:col-span-5 md:col-span-6">
              <img
                src="assets/images/illustrator/envelope.svg"
                className="mx-auto d-block"
                alt=""
              />
            </div>

            <div className="lg:col-span-7 md:col-span-6">
              <span className="bg-indigo-600/5 text-indigo-600 text-xs font-bold px-2.5 py-0.5 rounded h-5">
                Mobile Apps
              </span>
              <h4 className="md:text-3xl text-2xl lg:leading-normal leading-normal font-medium my-4">
                Available for your <br /> Smartphones
              </h4>
              <p className="text-slate-400 max-w-xl mb-0">
                Search all the open positions on the web. Get your own
                personalized salary estimate. Read reviews on over 30000+
                companies worldwide.
              </p>
              <div className="my-5">
                <a href="#">
                  <img
                    src="assets/images/app/app.png"
                    className="m-1 inline-block"
                    alt=""
                  />
                </a>

                <a href="#">
                  <img
                    src="assets/images/app/playstore.png"
                    className="m-1 inline-block"
                    alt=""
                  />
                </a>
              </div>

              <div className="inline-block">
                <div className="pt-4 flex items-center border-t border-gray-100 dark:border-gray-700">
                  <i
                    data-feather="smartphone"
                    className="me-2 text-indigo-600 h-10 w-10"
                  ></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
