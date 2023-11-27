import Spinner from "../../layout/Spinner";
import { useEffect, useState } from "react";
//import moment from "moment";
//import { NavLink } from "react-router-dom";
import { Basket, IBasket } from "../../models/Basket";
import useAuth from "../../hooks/useAuth.hook";
import axios from "axios";
import { baseUrl } from "../../api/url.contants";
import { NavLink } from "react-router-dom";
import { Cart } from "../../models/Cart";

export default function Order() {
  const [basket, setBasket] = useState<Basket[]>([]);
  const [cart, setCart] = useState<Cart[]>([]);
  const [item, setItem] = useState<Cart[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const { user } = useAuth();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${baseUrl}Basket/getbyuser?username=${user?.userName}`)
      .then((response) => setBasket(response.data));

    axios
      .get(`${baseUrl}Cart/orders?username=${user?.userName}`)
      .then((response) => setCart(response.data));

    basket.forEach((basketItem) => {
      cart.forEach((cartItem) => {
        if (basketItem.basketId == cartItem.basketId) {
          setCart((prevCart) => [
            ...prevCart,
            { ...cartItem, newProp: "new value" },
          ]);
        }
      });
    });

    setLoading(false);
  }, [user]);

  if (loading) {
    return (
      <div className="w-full">
        <Spinner />
      </div>
    );
  }

  return (
    <>
      <div
        id="root"
        className="min-h-100vh flex grow bg-slate-50 dark:bg-navy-900"
      >
        <main className="main-content mail-app w-full px-[var(--margin-x)] pb-6">
          <div className="flex">
            <p className="ml-0 text-2xl my-4">Inbox</p>
          </div>
          <div className="card ml-0">
            {cart.map((item) => (
              <NavLink to={`/dashboard/order/${item.productId}`}>
                <div
                  key={item.basketId}
                  className="flex cursor-pointer flex-row border-b p-2.5 font-semibold text-slate-700 hover:bg-slate-100 dark:border-navy-500 dark:text-navy-100 dark:hover:bg-navy-600 sm:flex-row sm:items-left"
                >
                  <div className="flex items-left justify-between">
                    <div className="flex space-x-2 sm:w-72">
                      <div className="flex">
                        <label
                          className="flex h-8 w-8 items-left justify-center"
                          x-tooltip="'Select'"
                        >
                          <input
                            className="form-checkbox is-outline h-4.5 w-4.5 rounded border-slate-400/70 before:bg-primary checked:border-primary hover:border-primary focus:border-primary dark:border-navy-400 dark:before:bg-accent dark:checked:border-accent dark:hover:border-accent dark:focus:border-accent"
                            type="checkbox"
                          />
                        </label>
                        <button
                          x-tooltip="'Starred'"
                          className="btn hidden h-8 w-8 rounded-full p-0 text-slate-400 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:text-navy-300 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25 sm:inline-flex"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            stroke-width="1.5"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                            />
                          </svg>
                        </button>
                        <button
                          x-tooltip="'Actions'"
                          className="btn hidden h-8 w-8 rounded-full p-0 text-slate-400 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:text-navy-300 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25 sm:inline-flex"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            stroke-width="1.5"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                            />
                          </svg>
                        </button>
                      </div>
                      <div className="flex items-left space-x-2">
                        <div className="avatar h-6 w-6  text-indigo-700">
                          {item.product.name}
                        </div>
                      </div>
                    </div>
                    <div className="shrink-0 px-1 text-xs ">
                      {item.product.brand}
                    </div>
                  </div>
                  <div className="flex flex-1 items-left justify-between space-x-2">
                    <img
                      className="rounded-full ml-24 w-20 "
                      src={item.product.image}
                      alt="avatar"
                    />
                    <div className="flex sm:hidden">
                      <button
                        x-tooltip="'Starred'"
                        className="btn h-8 w-8 rounded-full p-0 text-slate-400 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:text-navy-300 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          stroke-width="1.5"
                          className="h-5 w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                          />
                        </svg>
                      </button>
                      <button
                        x-tooltip="'Actions'"
                        className="btn h-8 w-8 rounded-full p-0 text-slate-400 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:text-navy-300 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          stroke-width="1.5"
                          className="h-5 w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className="shrink-0 px-1 mr-8 text-xs ">
                    {item.product.quantity}
                  </div>
                  <div className="hidden px-2 text-xs+ mx-20 sm:flex">
                    {item.product.price}
                  </div>
                </div>
              </NavLink>
            ))}
          </div>
        </main>
      </div>
    </>
  );
}
