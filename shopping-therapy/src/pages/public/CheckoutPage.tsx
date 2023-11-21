import axios from "axios";
//import agent from "../../api/agent";
import useAuth from "../../hooks/useAuth.hook";
import { Cart } from "../../models/Cart";
import LoginWarningPage from "./LoginWarningPage";
import { useEffect, useState } from "react";
import { baseUrl } from "../../api/url.contants";
import Spinner from "../../layout/Spinner";
import { Order } from "../../models/Order";
import agent from "../../api/agent";

export default function CheckoutPage() {
  const { isAuthenticated, user } = useAuth();
  const [order, setOrder] = useState<Order[]>([]);
  const [cart, setCart] = useState<Cart[]>([]);

  const [isLoaded, setIsLoaded] = useState(false);
  const [subtotal, setSubtotal] = useState(0);

  const calculateTotalPrice = () => {
    let totalPrice = 0;

    cart.forEach((cartItem) => {
      totalPrice += cartItem.product.price * cartItem.quantity;
    });

    return totalPrice;
  };

  useEffect(() => {
    async function fetchdata() {
      const response = await axios.get<Cart[]>(baseUrl + "Cart");
      setCart(response.data);
      setSubtotal(calculateTotalPrice());

      setIsLoaded(true);
    }
    fetchdata();
  }, [cart, calculateTotalPrice]);

  // //onclick setorder navigate to thank you

  async function addOrder() {
    console.log(
      cart.map((cartItem) =>
        agent.Order.createOrder(cartItem.cartId, user?.userName)
      )
    );
  }

  if (!isLoaded) return <Spinner />;
  if (isAuthenticated) {
    return (
      <>
        <section className="relative table w-full py-20 lg:py-8 bg-gray-50 dark:bg-slate-800">
          <div className="container relative">
            <div className="grid grid-cols-1 mt-14">
              <h3 className="text-3xl leading-normal font-semibold">
                Checkout
              </h3>
            </div>
          </div>
        </section>

        <section className="relative md:py-4 mb-24  pb-20">
          <div className="container">
            <div className="grid lg:grid-cols-12 md:grid-cols-2 grid-cols-1 gap-[30px]">
              <div className="lg:col-span-8">
                <div className="p-6 rounded-md shadow dark:shadow-gray-800">
                  <h3 className="text-xl leading-normal font-semibold mt-6">
                    Payment
                  </h3>

                  <form action="#">
                    <form>
                      <div className="grid lg:grid-cols-12 grid-cols-1 mt-6 gap-5">
                        <div className="lg:col-span-6">
                          <label className="form-label font-semibold">
                            Account Holder Name :{" "}
                            <span className="text-red-600">*</span>
                          </label>
                          <input
                            type="text"
                            className="form-input w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-gray-500 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0 mt-2"
                            placeholder="Name:"
                            id="accountname"
                            name="name"
                          />
                        </div>

                        <div className="lg:col-span-6">
                          <label className="form-label font-semibold">
                            Credit card number :{" "}
                            <span className="text-red-600">*</span>
                          </label>
                          <input
                            type="text"
                            className="form-input w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-gray-500 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0 mt-2"
                            placeholder="**** **** **** ****"
                            id="cardnumber"
                            name="number"
                          />
                        </div>

                        <div className="lg:col-span-3">
                          <label className="form-label font-semibold">
                            Expiration : <span className="text-red-600">*</span>
                          </label>
                          <input
                            type="number"
                            className="form-input w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-gray-500 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0 mt-2"
                            placeholder="**/****"
                            id="expiration"
                            name="number"
                          />
                        </div>

                        <div className="lg:col-span-3">
                          <label className="form-label font-semibold">
                            CVV : <span className="text-red-600">*</span>
                          </label>
                          <input
                            type="number"
                            className="form-input w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-gray-500 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0 mt-2"
                            placeholder="***"
                            id="cvv"
                            name="number"
                          />
                        </div>
                      </div>
                    </form>
                  </form>
                  <div className="mt-4">
                    <button
                      onClick={addOrder}
                      className="py-2 px-5 inline-block tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md w-full"
                    >
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-4">
                <div className="p-6 rounded-md shadow dark:shadow-gray-800">
                  <div className="flex justify-between items-center">
                    <h5 className="text-lg font-semibold">Your Cart</h5>
                  </div>
                  <div className="mt-4 rounded-md shadow dark:shadow-gray-800">
                    {/* //map */}
                    {cart.map((cartItem) => (
                      <div className="p-3 flex justify-between items-center border border-gray-100 dark:border-gray-800">
                        <div>
                          <h5 className="font-semibold">
                            {cartItem.product.name}
                          </h5>
                          <p className="text-sm text-slate-400">
                            {cartItem.product.brand}
                          </p>
                        </div>

                        <p className="text-slate-400 font-semibold">
                          $ {cartItem.product.price}
                        </p>
                      </div>
                    ))}
                    {/* map */}
                    <div className="p-3 flex justify-between items-center border border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-slate-800 text-green-600">
                      <div>
                        <h5 className="font-semibold">Free Cargo</h5>
                        <p className="text-sm text-green-600">discount</p>
                      </div>

                      <p className="text-red-600 font-semibold">-$ 29.99</p>
                    </div>

                    <div className="p-3 flex justify-between items-center border border-gray-100 dark:border-gray-800">
                      <div>
                        <h5 className="font-semibold">Total (USD)</h5>
                      </div>

                      <p className="font-semibold">$ {subtotal}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  } else {
    return <LoginWarningPage />;
  }
}
