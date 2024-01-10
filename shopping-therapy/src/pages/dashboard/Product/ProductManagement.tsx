import { useEffect, useState } from "react";
import { Product } from "../../../models/Product";
import Spinner from "../../../layout/Spinner";
import axios from "axios";
import { baseUrl } from "../../../api/url.contants";
import { NavLink, useNavigate } from "react-router-dom";
import Button from "../../../layout/dashboard/Button";
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
        className="min-h-100vh flex grow pl-20 bg-slate-50  dark:bg-navy-900"
      >
        <main className=" mx-auto py-6 flex-grow">
          <div className="flex justify-between mt-20">
            <p className=" text-2xl text-indigo-500 mb-8">Product Management</p>
            <Button
              label="New Product"
              onClick={() => navigate(`/dashboard/addProducts`)}
              type="button"
              variant="success"
            />
          </div>
          <section className="overflow-x-auto  text-slate-800">
            <table className="w-full table-auto">
              <thead className="border border-b rounded-xl">
                <tr className="bg-slate-100">
                  <th className="py-3 px-4 text-left font-bold">Name</th>
                  <th className="py-3 px-4 text-left font-bold">Brand</th>
                  <th className="py-3 px-4 text-left font-bold">Image</th>
                  <th className="py-3 px-4 text-left font-bold">Stock</th>
                  <th className=" py-3 px-4 text-left font-bold sm:table-cell">
                    Price
                  </th>
                  <th className=" py-3 px-4 text-left font-bold sm:table-cell">
                    Update
                  </th>
                  <th className=" py-3 px-4 text-left font-bold sm:table-cell">
                    Details
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white rounded-lg">
                {products.map((item) => (
                  <tr
                    key={item.productId}
                    className="hover:bg-gray-50 dark:hover:bg-gray-900 transition-all"
                  >
                    <td className="py-3 px-4 text-sm">{item.name}</td>
                    <td className="py-3 px-4 text-sm">{item.brand}</td>
                    <td className="py-3 px-4">
                      <img
                        className="rounded-full w-12 h-12 sm:w-16 sm:h-16"
                        src={item.image}
                        alt="avatar"
                      />
                    </td>
                    <td className="py-3 px-4 text-sm text-center">
                      {item.stock}
                    </td>
                    <td className=" py-3 px-4 text-sm sm:table-cell">
                      {item.price}
                    </td>
                    <td>
                      <div className="mr-6">
                        <NavLink to={`/dashboard/order/${item.productId}`}>
                          <Button
                            label="Details"
                            type="button"
                            variant="primary"
                          />
                        </NavLink>
                      </div>
                    </td>
                    <td>
                      <Button
                        label="Delete"
                        onClick={() => handleDelete(item.productId)}
                        type="button"
                        variant="delete"
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        </main>
      </div>
    </>
  );
}
