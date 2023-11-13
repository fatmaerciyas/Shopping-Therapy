// import Categories from "../components/home/Categories";
// import ProductListing from "../components/home/ProductListing";
// import Products from "../components/home/Products";

// import SliderComp from "../components/home/SliderComp";
// import Sorting from "../components/home/Sorting";

// export default function Home() {
//   return (
//     <div>
//       <SliderComp />
//       <Sorting />
//       <div className="flex">
//         <Categories />
//       </div>
//       <Products />
//       <br />
//       <ProductListing />
//     </div>
//   );
// }

export default function HomePage() {
  return (
    <>
      <section className="relative mt-20">
        <div className="container-fluid relative">
          <div className="relative py-48 table w-full shadow-md overflow-hidden">
            <div className="absolute inset-0 bg-[url('../../assets/images/shop/backgrounds/home2.jpg')] bg-no-repeat md:bg-left bg-center bg-cover"></div>
            <div className="absolute inset-0 bg-slate-950/30"></div>
            <div className="container relative">
              <div className="grid grid-cols-1">
                <div className="md:text-start text-center">
                  <h1 className="font-bold text-white lg:leading-normal leading-normal text-4xl lg:text-5xl mb-6">
                    New Accessories <br /> Collections
                  </h1>
                  <p className="text-white/70 text-xl max-w-xl">
                    Start working with Tailwind CSS that can provide everything
                    you need to generate awareness, drive traffic, connect.
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
            </div>
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
                    Hoodies
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
                      Beanies for Man & Women
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
              <a
                href="shop-grid-two.html"
                className="relative inline-block font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-slate-400 hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out"
              >
                View More Items{" "}
                <i className="uil uil-arrow-right align-middle"></i>
              </a>
            </div>
          </div>

          <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
            <div className="group">
              <div className="relative overflow-hidden shadow dark:shadow-gray-800 group-hover:shadow-lg group-hover:dark:shadow-gray-800 rounded-md duration-500">
                <img src="assets/images/shop/items/s1.jpg" alt="" />

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
                      className="bg-orange-600 text-white text-[10px] font-bold px-2.5 py-0.5 rounded h-5"
                    >
                      New
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
                <img src="assets/images/shop/items/s2.jpg" alt="" />

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
                      className="bg-green-600 text-white text-[10px] font-bold px-2.5 py-0.5 rounded h-5"
                    >
                      Featured
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
                <img src="assets/images/shop/items/s3.jpg" alt="" />

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
                  Elegent Watch
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
                <img src="assets/images/shop/items/s4.jpg" alt="" />

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
                  Casual Shoes
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
                <img src="assets/images/shop/items/s5.jpg" alt="" />

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
                      className="bg-orange-600 text-white text-[10px] font-bold px-2.5 py-0.5 rounded h-5"
                    >
                      New
                    </a>
                  </li>
                </ul>
              </div>

              <div className="mt-4">
                <a
                  href="shop-item-detail.html"
                  className="hover:text-indigo-600 text-lg font-semibold"
                >
                  Earphones
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
                <img src="assets/images/shop/items/s6.jpg" alt="" />

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
                  Elegent Mug
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
                <img src="assets/images/shop/items/s7.jpg" alt="" />

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
                  Sony Headphones
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
                <img src="assets/images/shop/items/s8.jpg" alt="" />

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
                      className="bg-blue-600 text-white text-[10px] font-bold px-2.5 py-0.5 rounded h-5"
                    >
                      Sale
                    </a>
                  </li>
                </ul>
              </div>

              <div className="mt-4">
                <a
                  href="shop-item-detail.html"
                  className="hover:text-indigo-600 text-lg font-semibold"
                >
                  Wooden Stools
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

          <div className="grid md:grid-cols-12 grid-cols-1 md:hidden mt-8">
            <div className="md:col-span-12 text-center">
              <a
                href="shop-grid-two.html"
                className="relative inline-block font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-slate-400 hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out"
              >
                View More Items{" "}
                <i className="uil uil-arrow-right align-middle"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="container relative mt-16">
          <div className="grid grid-cols-1 items-center">
            <h3 className="text-2xl leading-normal font-semibold">
              Top Categories
            </h3>
          </div>

          <div className="grid lg:grid-cols-6 md:grid-cols-3 grid-cols-2 mt-8 gap-[30px]">
            <div className="group relative overflow-hidden hover:shadow-lg hover:dark:shadow-gray-800 rounded-md duration-500 p-6 text-center">
              <img
                src="assets/images/shop/categories/electronics.jpg"
                className="rounded-full shadow-md dark:shadow-gray-800 h-20 w-20 block mx-auto mb-2"
                alt=""
              />

              <a
                href="#"
                className="font-semibold hover:text-indigo-600 text-lg"
              >
                Electronics
              </a>
            </div>

            <div className="group relative overflow-hidden hover:shadow-lg hover:dark:shadow-gray-800 rounded-md duration-500 p-6 text-center">
              <img
                src="assets/images/shop/categories/fashion.jpg"
                className="rounded-full shadow-md dark:shadow-gray-800 h-20 w-20 block mx-auto mb-2"
                alt=""
              />

              <a
                href="#"
                className="font-semibold hover:text-indigo-600 text-lg"
              >
                Fashion
              </a>
            </div>

            <div className="group relative overflow-hidden hover:shadow-lg hover:dark:shadow-gray-800 rounded-md duration-500 p-6 text-center">
              <img
                src="assets/images/shop/categories/furniture.jpg"
                className="rounded-full shadow-md dark:shadow-gray-800 h-20 w-20 block mx-auto mb-2"
                alt=""
              />

              <a
                href="#"
                className="font-semibold hover:text-indigo-600 text-lg"
              >
                Furniture
              </a>
            </div>

            <div className="group relative overflow-hidden hover:shadow-lg hover:dark:shadow-gray-800 rounded-md duration-500 p-6 text-center">
              <img
                src="assets/images/shop/categories/mobile.jpg"
                className="rounded-full shadow-md dark:shadow-gray-800 h-20 w-20 block mx-auto mb-2"
                alt=""
              />

              <a
                href="#"
                className="font-semibold hover:text-indigo-600 text-lg"
              >
                Mobile
              </a>
            </div>

            <div className="group relative overflow-hidden hover:shadow-lg hover:dark:shadow-gray-800 rounded-md duration-500 p-6 text-center">
              <img
                src="assets/images/shop/categories/music.jpg"
                className="rounded-full shadow-md dark:shadow-gray-800 h-20 w-20 block mx-auto mb-2"
                alt=""
              />

              <a
                href="#"
                className="font-semibold hover:text-indigo-600 text-lg"
              >
                Music
              </a>
            </div>

            <div className="group relative overflow-hidden hover:shadow-lg hover:dark:shadow-gray-800 rounded-md duration-500 p-6 text-center">
              <img
                src="assets/images/shop/categories/sports.jpg"
                className="rounded-full shadow-md dark:shadow-gray-800 h-20 w-20 block mx-auto mb-2"
                alt=""
              />

              <a
                href="#"
                className="font-semibold hover:text-indigo-600 text-lg"
              >
                Sports
              </a>
            </div>
          </div>
        </div>

        <div className="container relative mt-16">
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
        </div>
      </section>

      <section
        className="py-28 w-full table relative bg-[url('../../assets/images/shop/cta.html')] bg-center bg-no-repeat bg-cover jarallax"
        data-jarallax
        data-speed="0.5"
      >
        <div className="absolute inset-0 bg-slate-900/30"></div>
        <div className="container relative">
          <div className="grid grid-cols-1 text-center">
            <h3 className="mb-4 md:text-4xl text-3xl text-white font-bold">
              End of Season Clearance <br /> Sale upto 30%
            </h3>

            <p className="text-white/80 max-w-xl mx-auto">
              Start working with Techwind that can provide everything you need
              to generate awareness, drive traffic, connect.
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

      <section className="relative py-16">
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
                <img src="assets/images/shop/items/s16.jpg" alt="" />

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
