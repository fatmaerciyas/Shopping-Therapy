import { NavLink, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Product } from "../../models/Product";
import { baseUrl } from "../../api/url.contants";

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState<Product>({});

  useEffect(() => {
    axios
      .get<Product>(`${baseUrl}Product?id=${id}`)
      .then((response) => setProduct(response.data));
  }, [id, product]);

  // function handleAddItem(productId: number) {
  //   setLoading(true);
  //   agent.Cart.addItem(productId)
  //     .then((cart) => dispatch(setCart(cart)))
  //     .catch((error) => console.log(error))
  //     .finally(() => setLoading(false));
  //   console.log(item);
  // }

  // function handleRemoveItem(productId: number, quantity = 1) {
  //   setLoading(true);
  //   agent.Cart.removeItem(productId, quantity)
  //     .then(() => dispatch(removeCartItemAsync({ productId, quantity })))
  //     .catch((error) => console.log(error))
  //     .finally(() => setLoading(false));
  // }

  return (
    <>
      <section className="relative table w-full py-20 lg:py-24 bg-gray-50 dark:bg-slate-800">
        <div className="container relative">
          <div className="grid grid-cols-1 mt-14">
            <h3 className="text-3xl leading-normal font-semibold">
              Product / Item Detail
            </h3>
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
                Item Detail
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="relative md:py-24 py-16">
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
                <h5 className="text-2xl font-semibold">{product.name}</h5>
                <div className="mt-2">
                  <span className="text-slate-400 font-semibold me-1">
                    ${product.price}{" "}
                    <del className="text-red-600">$ ${product.price + 12} </del>
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
                    <li className="inline text-slate-400 font-semibold">
                      4.8 (45)
                    </li>
                  </ul>
                </div>

                <div className="mt-4">
                  <h5 className="text-lg font-semibold">Overview :</h5>
                  <p className="text-slate-400 mt-2">{product.description}</p>

                  <ul className="list-none text-slate-400 mt-4">
                    <li className="mb-1 flex">
                      <i className="uil uil-check-circle text-indigo-600 text-xl me-2"></i>{" "}
                      Digital Marketing Solutions for Tomorrow
                    </li>
                    <li className="mb-1 flex">
                      <i className="uil uil-check-circle text-indigo-600 text-xl me-2"></i>{" "}
                      Our Talented & Experienced Marketing Agency
                    </li>
                    <li className="mb-1 flex">
                      <i className="uil uil-check-circle text-indigo-600 text-xl me-2"></i>{" "}
                      Create your own skin to match your brand
                    </li>
                  </ul>
                </div>

                <div className="grid lg:grid-cols-2 grid-cols-1 gap-[30px] mt-4">
                  <div className="flex items-center">
                    <h5 className="text-lg font-semibold me-2">Size:</h5>
                    <div className="">
                      <a
                        href="#"
                        className="h-9 w-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-md bg-indigo-600/5 hover:bg-indigo-600 border-indigo-600/10 hover:border-indigo-600 text-indigo-600 hover:text-white"
                      >
                        S
                      </a>
                      <a
                        href="#"
                        className="h-9 w-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-md bg-indigo-600/5 hover:bg-indigo-600 border-indigo-600/10 hover:border-indigo-600 text-indigo-600 hover:text-white"
                      >
                        M
                      </a>
                      <a
                        href="#"
                        className="h-9 w-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-md bg-indigo-600/5 hover:bg-indigo-600 border-indigo-600/10 hover:border-indigo-600 text-indigo-600 hover:text-white"
                      >
                        L
                      </a>
                      <a
                        href="#"
                        className="h-9 w-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-md bg-indigo-600/5 hover:bg-indigo-600 border-indigo-600/10 hover:border-indigo-600 text-indigo-600 hover:text-white"
                      >
                        XL
                      </a>
                    </div>
                  </div>

                  <div className="justify-between">
                    <button
                      //onClick={() => handleRemoveItem(pro.productId)}
                      className="h-9 w-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-md bg-indigo-600/5 hover:bg-indigo-600 border border-indigo-600/10 hover:border-indigo-600 text-indigo-600 hover:text-white minus"
                    >
                      -
                    </button>
                    <span className="h-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-md bg-indigo-600/5 hover:bg-indigo-600 border border-indigo-600/10 hover:border-indigo-600 text-indigo-600 hover:text-white pointer-events-none w-16 ps-4 quantity">
                      1
                    </span>
                    <button
                      //onClick={() => handleAddItem(item.productId)} //() => setQuantity((a) => a + 1)
                      className="h-9 w-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-md bg-indigo-600/5 hover:bg-indigo-600 border border-indigo-600/10 hover:border-indigo-600 text-indigo-600 hover:text-white plus"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="mt-4">
                  <a
                    href="#"
                    className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md me-2 mt-2"
                  >
                    Buy Now
                  </a>

                  <a
                    href="#"
                    className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center rounded-md bg-indigo-600/5 hover:bg-indigo-600 border-indigo-600/10 hover:border-indigo-600 text-indigo-600 hover:text-white mt-2"
                  >
                    Add to Cart
                  </a>
                  {/* {item ? (
                    <a
                      href="#"
                      className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md me-2 mt-2"
                    >
                      Buy Now
                    </a>
                  ) : (
                    <a
                      href="#"
                      className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center rounded-md bg-indigo-600/5 hover:bg-indigo-600 border-indigo-600/10 hover:border-indigo-600 text-indigo-600 hover:text-white mt-2"
                    >
                      Add to Cart
                    </a>
                  )} */}
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-12 grid-cols-1 mt-10 gap-[30px]">
            <div className="lg:col-span-3 md:col-span-5">
              <div className="sticky top-20">
                <ul
                  className="flex-column p-6 bg-white dark:bg-slate-900 shadow dark:shadow-gray-800 rounded-md"
                  id="myTab"
                  data-tabs-toggle="#myTabContent"
                  role="tablist"
                >
                  <li role="presentation">
                    <button
                      className="px-4 py-2 text-start text-base font-semibold rounded-md w-full hover:text-indigo-600 duration-500"
                      id="description-tab"
                      data-tabs-target="#description"
                      type="button"
                      role="tab"
                      aria-controls="description"
                      aria-selected="true"
                    >
                      Description
                    </button>
                  </li>
                  <li role="presentation">
                    <button
                      className="px-4 py-2 text-start text-base font-semibold rounded-md w-full mt-3 duration-500"
                      id="addinfo-tab"
                      data-tabs-target="#addinfo"
                      type="button"
                      role="tab"
                      aria-controls="addinfo"
                      aria-selected="false"
                    >
                      Additional Information
                    </button>
                  </li>
                  <li role="presentation">
                    <button
                      className="px-4 py-2 text-start text-base font-semibold rounded-md w-full mt-3 duration-500"
                      id="review-tab"
                      data-tabs-target="#review"
                      type="button"
                      role="tab"
                      aria-controls="review"
                      aria-selected="false"
                    >
                      Review
                    </button>
                  </li>
                </ul>
              </div>
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
                  <p className="text-slate-400">
                    Due to its widespread use as filler text for layouts,
                    non-readability is of great importance: human perception is
                    tuned to recognize certain patterns and repetitions in
                    texts. If the distribution of letters and 'words' is random,
                    the reader will not be distracted from making a neutral
                    judgement on the visual impact and readability of the
                    typefaces (typography), or the distribution of text on the
                    page (layout or type area). For this reason, dummy text
                    usually consists of a more or less random series of words or
                    syllables.
                  </p>
                </div>

                <div
                  className="hidden"
                  id="addinfo"
                  role="tabpanel"
                  aria-labelledby="addinfo-tab"
                >
                  <table className="w-full text-start">
                    <tbody>
                      <tr className="bg-white dark:bg-slate-900 border-b border-gray-100 dark:border-gray-700">
                        <td className="font-semibold py-4">Color</td>
                        <td className="text-slate-400 py-4">
                          Red, White, Black, Orange
                        </td>
                      </tr>

                      <tr className="bg-white dark:bg-slate-900 border-b border-gray-100 dark:border-gray-700">
                        <td className="font-semibold py-4">Material</td>
                        <td className="text-slate-400 py-4">Cotton</td>
                      </tr>

                      <tr className="bg-white dark:bg-slate-900 border-b border-gray-100 dark:border-gray-700">
                        <td className="font-semibold py-4">Size</td>
                        <td className="text-slate-400 py-4">
                          S, M, L, XL, XXL
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

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

                        <div className="ms-3 flex-1">
                          <a
                            href="#"
                            className="text-lg font-semibold hover:text-indigo-600 duration-500"
                          >
                            Calvin Carlo
                          </a>
                          <p className="text-sm text-slate-400">
                            6th May 2022 at 01:25 pm
                          </p>
                        </div>
                      </div>

                      <a
                        href="#"
                        className="text-slate-400 hover:text-indigo-600 duration-500 ms-5"
                      >
                        <i className="mdi mdi-reply"></i> Reply
                      </a>
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
                        <li className="inline text-slate-400 font-semibold">
                          5.0
                        </li>
                      </ul>

                      <p className="text-slate-400 italic">
                        " There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour "
                      </p>
                    </div>
                  </div>

                  <div className="mt-8">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <img
                          src="assets/images/client/02.jpg"
                          className="h-11 w-11 rounded-full shadow"
                          alt=""
                        />

                        <div className="ms-3 flex-1">
                          <a
                            href="#"
                            className="text-lg font-semibold hover:text-indigo-600 duration-500"
                          >
                            Calvin Carlo
                          </a>
                          <p className="text-sm text-slate-400">
                            6th May 2022 at 01:25 pm
                          </p>
                        </div>
                      </div>

                      <a
                        href="#"
                        className="text-slate-400 hover:text-indigo-600 duration-500 ms-5"
                      >
                        <i className="mdi mdi-reply"></i> Reply
                      </a>
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
                        <li className="inline text-slate-400 font-semibold">
                          5.0
                        </li>
                      </ul>

                      <p className="text-slate-400 italic">
                        " There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour "
                      </p>
                    </div>
                  </div>

                  <div className="mt-8">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <img
                          src="assets/images/client/03.jpg"
                          className="h-11 w-11 rounded-full shadow"
                          alt=""
                        />

                        <div className="ms-3 flex-1">
                          <a
                            href="#"
                            className="text-lg font-semibold hover:text-indigo-600 duration-500"
                          >
                            Calvin Carlo
                          </a>
                          <p className="text-sm text-slate-400">
                            6th May 2022 at 01:25 pm
                          </p>
                        </div>
                      </div>

                      <a
                        href="#"
                        className="text-slate-400 hover:text-indigo-600 duration-500 ms-5"
                      >
                        <i className="mdi mdi-reply"></i> Reply
                      </a>
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
                        <li className="inline text-slate-400 font-semibold">
                          5.0
                        </li>
                      </ul>

                      <p className="text-slate-400 italic">
                        " There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour "
                      </p>
                    </div>
                  </div>

                  <div className="mt-8">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <img
                          src="assets/images/client/04.jpg"
                          className="h-11 w-11 rounded-full shadow"
                          alt=""
                        />

                        <div className="ms-3 flex-1">
                          <a
                            href="#"
                            className="text-lg font-semibold hover:text-indigo-600 duration-500"
                          >
                            Calvin Carlo
                          </a>
                          <p className="text-sm text-slate-400">
                            6th May 2022 at 01:25 pm
                          </p>
                        </div>
                      </div>

                      <a
                        href="#"
                        className="text-slate-400 hover:text-indigo-600 duration-500 ms-5"
                      >
                        <i className="mdi mdi-reply"></i> Reply
                      </a>
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
                        <li className="inline text-slate-400 font-semibold">
                          5.0
                        </li>
                      </ul>

                      <p className="text-slate-400 italic">
                        " There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour "
                      </p>
                    </div>
                  </div>

                  <div className="p-6 rounded-md shadow dark:shadow-gray-800 mt-8">
                    <h5 className="text-lg font-semibold">Leave A Comment:</h5>

                    <form className="mt-8">
                      <div className="grid lg:grid-cols-12 lg:gap-6">
                        <div className="lg:col-span-6 mb-5">
                          <div className="text-start">
                            <label for="name" className="font-semibold">
                              Your Name:
                            </label>
                            <div className="form-icon relative mt-2">
                              <i
                                data-feather="user"
                                className="w-4 h-4 absolute top-3 start-4"
                              ></i>
                              <input
                                name="name"
                                id="name"
                                type="text"
                                className="form-input ps-11 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0"
                                placeholder="Name :"
                              />
                            </div>
                          </div>
                        </div>

                        <div className="lg:col-span-6 mb-5">
                          <div className="text-start">
                            <label for="email" className="font-semibold">
                              Your Email:
                            </label>
                            <div className="form-icon relative mt-2">
                              <i
                                data-feather="mail"
                                className="w-4 h-4 absolute top-3 start-4"
                              ></i>
                              <input
                                name="email"
                                id="email"
                                type="email"
                                className="form-input ps-11 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0"
                                placeholder="Email :"
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-1">
                        <div className="mb-5">
                          <div className="text-start">
                            <label for="comments" className="font-semibold">
                              Your Comment:
                            </label>
                            <div className="form-icon relative mt-2">
                              <i
                                data-feather="message-circle"
                                className="w-4 h-4 absolute top-3 start-4"
                              ></i>
                              <textarea
                                name="comments"
                                id="comments"
                                className="form-input ps-11 w-full py-2 px-3 h-28 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0"
                                placeholder="Message :"
                              ></textarea>
                            </div>
                          </div>
                        </div>
                      </div>
                      <button
                        type="submit"
                        id="submit"
                        name="send"
                        className="py-2 px-5 inline-block tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md w-full"
                      >
                        Send Message
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container relative mt-16">
          <div className="grid grid-cols-1 items-center">
            <h3 className="text-2xl leading-normal font-semibold">
              Recent Products
            </h3>
          </div>

          <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
            <div className="group">
              <div className="relative overflow-hidden shadow dark:shadow-gray-800 group-hover:shadow-lg group-hover:dark:shadow-gray-800 rounded-md duration-500">
                <img src="assets/images/shop/items/s13.jpg" alt="" />

                <div className="absolute -bottom-20 group-hover:bottom-3 start-3 end-3 duration-500">
                  <a
                    href="shop-cart.html"
                    className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-slate-900 border-slate-900 text-white w-full rounded-md"
                  >
                    Add to Cart
                  </a>
                </div>

                <ul className="list-none absolute top-[10px] end-4 opacity-0 group-hover:opacity-100 duration-500">
                  <li>
                    <a
                      href="javascript:void(0)"
                      className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white"
                    >
                      <i className="mdi mdi-heart"></i>
                    </a>
                  </li>
                  <li className="mt-1">
                    <a
                      href="shop-item-detail.html"
                      className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white"
                    >
                      <i className="mdi mdi-eye-outline"></i>
                    </a>
                  </li>
                  <li className="mt-1">
                    <a
                      href="javascript:void(0)"
                      className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white"
                    >
                      <i className="mdi mdi-bookmark-outline"></i>
                    </a>
                  </li>
                </ul>
              </div>

              <div className="mt-4">
                <a
                  href="shop-item-detail.html"
                  className="hover:text-indigo-600 text-lg font-semibold"
                >
                  Wooden Chair
                </a>
                <div className="flex justify-between items-center mt-1">
                  <p className="text-green-600">
                    $16.00 <del className="text-red-600">$21.00</del>
                  </p>
                  <ul className="font-medium text-amber-400 list-none">
                    <li className="inline">
                      <i className="mdi mdi-star"></i>
                    </li>
                    <li className="inline">
                      <i className="mdi mdi-star"></i>
                    </li>
                    <li className="inline">
                      <i className="mdi mdi-star"></i>
                    </li>
                    <li className="inline">
                      <i className="mdi mdi-star"></i>
                    </li>
                    <li className="inline">
                      <i className="mdi mdi-star"></i>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="group">
              <div className="relative overflow-hidden shadow dark:shadow-gray-800 group-hover:shadow-lg group-hover:dark:shadow-gray-800 rounded-md duration-500">
                <img src="assets/images/shop/items/s14.jpg" alt="" />

                <div className="absolute -bottom-20 group-hover:bottom-3 start-3 end-3 duration-500">
                  <a
                    href="shop-cart.html"
                    className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-slate-900 border-slate-900 text-white w-full rounded-md"
                  >
                    Add to Cart
                  </a>
                </div>

                <ul className="list-none absolute top-[10px] end-4 opacity-0 group-hover:opacity-100 duration-500">
                  <li>
                    <a
                      href="javascript:void(0)"
                      className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white"
                    >
                      <i className="mdi mdi-heart"></i>
                    </a>
                  </li>
                  <li className="mt-1">
                    <a
                      href="shop-item-detail.html"
                      className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white"
                    >
                      <i className="mdi mdi-eye-outline"></i>
                    </a>
                  </li>
                  <li className="mt-1">
                    <a
                      href="javascript:void(0)"
                      className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white"
                    >
                      <i className="mdi mdi-bookmark-outline"></i>
                    </a>
                  </li>
                </ul>
              </div>

              <div className="mt-4">
                <a
                  href="shop-item-detail.html"
                  className="hover:text-indigo-600 text-lg font-semibold"
                >
                  Women Block Heels
                </a>
                <div className="flex justify-between items-center mt-1">
                  <p className="text-green-600">
                    $16.00 <del className="text-red-600">$21.00</del>
                  </p>
                  <ul className="font-medium text-amber-400 list-none">
                    <li className="inline">
                      <i className="mdi mdi-star"></i>
                    </li>
                    <li className="inline">
                      <i className="mdi mdi-star"></i>
                    </li>
                    <li className="inline">
                      <i className="mdi mdi-star"></i>
                    </li>
                    <li className="inline">
                      <i className="mdi mdi-star"></i>
                    </li>
                    <li className="inline">
                      <i className="mdi mdi-star"></i>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="group">
              <div className="relative overflow-hidden shadow dark:shadow-gray-800 group-hover:shadow-lg group-hover:dark:shadow-gray-800 rounded-md duration-500">
                <img src="assets/images/shop/items/s15.jpg" alt="" />

                <div className="absolute -bottom-20 group-hover:bottom-3 start-3 end-3 duration-500">
                  <a
                    href="shop-cart.html"
                    className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-slate-900 border-slate-900 text-white w-full rounded-md"
                  >
                    Add to Cart
                  </a>
                </div>

                <ul className="list-none absolute top-[10px] end-4 opacity-0 group-hover:opacity-100 duration-500">
                  <li>
                    <a
                      href="javascript:void(0)"
                      className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white"
                    >
                      <i className="mdi mdi-heart"></i>
                    </a>
                  </li>
                  <li className="mt-1">
                    <a
                      href="shop-item-detail.html"
                      className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white"
                    >
                      <i className="mdi mdi-eye-outline"></i>
                    </a>
                  </li>
                  <li className="mt-1">
                    <a
                      href="javascript:void(0)"
                      className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white"
                    >
                      <i className="mdi mdi-bookmark-outline"></i>
                    </a>
                  </li>
                </ul>
              </div>

              <div className="mt-4">
                <a
                  href="shop-item-detail.html"
                  className="hover:text-indigo-600 text-lg font-semibold"
                >
                  Shorts
                </a>
                <div className="flex justify-between items-center mt-1">
                  <p className="text-green-600">
                    $16.00 <del className="text-red-600">$21.00</del>
                  </p>
                  <ul className="font-medium text-amber-400 list-none">
                    <li className="inline">
                      <i className="mdi mdi-star"></i>
                    </li>
                    <li className="inline">
                      <i className="mdi mdi-star"></i>
                    </li>
                    <li className="inline">
                      <i className="mdi mdi-star"></i>
                    </li>
                    <li className="inline">
                      <i className="mdi mdi-star"></i>
                    </li>
                    <li className="inline">
                      <i className="mdi mdi-star"></i>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="group">
              <div className="relative overflow-hidden shadow dark:shadow-gray-800 group-hover:shadow-lg group-hover:dark:shadow-gray-800 rounded-md duration-500">
                <img src="assets/images/shop/items/s16.jpg" alt="" />

                <div className="absolute -bottom-20 group-hover:bottom-3 start-3 end-3 duration-500">
                  <NavLink
                    to="/cart"
                    className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-slate-900 border-slate-900 text-white w-full rounded-md"
                  >
                    Add to Cart
                  </NavLink>
                </div>

                <ul className="list-none absolute top-[10px] end-4 opacity-0 group-hover:opacity-100 duration-500">
                  <li>
                    <a
                      href="javascript:void(0)"
                      className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white"
                    >
                      <i className="mdi mdi-heart"></i>
                    </a>
                  </li>
                  <li className="mt-1">
                    <a
                      href="shop-item-detail.html"
                      className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white"
                    >
                      <i className="mdi mdi-eye-outline"></i>
                    </a>
                  </li>
                  <li className="mt-1">
                    <a
                      href="javascript:void(0)"
                      className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white"
                    >
                      <i className="mdi mdi-bookmark-outline"></i>
                    </a>
                  </li>
                </ul>
              </div>

              <div className="mt-4">
                <a
                  href="shop-item-detail.html"
                  className="hover:text-indigo-600 text-lg font-semibold"
                >
                  Masks
                </a>
                <div className="flex justify-between items-center mt-1">
                  <p className="text-green-600">
                    $16.00 <del className="text-red-600">$21.00</del>
                  </p>
                  <ul className="font-medium text-amber-400 list-none">
                    <li className="inline">
                      <i className="mdi mdi-star"></i>
                    </li>
                    <li className="inline">
                      <i className="mdi mdi-star"></i>
                    </li>
                    <li className="inline">
                      <i className="mdi mdi-star"></i>
                    </li>
                    <li className="inline">
                      <i className="mdi mdi-star"></i>
                    </li>
                    <li className="inline">
                      <i className="mdi mdi-star"></i>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container relative mt-16">
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
                  <div className="content">
                    <h6 className="text-base font-medium">
                      Install app now on your cellphones
                    </h6>
                    <a
                      href="#"
                      className="relative inline-block font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out"
                    >
                      Learn More <i className="uil uil-angle-right-b"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
