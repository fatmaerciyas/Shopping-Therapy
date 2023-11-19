export default function CartPage() {
  // setSubtotal
  return (
    <>
      <section className="relative table w-full py-20 lg:py-24 bg-gray-50 dark:bg-slate-800">
        <div className="container relative">
          <div className="grid grid-cols-1 mt-14">
            <h3 className="text-3xl leading-normal font-semibold">Cart</h3>
          </div>

          <div className="relative mt-3">
            <ul className="tracking-[0.5px] mb-0 inline-block">
              <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out hover:text-indigo-600">
                <a href="index-shop.html">OneStopShop</a>
              </li>
              <li className="inline-block text-base text-slate-950 dark:text-white mx-0.5 ltr:rotate-0 rtl:rotate-180">
                <i className="uil uil-angle-right-b"></i>
              </li>
              <li
                className="inline-block uppercase text-[13px] font-bold text-indigo-600"
                aria-current="page"
              >
                Cart
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="relative md:py-24 py-16">
        <div className="container">
          <div className="grid lg:grid-cols-1">
            <div className="relative overflow-x-auto shadow dark:shadow-gray-800 rounded-md">
              <table className="w-full text-start">
                <thead className="text-sm uppercase bg-slate-50 dark:bg-slate-800">
                  <tr>
                    <th scope="col" className="p-4 w-4"></th>
                    <th scope="col" className="text-start p-4 min-w-[220px]">
                      Product
                    </th>
                    <th scope="col" className="p-4 w-24 min-w-[100px]">
                      Price
                    </th>
                    <th scope="col" className="p-4 w-56 min-w-[220px]">
                      Qty
                    </th>
                    <th scope="col" className="p-4 w-24 min-w-[100px]">
                      Total($)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white dark:bg-slate-900 border-t border-gray-100 dark:border-gray-800">
                    <td className="p-4">
                      <a href="#">
                        <i className="mdi mdi-window-close text-red-600"></i>
                      </a>
                    </td>
                    <td className="p-4">
                      <span className="flex items-center">
                        <img
                          src="../../assets/images/shop/items/s2.html"
                          className="rounded shadow dark:shadow-gray-800 w-12"
                          alt=""
                        />
                        <span className="ms-3">
                          <span className="block font-semibold">Bag</span>
                        </span>
                      </span>
                    </td>
                    <td className="p-4 text-center">$ 160</td>
                    <td className="p-4 text-center">
                      <div className="qty-icons">
                        <button
                          onclick="this.parentNode.querySelector('input[type=number]').stepDown()"
                          className="h-9 w-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-md bg-indigo-600/5 hover:bg-indigo-600 border border-indigo-600/10 hover:border-indigo-600 text-indigo-600 hover:text-white minus"
                        >
                          -
                        </button>
                        <input
                          min="0"
                          name="quantity"
                          value="1"
                          type="number"
                          className="h-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-md bg-indigo-600/5 hover:bg-indigo-600 border border-indigo-600/10 hover:border-indigo-600 text-indigo-600 hover:text-white pointer-events-none w-16 ps-4 quantity"
                        />
                        <button
                          onclick="this.parentNode.querySelector('input[type=number]').stepUp()"
                          className="h-9 w-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-md bg-indigo-600/5 hover:bg-indigo-600 border border-indigo-600/10 hover:border-indigo-600 text-indigo-600 hover:text-white plus"
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td className="p-4 text-end">$ 160</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="grid lg:grid-cols-12 md:grid-cols-2 grid-cols-1 mt-6 gap-6">
              <div className="lg:col-span-9 md:order-1 order-3">
                <a
                  href="#"
                  className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md me-2 mt-2"
                >
                  Shop Now
                </a>
                <a
                  href="#"
                  className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center rounded-md bg-indigo-600/5 hover:bg-indigo-600 border-indigo-600/10 hover:border-indigo-600 text-indigo-600 hover:text-white mt-2"
                >
                  Add to Cart
                </a>
              </div>

              <div className="lg:col-span-3 md:order-2 order-1">
                <ul className="list-none shadow dark:shadow-gray-800 rounded-md">
                  <li className="flex justify-between p-4">
                    <span className="font-semibold text-lg">Subtotal :</span>
                    <span className="text-slate-400">$ 1500</span>
                  </li>
                  <li className="flex justify-between p-4 border-t border-gray-100 dark:border-gray-800">
                    <span className="font-semibold text-lg">Taxes :</span>
                    <span className="text-slate-400">$ 150</span>
                  </li>
                  <li className="flex justify-between font-semibold p-4 border-t border-gray-200 dark:border-gray-600">
                    <span className="font-semibold text-lg">Total :</span>
                    <span className="font-semibold">$ 1650</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
