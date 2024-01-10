import { useEffect, useState } from "react";
import { CargoEnum, Cart } from "../../../models/Cart";
import { baseUrl } from "../../../api/url.contants";
import axios from "axios";
import Spinner from "../../../layout/Spinner";
import Button from "../../../layout/dashboard/Button";
import { NavLink } from "react-router-dom";

// class MyBasket {
//   cartId: number;
//   quantity: number;
//   productId: number;
//   product: any;
//   userName: string;
//   //carts: Cart[];

//   constructor() {
//     this.cartId = 0;
//     this.quantity = 0;
//     this.productId = 0;
//     this.product = null;
//     this.userName = "";
//   }

//   // You can add any other methods here as needed.
// }

export default function CargoManagement() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [cart, setCart] = useState<Cart[]>([]);

  const CargoClassNameCreator = (Roles: string) => {
    let className = "px-3 py-1 w-36 text-center rounded-3xl h-12 ";
    if (Roles.includes(CargoEnum.Getting_ready)) {
      className += "bg-success/10 text-success";
    } else if (Roles.includes(CargoEnum.Send_by_cargo)) {
      className += "bg-primary/10 text-primary";
    } else if (Roles.includes(CargoEnum.Set_out)) {
      className += "bg-info/10 text-info";
    } else if (Roles.includes(CargoEnum.Distribution)) {
      className += " bg-warning/10 text-warning";
    } else if (Roles.includes(CargoEnum.Delivered)) {
      className += " bg-success/10 text-success";
    }
    return className;
  };

  useEffect(() => {
    async function fetchdata() {
      const response = await axios.get<Cart[]>(baseUrl + "Cart/allOrders");
      setCart(response.data);

      setIsLoaded(true);
    }
    fetchdata();
  }, [cart]);

  if (!isLoaded) return <Spinner />;

  return (
    <>
      <div
        id="root"
        className="min-h-100vh flex grow pl-20 bg-slate-50  dark:bg-navy-900"
      >
        <main className=" mx-auto py-6 flex-grow">
          <div className="flex justify-between mt-20">
            <p className=" text-2xl text-indigo-500 mb-8">Cargo Management</p>
          </div>
          <section className="overflow-x-auto text-slate-800">
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
                    Cargo Status
                  </th>
                  <th className=" py-3 px-4 text-left font-bold sm:table-cell">
                    User
                  </th>
                  <th className=" py-3 px-4 text-left font-bold sm:table-cell">
                    Change
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white rounded-lg">
                {cart.map((item) => (
                  <tr
                    key={item.productId}
                    className="hover:bg-gray-50 dark:hover:bg-gray-900 transition-all"
                  >
                    <td className="py-3 px-4 text-sm">{item.product.name}</td>
                    <td className="py-3 px-4 text-sm">{item.product.brand}</td>
                    <td className="py-3 px-4">
                      <img
                        className="rounded-full w-12 h-12 sm:w-16 sm:h-16"
                        src={item.product.image}
                        alt="avatar"
                      />
                    </td>
                    <td className="py-3 px-4 text-sm text-center">
                      {item.product.stock}
                    </td>
                    <td className=" py-3 px-4 text-sm sm:table-cell">
                      {item.product.price}
                    </td>
                    <td>
                      <div className={CargoClassNameCreator(item.cargoType)}>
                        {item.cargoType}
                      </div>
                    </td>
                    <td className=" py-3 px-4 text-sm sm:table-cell">
                      {item.basket.userName}
                    </td>
                    <td className="py-3 px-4">
                      <NavLink to={`/dashboard/update-cargo/${item.cartId}`}>
                        <Button
                          label="Details"
                          type="button"
                          variant="primary"
                        />
                      </NavLink>
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
