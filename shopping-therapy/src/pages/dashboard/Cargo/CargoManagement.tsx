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
        className="min-h-100vh flex grow bg-slate-50 dark:bg-navy-900"
      >
        <main className="main-content mail-app w-full px-[var(--margin-x)] pb-6">
          <div className="flex justify-between">
            <p className="ml-0 text-2xl text-indigo-500 mb-8">
              Cargo Management
            </p>
          </div>
          <div className="mb-12 flex cursor-pointer flex-row border-b border-zinc-400 p-2.5 font-semibold text-slate-700 hover:bg-slate-100 dark:border-navy-500 dark:text-navy-100 dark:hover:bg-navy-600 sm:flex-row sm:items-left">
            <div className="flex items-left justify-between">
              <div className="flex space-x-2 sm:w-36">
                <div className="flex items-left  space-x-2">
                  <div className="avatar h-6 w-6 pl-12 font-bold text-black">
                    Name
                  </div>
                </div>
              </div>
              <div className="font-bold mx-20 text-black text-md ">Brand</div>
            </div>
            <div className="flex flex-1 mx-12 items-left font-bold text-black ">
              Image
            </div>
            <div className="shrink-0 px-1  mx-10 font-bold text-black ">
              Stock
            </div>
            <div className="hidden px-2 font-bold text-black  mx-12 sm:flex">
              Price
            </div>
            <div className="hidden px-2 font-bold text-black  mx-12 sm:flex">
              Cargo Status
            </div>
            <div className="hidden px-2 font-bold text-black  mx-12 sm:flex">
              User
            </div>
            <div className="hidden px-2 font-bold text-black  mx-20 sm:flex">
              Change
            </div>
          </div>
          <div className="card ml-0">
            {cart.map((item) => (
              <div
                key={item.productId}
                className="flex cursor-pointer flex-row border-b p-2.5 font-semibold text-slate-700 hover:bg-slate-100 dark:border-navy-500 dark:text-navy-100 dark:hover:bg-navy-600 sm:flex-row sm:items-left"
              >
                <div className="flex items-left justify-between">
                  <div className="flex  space-x-2 sm:w-56">
                    <div className="flex items-left  space-x-2">
                      <div className="avatar h-6 w-6 pl-12 text-indigo-700">
                        {item.product.name}
                      </div>
                    </div>
                  </div>
                  <div className="shrink-0 w-18 text-md ">
                    {item.product.brand}
                  </div>
                </div>
                <div className="flex items-left ">
                  <img
                    className="rounded-full mx-20 w-16 "
                    src={item.product.image}
                    alt="avatar"
                  />
                </div>
                <div className="shrink-0 px-1 mr-8 text-xs text-center items-center ">
                  {item.product.stock}
                </div>
                <div className="hidden px-2 mx-20 text-xs+ ml-20 sm:flex">
                  {item.product.price}
                </div>
                <div className={CargoClassNameCreator(item.cargoType)}>
                  {item.cargoType}
                </div>
                <div className="hidden px-2 ml-16 w-12  mr-20 sm:flex">
                  {item.basket.userName}
                </div>

                <div className="mr-6">
                  <NavLink to={`/dashboard/update-cargo/${item.cartId}`}>
                    <Button label="Details" type="button" variant="primary" />
                  </NavLink>
                </div>
                {/* <Button
                  label="Delete"
                  onClick={() => handleDelete(item.productId)}
                  type="button"
                  variant="delete"
                /> */}
              </div>
            ))}
          </div>
        </main>
      </div>
    </>
  );
}
