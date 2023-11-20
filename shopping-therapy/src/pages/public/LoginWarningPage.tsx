import { Link } from "react-router-dom";
import { PATH_PUBLIC } from "../../router/Routes";

export default function LoginWarningPage() {
  return (
    <>
      <section className="relative bg-indigo-600/5 mt-20">
        <div className="container-fluid relative">
          <div className="grid grid-cols-1">
            <div className="flex flex-col min-h-screen justify-center md:px-10 py-10 px-4">
              <div className="text-center">
                <a href="index.html">
                  <img
                    src="assets/images/logo-icon-64.png"
                    className="mx-auto"
                    alt=""
                  />
                </a>
              </div>
              <div className="title-heading text-center my-auto">
                <h1 className="mt-3 mb-6 md:text-5xl text-3xl font-bold">
                  Login
                </h1>
                <p className="text-slate-400">
                  If you want to buy something You have to Login first
                </p>

                <div className="mt-4">
                  <Link
                    to={PATH_PUBLIC.login}
                    className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md"
                  >
                    Login
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
