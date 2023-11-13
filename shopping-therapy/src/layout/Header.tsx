import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <nav
        id="topnav"
        className="defaultscroll is-sticky bg-white dark:bg-slate-900"
      >
        <div className="container relative">
          <a className="logo" href="index.html">
            <img
              src="assets/images/logo-dark.png"
              className="inline-block dark:hidden"
              alt=""
            />
            <img
              src="assets/images/logo-light.png"
              className="hidden dark:inline-block"
              alt=""
            />
          </a>

          <div className="menu-extras">
            <div className="menu-item">
              <a className="navbar-toggle" id="isToggle" onclick="toggleMenu()">
                <div className="lines">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </a>
            </div>
          </div>

          <ul className="buy-button list-none mb-0">
            <li className="dropdown inline-block relative me-1">
              <button
                data-dropdown-toggle="dropdown"
                className="dropdown-toggle text-[20px]"
                type="button"
              >
                <i className="uil uil-search align-middle"></i>
              </button>
              <div className="dropdown-menu absolute overflow-hidden end-0 m-0 mt-4 z-10 w-52 rounded-md bg-white dark:bg-slate-900 shadow dark:shadow-gray-800 hidden">
                <div className="relative">
                  <i className="uil uil-search text-lg absolute top-[3px] end-3"></i>
                  <input
                    type="text"
                    className="form-input h-9 pe-10 sm:w-44 w-36 border-0 focus:ring-0"
                    name="s"
                    id="searchItem"
                    placeholder="Search..."
                  />
                </div>
              </div>
            </li>

            <li className="dropdown inline-block relative">
              <button
                data-dropdown-toggle="dropdown"
                className="dropdown-toggle h-9 w-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full bg-indigo-600 hover:bg-indigo-700 border border-indigo-600 hover:border-indigo-700 text-white"
                type="button"
              >
                <i className="mdi mdi-cart"></i>
              </button>
              <div className="dropdown-menu absolute end-0 m-0 mt-4 z-10 w-60 rounded-md bg-white dark:bg-slate-900 shadow dark:shadow-gray-800 hidden">
                <ul
                  className="py-3 text-start"
                  aria-labelledby="dropdownDefault"
                >
                  <li>
                    <a
                      href="#"
                      className="flex items-center justify-between py-1.5 px-4"
                    >
                      <span className="flex items-center">
                        <img
                          src="../../assets/images/shop/items/s1.html"
                          className="rounded shadow dark:shadow-gray-800 w-9"
                          alt=""
                        />
                        <span className="ms-3">
                          <span className="block font-semibold">
                            T-shirt (M)
                          </span>
                          <span className="block text-sm text-slate-400">
                            $320 X 2
                          </span>
                        </span>
                      </span>

                      <span className="font-semibold">$640</span>
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="flex items-center justify-between py-1.5 px-4"
                    >
                      <span className="flex items-center">
                        <img
                          src="../../assets/images/shop/items/s2.html"
                          className="rounded shadow dark:shadow-gray-800 w-9"
                          alt=""
                        />
                        <span className="ms-3">
                          <span className="block font-semibold">Bag</span>
                          <span className="block text-sm text-slate-400">
                            $50 X 5
                          </span>
                        </span>
                      </span>

                      <span className="font-semibold">$250</span>
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="flex items-center justify-between py-1.5 px-4"
                    >
                      <span className="flex items-center">
                        <img
                          src="../../assets/images/shop/items/s3.html"
                          className="rounded shadow dark:shadow-gray-800 w-9"
                          alt=""
                        />
                        <span className="ms-3">
                          <span className="block font-semibold">
                            Watch (Men)
                          </span>
                          <span className="block text-sm text-slate-400">
                            $800 X 1
                          </span>
                        </span>
                      </span>

                      <span className="font-semibold">$800</span>
                    </a>
                  </li>

                  <li className="border-t border-gray-100 dark:border-gray-800 my-2"></li>

                  <li className="flex items-center justify-between py-1.5 px-4">
                    <h6 className="font-semibold mb-0">Total($):</h6>
                    <h6 className="font-semibold mb-0">$1690</h6>
                  </li>

                  <li className="py-1.5 px-4">
                    <a
                      href="javascript:void(0)"
                      className="py-[5px] px-4 inline-block font-semibold tracking-wide align-middle duration-500 text-sm text-center rounded-md bg-indigo-600 hover:bg-indigo-700 border border-indigo-600 hover:border-indigo-700 text-white"
                    >
                      View Cart
                    </a>
                    <a
                      href="javascript:void(0)"
                      className="py-[5px] px-4 inline-block font-semibold tracking-wide align-middle duration-500 text-sm text-center rounded-md bg-indigo-600 hover:bg-indigo-700 border border-indigo-600 hover:border-indigo-700 text-white"
                    >
                      Checkout
                    </a>
                    <p className="text-sm text-slate-400 mt-1">*T&C Apply</p>
                  </li>
                </ul>
              </div>
            </li>

            <li className="inline-block">
              <a
                href="javascript:void(0)"
                className="h-9 w-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full bg-indigo-600 hover:bg-indigo-700 border border-indigo-600 hover:border-indigo-700 text-white"
                data-modal-toggle="ContactUs"
              >
                <i className="mdi mdi-heart"></i>
              </a>
            </li>

            <li className="dropdown inline-block relative">
              <button
                data-dropdown-toggle="dropdown"
                className="dropdown-toggle h-9 w-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full bg-indigo-600 hover:bg-indigo-700 border border-indigo-600 hover:border-indigo-700 text-white"
                type="button"
              >
                <i className="mdi mdi-account"></i>
              </button>
              <div className="dropdown-menu absolute end-0 m-0 mt-4 z-10 w-44 rounded-md bg-white dark:bg-slate-900 shadow dark:shadow-gray-800 hidden">
                <ul
                  className="py-2 text-start"
                  aria-labelledby="dropdownDefault"
                >
                  <li>
                    <a
                      href="shop-account.html"
                      className="block py-1.5 px-4 hover:text-indigo-600"
                    >
                      <i className="uil uil-user align-middle me-1"></i> Account
                    </a>
                  </li>
                  <li>
                    <a
                      href="shop-cart.html"
                      className="block py-1.5 px-4 hover:text-indigo-600"
                    >
                      <i className="uil uil-clipboard-notes align-middle me-1"></i>{" "}
                      Order History
                    </a>
                  </li>
                  <li>
                    <a
                      href="shop-checkout.html"
                      className="block py-1.5 px-4 hover:text-indigo-600"
                    >
                      <i className="uil uil-arrow-circle-down align-middle me-1"></i>{" "}
                      Download
                    </a>
                  </li>
                  <li className="border-t border-gray-100 dark:border-gray-800 my-2"></li>
                  <li>
                    <a
                      href="auth-login.html"
                      className="block py-1.5 px-4 hover:text-indigo-600"
                    >
                      <i className="uil uil-sign-out-alt align-middle me-1"></i>{" "}
                      Logout
                    </a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>

          <div id="navigation">
            <ul className="navigation-menu justify-between align-middle">
              <li>
                <Link to="/catalog" className="sub-menu-item">
                  Catalog
                </Link>
              </li>

              <li>
                <Link to="/about" className="sub-menu-item">
                  About
                </Link>
              </li>

              <li>
                <Link to="/contact" className="sub-menu-item">
                  Contact
                </Link>
              </li>
              <li>
                <a href="contact-two.html" className="sub-menu-item">
                  Login
                </a>
              </li>
              <li>
                <a href="contact-two.html" className="sub-menu-item">
                  Register
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
