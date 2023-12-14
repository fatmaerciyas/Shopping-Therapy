import { useState, useEffect } from "react";
import { Product } from "../../models/Product";

import agent from "../../api/agent";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { baseUrl } from "../../api/url.contants";
import { Category } from "../../models/Category";
import axios from "axios";
import Spinner from "../../layout/Spinner";
export default function AddProduct() {
  const [product, setProduct] = useState<Partial<Product>>({
    name: "",
    description: "",
    image: "",
    brand: "",
    stock: 100,
    price: 0,
    quantity: 1,
    category: "",
  });

  const redirect = useNavigate();

  const [categories, setCategories] = useState<Category[]>([]);

  const [options, setOptions] = useState("Electronics");
  const [isLoaded, setIsLoaded] = useState(false);

  const [imageURL, setImageURL] = useState("");

  useEffect(() => {
    async function fetchdata() {
      const response = await axios.get<Category[]>(baseUrl + "Category");
      setCategories(response.data);
      console.log(options);
      setIsLoaded(true);
    }
    fetchdata();
  }, [options]);

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
    if (e.target.files && e.target.files[0]) {
      setImageURL(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleSaveBtnClick = (e) => {
    e.preventDefault();

    if (product.name === "" || product.brand === "" || options === "") {
      alert("Please Enter All Values");
      return;
    }
    //else if (product.image === "") {
    //   alert("Please Select an Product Image");
    //   return;
    // }

    const data: Partial<Product> = {
      name: product.name,
      description: product.description,
      image: imageURL,
      brand: product.brand,
      stock: product.stock,
      price: Number(product.price),
      category: options,
    };

    agent.Product.createProduct(data)
      .then((products) => setProduct(products))
      .catch((error) => console.log(error))
      .finally(() => toast.success("Added Product"));

    // axios
    //   .post("https://localhost:7049/api/Product", data)
    //   .then(function (response) {
    //     console.log(response);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
  };

  const handleBackBtnClick = (e) => {
    e.preventDefault();
    redirect("/productlisting");
  };
  if (!isLoaded) return <Spinner />;

  return (
    <div
      id="root"
      className="min-h-100vh flex grow  bg-slate-50 dark:bg-navy-900"
    >
      <form className="w-full mx-56">
        <div className="space-y-12">
          <div className=" pb-12">
            <h2 className="mt-12 font-semibold leading-7 text-2xl text-indigo-500">
              Add New Item
            </h2>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label
                  htmlFor="first-name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Product Name
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="name"
                    value={product.name}
                    onChange={changeHandler}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="last-name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Product Brand
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="brand"
                    value={product.brand}
                    onChange={changeHandler}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="last-name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Product Image
                </label>
                <div className="mt-2">
                  <input type="file" onChange={changeHandler} />
                  <img src={imageURL} alt="uploaded" />
                </div>
              </div>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label
                  htmlFor="first-name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Product Price
                </label>
                <div className="mt-2">
                  <input
                    type="number"
                    name="price"
                    value={product.price}
                    onChange={changeHandler}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="last-name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Product Description
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="description"
                    value={product.description}
                    onChange={changeHandler}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label
                  htmlFor="first-name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Stock
                </label>
                <div className="mt-2">
                  <input
                    type="number"
                    name="price"
                    value={product.stock}
                    onChange={changeHandler}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>

            <label className="block mt-16 mb-2 text-sm font-medium leading-6 text-gray-900">
              Category
            </label>
            <select
              className="  w-80 py-2  text-slate-600 px-3 h-10 bg-white shadow-2xl dark:bg-slate-900 dark:text-slate-300 rounded-lg outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0"
              onChange={(e) => setOptions(() => e.target.value)}
            >
              {categories.map((opts, i) => (
                <option key={i}>{opts.name}</option>
              ))}
            </select>
          </div>
          <div className="mt-6 flex items-center justify-end gap-x-6">
            <button
              type="submit"
              onClick={(e) => handleBackBtnClick(e)}
              className="rounded-md bg-yellow-600 px-3 py-2 text-sm font-semibold text-slate-800 shadow-sm hover:bg-yelow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Cancel
            </button>
            <button
              type="submit"
              onClick={(e) => handleSaveBtnClick(e)}
              className="rounded-md bg-indigo-600 px-6 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
