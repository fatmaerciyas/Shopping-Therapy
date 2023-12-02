export default function AboutPage() {
  return (
    <section className="relative table w-full  lg:py-8 bg-slate-700 dark:bg-slate-800">
      <img
        src="../../assets/images/bg_about.jpg"
        className="w-full object-cover max-h-96 object-left "
      />
      <div className="container absolute top-56 left-1/3">
        <div className="grid grid-cols-1 mt-14">
          <h3 className="text-3xl leading-normal text-white font-semibold">
            About Project
          </h3>
        </div>

        <div className="relative mt-3">
          <ul className="tracking-[0.5px] mb-0 inline-block">
            <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out  text-white hover:text-indigo-600">
              Choose whatever you want :)
            </li>
            <li className="inline-block text-base text-slate-950 dark:text-white mx-0.5 ltr:rotate-0 rtl:rotate-180">
              <i className="uil uil-angle-right-b"></i>
            </li>
          </ul>
        </div>
      </div>

      <div className="container mt-20 border p-20">
        <p className="text-center text-xl">
          One Stop Shop Project is a simple E-commerce website. The reason i
          created the project is to show every technology and every framework
          that i know. I just want to show you technologies that i used;
        </p>

        <div className=" flex justify-around mt-16">
          <div className="flex flex-col">
            <p className="text-2xl font-bold mb-3">Backend</p>
            <p className="text-md ">
              <span className="text-rose-600 mr-3">*</span>Asp.Net Core 7
            </p>
            <p className="text-md ">
              <span className="text-rose-600 mr-3">*</span>Web API
            </p>
            <p className="text-md ">
              <span className="text-rose-600 mr-3">*</span>Entity Framework
            </p>
            <p className="text-md ">
              <span className="text-rose-600 mr-3">*</span>DTOs
            </p>
            <p className="text-md ">
              <span className="text-rose-600 mr-3">*</span>AutoMapper
            </p>
            <p className="text-md ">
              <span className="text-rose-600 mr-3">*</span>Jwt Token
            </p>
            <p className="text-md ">
              <span className="text-rose-600 mr-3">*</span>MSSQL
            </p>
            <p className="text-md ">
              <span className="text-rose-600 mr-3">*</span>Middleware
            </p>
            <p className="text-md ">
              <span className="text-rose-600 mr-3">*</span>UnitOfWork Design
              Pattern
            </p>
            <ul className="text-md">
              <li className="text-md font-bold">5 different layer</li>
              <li className="text-md ">Business Layer</li>
              <li className="text-md ">DataAccess Layer</li>
              <li className="text-md ">DTO Layer</li>
              <li className="text-md ">Entity Layer</li>
              <li className="text-md ">Presentation Layer</li>
            </ul>
          </div>
          <div className="flex flex-col">
            <p className="text-2xl font-bold mb-3">Frontend</p>
            <p className="text-md ">
              <span className="text-rose-600 mr-3">*</span>React.js v-18
            </p>
            <p className="text-md ">
              <span className="text-rose-600 mr-3">*</span>Tailwind Css
            </p>
            <p className="text-md ">
              <span className="text-rose-600 mr-3">*</span>Redux
            </p>
            <p className="text-md ">
              <span className="text-rose-600 mr-3">*</span>Html
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
