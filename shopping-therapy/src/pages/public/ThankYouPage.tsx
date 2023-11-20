import { AiOutlineCheckCircle } from "react-icons/ai";
import { NavLink } from "react-router-dom";
export default function ThankYouPage() {
  return (
    <>
      <section className="relative h-screen flex items-center justify-center text-center bg-gray-50 dark:bg-slate-800">
        <div className="container relative">
          <div className="grid grid-cols-1">
            <div className="title-heading text-center my-auto">
              <div className="w-24 h-24 bg-indigo-600/5 text-indigo-600 rounded-full text-5xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-800 mx-auto">
                <AiOutlineCheckCircle />
              </div>
              <h1 className="mt-6 mb-8 md:text-5xl text-3xl font-bold">
                Thank You
              </h1>
              <p className="text-slate-400 max-w-xl mx-auto">
                Thank you for your purchase. You can check your orders from your
                account.
              </p>

              <div className="mt-6">
                <NavLink
                  to="/"
                  className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600/5 hover:bg-indigo-600 border-indigo-600/10 hover:border-indigo-600 text-indigo-600 hover:text-white rounded-md"
                >
                  Back to Home
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
