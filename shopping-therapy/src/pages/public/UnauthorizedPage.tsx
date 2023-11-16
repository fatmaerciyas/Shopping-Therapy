import { MdFrontHand } from "react-icons/md";

export default function UnauthorizedPage() {
  return (
    <>
      <section className="relative bg-indigo-600/5 mt-20">
        <div className="container-fluid relative">
          <div className="grid grid-cols-1">
            <div className="flex min-h-screen justify-center md:px-10 py-10 px-4">
              <div className="title-heading text-center my-auto ">
                <MdFrontHand className="mt-3 mb-6 md:text-5xl text-3xl mx-auto w-40 font-bold" />

                <p className="text-slate-400">
                  You don't have access to requested page
                </p>

                <div className="mt-4">
                  <a
                    href="index.html"
                    className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md"
                  >
                    Back to Home
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
