import { Outlet, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth.hook";
import Sidebar from "./NavbarDashboard";
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
        <title>OneStopShop</title>
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

        <link rel="stylesheet" href="../assets/css/app.css" />

        <script src="../assets/js/app.js" defer></script>

        <link rel="preconnect" href="https://fonts.googleapis.com/" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com/"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&amp;family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&amp;display=swap"
          rel="stylesheet"
        />
        <script>
          localStorage.getItem("_x_darkMode_on") === "true" &&
          document.documentElement.classList.add("dark");
        </script>
      </head>
      <body className="font-nunito text-base bg-slate-800 text-white ">
        {isAuthenticated ? (
          <>
            <div className="flex flex-col w-full md:w-4/5 mx-auto ">
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
      <script src="../../assets/libs/NavbarDashboard.js"></script>

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
