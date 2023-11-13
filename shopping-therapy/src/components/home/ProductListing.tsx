import { useEffect, useState } from "react";
import { baseUrl } from "../../api/url.contants";
import { Product } from "../../models/Product";
//import { useNavigate } from "react-router-dom";
import axios from "axios";
import ProductItem from "../product/ProductItem";
import ReactPaginate from "react-paginate";
import Categories from "../category/Categories";

export default function ProductListing() {
  const [products, setProducts] = useState<Product[]>([]);

  const [itemOffset, setItemOffset] = useState(0);

  const ItemsPerPage = 9;

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + ItemsPerPage;

  const currentItems = products.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(products.length / ItemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * ItemsPerPage) % products.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  // const redirect = useNavigate();

  useEffect(() => {
    async function fetchdata() {
      const response = await axios.get<Product[]>(baseUrl + "Product");
      setProducts(response.data);
    }
    fetchdata();
  }, [products]);

  // const redirectToEditPage = (id: string) => {
  //   redirect(`/edit/${id}`);
  // };

  // const redirectToDeletePage = (id: string) => {
  //   redirect(`/delete/${id}`);
  // };

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
              <Categories />
            </div>

            <div className="lg:col-span-8 md:col-span-6">
              <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
                <div className="lg:col-span-9 md:col-span-8">
                  <h3 className="text-xl leading-normal font-semibold">
                    Showing 1-8 of 16 results
                  </h3>
                </div>

                <div className="lg:col-span-3 md:col-span-4 md:text-end">
                  <label className="font-semibold hidden"></label>
                  <select className="form-select form-input w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0">
                    <option selected>Sort by latest</option>
                    <option>Sort by popularity</option>
                    <option>Sort by rating</option>
                    <option>Sort by price: low to high</option>
                    <option>Sort by price: high to low</option>
                  </select>
                </div>
              </div>

              <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-8 gap-12">
                {currentItems.map((product) => {
                  if (!product) {
                    return null;
                  }

                  const { productId } = product;

                  return (
                    <>
                      <ProductItem product={product} key={productId} />
                      {/* <button onClick={() => redirectToEditPage(productId!.toString())}>
              Edit
            </button>
            <br />
            <button onClick={() => redirectToDeletePage(productId!.toString())}>
              Delete
            </button> */}
                    </>
                  );
                })}
              </div>

              <div className="grid md:grid-cols-12 grid-cols-1 mt-8">
                <div className="md:col-span-12 text-center justify-center">
                  <ReactPaginate
                    className="paginate"
                    breakLabel="..."
                    nextLabel=">"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={5}
                    pageCount={pageCount}
                    previousLabel="<"
                    renderOnZeroPageCount={null}
                  />
                </div>
              </div>
            </div>
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
