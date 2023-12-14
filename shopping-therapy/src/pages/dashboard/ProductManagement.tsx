import { useEffect, useState } from "react";
import { Product } from "../../models/Product";
import Spinner from "../../layout/Spinner";
import axios from "axios";
import { baseUrl } from "../../api/url.contants";
import { NavLink, useNavigate } from "react-router-dom";
import Button from "../../layout/dashboard/Button";
import toast from "react-hot-toast";

export default function ProductManagement() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    async function fetchdata() {
      const productsResponse = await axios.get<Product[]>(baseUrl + "Product");
      setProducts(productsResponse.data);

      setIsLoaded(true);
    }
    fetchdata();
  }, [products]);

  const handleDelete = async (id) => {
    try {
      const productsResponse = await axios.delete<Product[]>(
        baseUrl + "Product/" + id
      );

      // baseUrl + "Product/" + id
      console.log(productsResponse.data);

      setIsLoaded(true);

      toast.success("Deleted product");
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };
  if (!isLoaded) return <Spinner />;

  return (
    <>
      <div
        id="root"
        className="min-h-100vh flex grow bg-slate-50 dark:bg-navy-900"
      >
        <main className="main-content mail-app w-full px-[var(--margin-x)] pb-6">
          <div className="flex justify-between">
            <p className="ml-0 text-2xl text-indigo-500 mb-8">
              Product Management
            </p>
            <Button
              label="New Product"
              onClick={() => navigate(`/dashboard/addProducts`)}
              type="button"
              variant="success"
            />
          </div>
          <div className="mb-12 flex cursor-pointer flex-row border-b border-zinc-400 p-2.5 font-semibold text-slate-700 hover:bg-slate-100 dark:border-navy-500 dark:text-navy-100 dark:hover:bg-navy-600 sm:flex-row sm:items-left">
            <div className="flex items-left justify-between">
              <div className="flex space-x-2 sm:w-72">
                <div className="flex items-left  space-x-2">
                  <div className="avatar h-6 w-6 pl-12 font-bold text-black">
                    Name
                  </div>
                </div>
              </div>
              <div className="shrink-0 px-1 font-bold text-black text-md ">
                Brand
              </div>
            </div>
            <div className="flex flex-1 items-left font-bold text-black justify-between space-x-2">
              Image
            </div>
            <div className="shrink-0 px-1 mr-8 font-bold text-black ">
              Stock
            </div>
            <div className="hidden px-2font-bold text-black mx-20 sm:flex">
              Price
            </div>
          </div>
          <div className="card ml-0">
            {products.map((item) => (
              <div
                key={item.productId}
                className="flex cursor-pointer flex-row border-b p-2.5 font-semibold text-slate-700 hover:bg-slate-100 dark:border-navy-500 dark:text-navy-100 dark:hover:bg-navy-600 sm:flex-row sm:items-left"
              >
                <div className="flex items-left justify-between">
                  <div className="flex  space-x-2 sm:w-72">
                    <div className="flex items-left  space-x-2">
                      <div className="avatar h-6 w-6 pl-12 text-indigo-700">
                        {item.name}
                      </div>
                    </div>
                  </div>
                  <div className="shrink-0 px-1 text-md ">{item.brand}</div>
                </div>
                <div className="flex flex-1 items-left justify-between space-x-2">
                  <img
                    className="rounded-full ml-24 w-16 "
                    src={item.image}
                    alt="avatar"
                  />
                </div>
                <div className="shrink-0 px-1 mr-8 text-xs ">{item.stock}</div>
                <div className="hidden px-2 text-xs+ mx-20 sm:flex">
                  {item.price}
                </div>
                <div className="mr-6">
                  <NavLink to={`/dashboard/order/${item.productId}`}>
                    <Button label="Details" type="button" variant="primary" />
                  </NavLink>
                </div>
                <Button
                  label="Delete"
                  onClick={() => handleDelete(item.productId)}
                  type="button"
                  variant="delete"
                />
              </div>
            ))}
          </div>
        </main>
      </div>
    </>
  );
}
