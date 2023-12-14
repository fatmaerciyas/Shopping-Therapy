import { NavLink, useParams } from "react-router-dom";
import Spinner from "../../layout/Spinner";
import { baseUrl } from "../../api/url.contants";
import axios from "axios";
import { useEffect, useState } from "react";
import { Product } from "../../models/Product";

export default function OrderDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState<Product>([]);
  const [loading, setLoading] = useState<boolean>(false);
  //const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    axios
      .get<Product>(`${baseUrl}Product?id=${id}`)
      .then((response) => setProduct(response.data));
    setLoading(true);
    console.log(product?.productId);
  }, [id, product]);

  if (!loading) return <Spinner />;

  return (
    <>
      <div className="min-h-100vh flex grow bg-slate-50 dark:bg-navy-900">
        <section className="relative ml-24 md:py-8 bg-slate-50 py-16">
          <div className="container">
            <div className="grid md:grid-cols-12 grid-cols-1 gap-[30px] items-center">
              <div className="lg:col-span-5 md:col-span-6">
                <div className="tiny-single-item">
                  <div className="tiny-slide">
                    <img
                      src={product.image}
                      className="rounded-md shadow dark:shadow-gray-800"
                      alt=""
                    />
                  </div>

                  <div className="tiny-slide">
                    <img
                      src="assets/images/shop/single/single-3.jpg"
                      className="rounded-md shadow dark:shadow-gray-800"
                      alt=""
                    />
                  </div>

                  <div className="tiny-slide">
                    <img
                      src="assets/images/shop/single/single-4.jpg"
                      className="rounded-md shadow dark:shadow-gray-800"
                      alt=""
                    />
                  </div>

                  <div className="tiny-slide">
                    <img
                      src="assets/images/shop/single/single-5.jpg"
                      className="rounded-md shadow dark:shadow-gray-800"
                      alt=""
                    />
                  </div>

                  <div className="tiny-slide">
                    <img
                      src="assets/images/shop/single/single-6.jpg"
                      className="rounded-md shadow dark:shadow-gray-800"
                      alt=""
                    />
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7 md:col-span-6">
                <div className="lg:ms-6">
                  <h5 className="text-2xl font-semibold  text-indigo-500">
                    {product.name}
                  </h5>
                  <div className="mt-2">
                    <span className="text-slate-600 font-semibold me-1">
                      ${product.price}{" "}
                      <del className="text-red-600">
                        $ ${product.price + 12}{" "}
                      </del>
                    </span>

                    <ul className="list-none inline-block text-orange-400">
                      <li className="inline">
                        <i className="mdi mdi-star text-lg"></i>
                      </li>
                      <li className="inline">
                        <i className="mdi mdi-star text-lg"></i>
                      </li>
                      <li className="inline">
                        <i className="mdi mdi-star text-lg"></i>
                      </li>
                      <li className="inline">
                        <i className="mdi mdi-star text-lg"></i>
                      </li>
                      <li className="inline">
                        <i className="mdi mdi-star text-lg"></i>
                      </li>
                      {/* <li className="inline text-slate-600 font-semibold">
                      4.8 (45)
                    </li> */}
                    </ul>
                  </div>

                  <div className="mt-4">
                    <h5 className="text-lg text-indigo-500 font-semibold">
                      Overview :
                      <span className="text-slate-600 mt-2">
                        {product.name}
                      </span>
                    </h5>
                    <h5 className="text-lg font-semibold  text-indigo-500">
                      Brand:
                      <span className="text-slate-600 mt-2">
                        {product.brand}
                      </span>
                    </h5>
                    <p className=" text-slate-600 mt-4">
                      {product.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-12 grid-cols-1 mt-10 gap-[30px]">
            <div className="lg:col-span-3 md:col-span-5">
              <p
                role="presentation"
                className="flex-column p-6 bg-white dark:bg-slate-900 shadow dark:shadow-gray-800 rounded-md"
              >
                <button
                  className="px-4 py-2 text-start text-slate-700 font-semibold  rounded-md w-full hover:text-indigo-600 duration-500"
                  id="description-tab"
                  data-tabs-target="#description"
                  type="button"
                  role="tab"
                  aria-controls="description"
                  aria-selected="true"
                >
                  Description
                </button>
              </p>
            </div>

            <div className="lg:col-span-9 md:col-span-7">
              <div
                id="myTabContent"
                className="p-6 bg-white dark:bg-slate-900 shadow dark:shadow-gray-800 rounded-md"
              >
                <div
                  className=""
                  id="description"
                  role="tabpanel"
                  aria-labelledby="profile-tab"
                >
                  <p className="text-slate-600">{product.description}</p>
                </div>

                <div
                  className="hidden"
                  id="addinfo"
                  role="tabpanel"
                  aria-labelledby="addinfo-tab"
                ></div>

                <div
                  className="hidden"
                  id="review"
                  role="tabpanel"
                  aria-labelledby="review-tab"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <img
                          src="assets/images/client/01.jpg"
                          className="h-11 w-11 rounded-full shadow"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="p-4 bg-gray-50 dark:bg-slate-800 rounded-md shadow dark:shadow-gray-800 mt-6">
                      <ul className="list-none inline-block text-orange-400">
                        <li className="inline">
                          <i className="mdi mdi-star text-lg"></i>
                        </li>
                        <li className="inline">
                          <i className="mdi mdi-star text-lg"></i>
                        </li>
                        <li className="inline">
                          <i className="mdi mdi-star text-lg"></i>
                        </li>
                        <li className="inline">
                          <i className="mdi mdi-star text-lg"></i>
                        </li>
                        <li className="inline">
                          <i className="mdi mdi-star text-lg"></i>
                        </li>
                        <li className="inline text-slate-600 font-semibold">
                          5.0
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
