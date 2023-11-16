import { Outlet, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth.hook";
import Sidebar from "./SidebarDashboard";
import Header from "../Header";
import Footer from "../Footer";

const Layout = () => {
  const { isAuthenticated } = useAuth();
  const { pathname } = useLocation();

  console.log(pathname);

  const sideBarRenderer = () => {
    if (isAuthenticated && pathname.toLowerCase().startsWith("/dashboard")) {
      return <Sidebar />;
    }
    return null;
  };

  return (
    <html lang="en" className="light scroll-smooth" dir="ltr">
      <head>
        <title>
          Techwind - Tailwind CSS Multipurpose Landing & Admin Dashboard
          Template
        </title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta
          name="description"
          content="Tailwind CSS Saas & Software Landing Page Template"
        />
        <meta
          name="keywords"
          content="agency, application, business, clean, creative, cryptocurrency, it solutions, modern, multipurpose, nft marketplace, portfolio, saas, software, tailwind css"
        />
        <meta name="author" content="Shreethemes" />
        <meta name="website" content="https://shreethemes.in/" />
        <meta name="email" content="support@shreethemes.in" />
        <meta name="version" content="2.0.0" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />

        <link rel="shortcut icon" href="../assets/images/favicon.ico" />

        <link
          href="../assets/libs/tiny-slider/tiny-slider.css"
          rel="stylesheet"
        />
        <link
          href="../assets/libs/%40iconscout/unicons/css/line.css"
          type="text/css"
          rel="stylesheet"
        />
        <link
          href="../assets/libs/%40mdi/font/css/materialdesignicons.min.css"
          rel="stylesheet"
          type="text/css"
        />
        <link rel="stylesheet" href="../assets/css/tailwind.min.css" />
      </head>
      <body className="font-nunito text-base text-black dark:text-white ">
        {isAuthenticated ? (
          <>
            <div className="flex flex-row mt-20 p-0 ">
              {sideBarRenderer()}
              <Outlet />
            </div>
          </>
        ) : (
          <>
            <div className="flex flex-col">
              <Outlet />
              <Footer />
            </div>
          </>
        )}

        <Header />
      </body>

      <a
        href="#"
        id="back-to-top"
        className="back-to-top fixed hidden text-lg rounded-full z-10 bottom-5 end-5 h-9 w-9 text-center bg-indigo-600 text-white leading-9"
      >
        <i className="uil uil-arrow-up"></i>
      </a>

      <div className="fixed top-[30%] -right-2 z-50">
        <span className="relative inline-block rotate-90">
          <input
            type="checkbox"
            className="checkbox opacity-0 absolute"
            id="chk"
          />
          <label className="label bg-slate-900 dark:bg-white shadow dark:shadow-gray-800 cursor-pointer rounded-full flex justify-between items-center p-1 w-14 h-8">
            <i className="uil uil-moon text-[20px] text-yellow-500"></i>
            <i className="uil uil-sun text-[20px] text-yellow-500"></i>
            <span className="ball bg-white dark:bg-slate-900 rounded-full absolute top-[2px] left-[2px] w-7 h-7"></span>
          </label>
        </span>
      </div>
      <div className="fixed top-[40%] -right-3 z-50">
        <a href="#" id="switchRtl">
          <span className="py-1 px-3 relative inline-block rounded-t-md -rotate-90 bg-white dark:bg-slate-900 shadow-md dark:shadow dark:shadow-gray-800 font-bold rtl:block ltr:hidden">
            LTR
          </span>
          <span className="py-1 px-3 relative inline-block rounded-t-md -rotate-90 bg-white dark:bg-slate-900 shadow-md dark:shadow dark:shadow-gray-800 font-bold ltr:block rtl:hidden">
            RTL
          </span>
        </a>
      </div>

      <script src="../../assets/libs/shufflejs/shuffle.min.js"></script>
      <script src="../../assets/libs/jarallax/jarallax.min.js"></script>
      <script src="../../assets/libs/tiny-slider/min/tiny-slider.js"></script>
      <script src="../../assets/libs/feather-icons/feather.min.js"></script>
      <script src="../../assets/js/plugins.init.js"></script>
      <script src="../../assets/js/app.js"></script>
    </html>
  );
};

export default Layout;
