import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Product } from "../../models/Product";
import { baseUrl } from "../../api/url.contants";
import axios from "axios";
import Spinner from "../../layout/Spinner";
import ProductListing from "../../components/product/ProductListing";
import PopularCategories from "../../components/category/PopularCategories";

export default function HomePage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [sort, setSort] = useState("");

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    async function fetchdata() {
      try {
        const responseProduct = await axios.get<Product[]>(baseUrl + "Product");
        setProducts(responseProduct.data);
        console.log(products);
        setIsLoaded(true);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    }
    fetchdata();
  }, []);

  if (!isLoaded) return <Spinner />;
  return (
    <>
      <section className="relative  ">
        <div className="container-fluid relative">
          <div
            className="relative pb-48  justify-center text-center flex items-center  
            h-screen 
            w-full shadow-md overflow-hidden
             "
          >
            <div className=" text-center z-50 relative w-2/4 mt-48 ">
              <h1 className="font-bold text-slate-200 text-4xl lg:text-5xl">
                OneStopShop
              </h1>
              <br />

              <p className="text-white/70 text-xl ">
                Necmettin Erbakan University <br />
                2023-2024 Academic Year Graduation Project
              </p>
              <div className="mt-6">
                <a
                  href="#"
                  className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-slate-200 rounded-md me-2 mt-2"
                >
                  <Link to="/catalog" className=" mdi mdi-cart-outline">
                    Shop Now
                  </Link>
                </a>
              </div>
            </div>

            <video
              src="../../assets/images/shop/backgrounds/video2.mp4"
              autoplay="{true}"
              loop
              muted
              className=" absolute w-full opacity-40 mt-32
            min-w-full min-h-full"
            >
              aaa
            </video>

            {/* //bg-[url('../../assets/images/shop/backgrounds/home2.jpg')] */}
          </div>
        </div>
      </section>

      <section className="relative py-16">
        <div className="container relative">
          <div id="grid" className="md:flex w-full justify-center mx-auto mt-4">
            <div className="md:w-1/2 p-3 picture-item">
              <div className="group relative overflow-hidden rounded-md shadow dark:shadow-gray-800">
                <img
                  src="assets/images/shop/hoodie.jpg"
                  className="group-hover:scale-110 duration-500"
                  alt=""
                />
                <div className="absolute bottom-4 start-4">
                  <a
                    href="#"
                    className="text-xl font-semibold hover:text-indigo-600 duration-500"
                  >
                    Sweatshirts
                  </a>
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="md:h-1/2 p-3 picture-item">
                <div className="group relative overflow-hidden rounded-md shadow dark:shadow-gray-800">
                  <img
                    src="assets/images/shop/beanie.jpg"
                    className="group-hover:scale-110 duration-500"
                    alt=""
                  />
                  <div className="absolute bottom-4 start-4">
                    <a
                      href="#"
                      className="text-xl font-semibold hover:text-indigo-600 duration-500"
                    >
                      Hats
                    </a>
                  </div>
                </div>
              </div>

              <div className="md:h-1/2 p-3 picture-item">
                <div className="group relative overflow-hidden rounded-md shadow dark:shadow-gray-800">
                  <img
                    src="assets/images/shop/glasses.jpg"
                    className="group-hover:scale-110 duration-500"
                    alt=""
                  />
                  <div className="absolute bottom-4 start-4">
                    <a
                      href="#"
                      className="text-xl font-semibold hover:text-indigo-600 duration-500"
                    >
                      Glasses
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container relative mt-16">
          <div className="grid md:grid-cols-12 grid-cols-1 items-center">
            <div className="lg:col-span-8 md:col-span-6 md:text-start text-center">
              <h3 className="text-2xl leading-normal font-semibold">
                Most Viewed Products
              </h3>
            </div>

            <div className="lg:col-span-4 md:col-span-6 md:text-end hidden md:block">
              <Link
                to="/catalog"
                className="relative inline-block font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-slate-400 hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out"
              >
                View More Items
              </Link>
            </div>
          </div>

          <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
            <ProductListing
              products={products}
              setSort={setSort}
              sort={sort}
              gridState="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 mt-8 gap-12"
            />
          </div>
        </div>

        <div className="container relative mt-16">
          <div className="grid grid-cols-1 items-center">
            <h3 className="text-2xl leading-normal font-semibold">
              Top Categories
            </h3>
          </div>

          <PopularCategories />
        </div>

        {/* <div className="container relative mt-16">
          <div className="grid grid-cols-1 items-center">
            <h3 className="text-2xl leading-normal font-semibold">
              Popular Products
            </h3>
          </div>

          <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
            <div className="group">
              <div className="relative overflow-hidden shadow dark:shadow-gray-800 group-hover:shadow-lg group-hover:dark:shadow-gray-800 rounded-md duration-500">
                <img src="assets/images/shop/items/s9.jpg" alt="" />

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

                <ul className="list-none absolute top-[10px] start-4">
                  <li>
                    <a
                      href="javascript:void(0)"
                      className="bg-cyan-500 text-white text-[10px] font-bold px-2.5 py-0.5 rounded h-5"
                    >
                      Popular
                    </a>
                  </li>
                </ul>
              </div>

              <div className="mt-4">
                <a
                  href="shop-item-detail.html"
                  className="hover:text-indigo-600 text-lg font-semibold"
                >
                  Branded T-Shirt
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
                <img src="assets/images/shop/items/s10.jpg" alt="" />

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

                <ul className="list-none absolute top-[10px] start-4">
                  <li>
                    <a
                      href="javascript:void(0)"
                      className="bg-cyan-500 text-white text-[10px] font-bold px-2.5 py-0.5 rounded h-5"
                    >
                      Popular
                    </a>
                  </li>
                </ul>
              </div>

              <div className="mt-4">
                <a
                  href="shop-item-detail.html"
                  className="hover:text-indigo-600 text-lg font-semibold"
                >
                  Shopping Bag
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
                <img src="assets/images/shop/items/s11.jpg" alt="" />

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

                <ul className="list-none absolute top-[10px] start-4">
                  <li>
                    <a
                      href="javascript:void(0)"
                      className="bg-cyan-500 text-white text-[10px] font-bold px-2.5 py-0.5 rounded h-5"
                    >
                      Popular
                    </a>
                  </li>
                </ul>
              </div>

              <div className="mt-4">
                <a
                  href="shop-item-detail.html"
                  className="hover:text-indigo-600 text-lg font-semibold"
                >
                  Sports Shoes
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
                <img src="assets/images/shop/items/s12.jpg" alt="" />

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

                <ul className="list-none absolute top-[10px] start-4">
                  <li>
                    <a
                      href="javascript:void(0)"
                      className="bg-cyan-500 text-white text-[10px] font-bold px-2.5 py-0.5 rounded h-5"
                    >
                      Popular
                    </a>
                  </li>
                </ul>
              </div>

              <div className="mt-4">
                <a
                  href="shop-item-detail.html"
                  className="hover:text-indigo-600 text-lg font-semibold"
                >
                  T-shirt
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
        </div> */}
      </section>

      <section
        className="py-28 w-full table relative bg-[url('../../assets/images/cta-bg.jpg')] bg-center bg-no-repeat bg-cover jarallax"
        data-jarallax
        data-speed="0.5"
      >
        <div className="absolute inset-0 bg-slate-900/30"></div>
        <div className="container relative">
          <div className="grid grid-cols-1 text-center">
            <h3 className="mb-4 md:text-3xl text-3xl text-white font-bold">
              Enjoy OneStopShop project :) <br />
            </h3>

            <p className="text-white/80 max-w-xl mx-auto">
              Start shopping with OneStopShop that can provide everything you
              need.
            </p>

            <div className="mt-6">
              <a
                href="#"
                className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md me-2 mt-2"
              >
                <i className="mdi mdi-cart-outline"></i> Shop Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="relative py-16">
        <div className="container relative">
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
      </section> */}
    </>
  );
}
