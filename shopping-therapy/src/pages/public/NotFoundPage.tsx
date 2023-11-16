export default function NotFoundPage() {
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
                <img src="assets/images/error.png" className="mx-auto" alt="" />
                <h1 className="mt-3 mb-6 md:text-5xl text-3xl font-bold">
                  Page Not Found?
                </h1>
                <p className="text-slate-400">
                  Whoops, this is embarassing. <br /> Looks like the page you
                  were looking for wasn't found.
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

      <div className="fixed bottom-3 end-3">
        <a
          href="#"
          className="back-button h-9 w-9 inline-flex items-center justify-center tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-full"
        >
          <i data-feather="arrow-left" className="h-4 w-4"></i>
        </a>
      </div>
    </>
  );
}
