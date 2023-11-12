import { useState, useEffect } from "react";
import { Product } from "../../models/Product";

//import agent from "../../api/agent";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { baseUrl } from "../../api/url.contants";
import agent from "../../api/agent";

export default function EditProduct() {
  const [product, setProduct] = useState<Partial<Product>>({
    name: "",
    description: "",
    image: "",
    brand: "",
    stock: 100,
    price: 0,
    quantity: 1,
  });

  const redirect = useNavigate();
  const { id } = useParams();
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    axios.get<Product>(`${baseUrl}Product/${id}`).then((response) =>
      setProduct({
        name: response.data.name,
        description: response.data.description,
        image: "",
        brand: response.data.brand,
        stock: 100,
        price: response.data.price,
        quantity: 1,
      })
    );
  }, [id]);

  const handleSaveBtnClick = (e) => {
    e.preventDefault();

    if (product.name === "" || product.brand === "") {
      alert("Please Enter All Values");
      return;
    }

    const data: Partial<Product> = {
      name: product.name,
      description: product.description,
      image: "aaa",
      brand: product.brand,
      stock: 1,
      price: Number(product.price),
    };

    agent.Product.updateProduct(data, Number(id!))
      .then((products) => setProduct(products))
      .catch((error) => console.log(error))
      .finally(() => redirect("/"));

    // axios
    //   .put(`${baseUrl}/Product/${id}`, data)
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

  return (
    <form>
      <div className="space-y-12">
        <div className=" pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">
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
        </div>
        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button
            type="submit"
            onClick={(e) => handleBackBtnClick(e)}
            className="rounded-md bg-yellow-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-yelow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Back
          </button>
          <button
            type="submit"
            onClick={(e) => handleSaveBtnClick(e)}
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Save
          </button>
        </div>
      </div>
    </form>
  );
}
