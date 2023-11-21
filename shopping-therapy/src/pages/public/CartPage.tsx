import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { Cart } from "../../models/Cart";
import { baseUrl } from "../../api/url.contants";
import Spinner from "../../layout/Spinner";
import agent from "../../api/agent";
import Button from "../../layout/dashboard/Button";
import { PATH_PUBLIC } from "../../router/Routes";
import { useNavigate } from "react-router-dom";

export default function CartPage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [cart, setCart] = useState<Cart[]>([]);
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

  async function deleteData(productId: number, { quantity = 1 }) {
    setIsLoaded(false);
    try {
      return agent.Cart.deleteCart(productId, quantity);
    } catch (err) {
      console.log(err);
    }
    setIsLoaded(true);
  }

  async function addData(productId: number, { quantity = 1 }) {
    try {
      return agent.Cart.createCart(productId, quantity);
    } catch (err) {
      console.log(err);
    }
  }

  const decrement = useCallback((cartItem: Cart) => {
    console.log("azalt");
    if (cartItem.quantity > 0) {
      deleteData(cartItem.productId, cartItem.quantity);
      setSubtotal(cartItem.product.price * cartItem.quantity);
    }
  }, []);

  const increment = useCallback((cartItem: Cart) => {
    console.log("arttır");

    addData(cartItem.productId, cartItem.quantity);
    setSubtotal(cartItem.product.price * cartItem.quantity);
  }, []);

  const navigate = useNavigate();

  const handleClick = (url: string) => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    navigate(url);
  };

  if (!isLoaded) return <Spinner />;
  return (
    <>
      <section className="relative table w-full py-8 lg:py-24 bg-gray-50 dark:bg-slate-800">
        <img
          src="../../assets/images/glasses.jpg"
          className="w-full object-cover max-h-96 object-top-bottom "
        />
        <div className="container absolute top-40 left-20">
          <div className="grid grid-cols-1 mt-14">
            <h3 className="text-3xl leading-normal font-semibold">Cart</h3>
          </div>

          <div className="relative mt-3">
            <ul className="tracking-[0.5px] mb-0 inline-block">
              <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out hover:text-indigo-600">
                <p className="text-white">Buy whatever you want :)</p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="relative md:py-8 py-4 pb-24">
        <div className="container">
          <div className="grid lg:grid-cols-1">
            <div className="relative overflow-x-auto shadow dark:shadow-gray-800 rounded-md">
              <table className="w-full text-start">
                <thead className="text-sm uppercase bg-slate-50 dark:bg-slate-800">
                  <tr>
                    <th scope="col" className="p-4 w-4"></th>
                    <th scope="col" className="text-start p-4 min-w-[50px]">
                      Product
                    </th>
                    <th scope="col" className="text-start p-4 min-w-[120px]">
                      Brand
                    </th>
                    <th scope="col" className="p-4 w-24 min-w-[180px]">
                      Price
                    </th>
                    <th scope="col" className="p-4 w-56 min-w-[220px]">
                      Quantity
                    </th>
                    <th scope="col" className="p-4 w-24 min-w-[100px]">
                      Total($)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {cart.map((cartItem) => (
                    <tr className="bg-white dark:bg-slate-900 border-t border-gray-100 dark:border-gray-800">
                      <td className="p-4">
                        <a href="#">
                          <i className="mdi mdi-window-close text-red-600"></i>
                        </a>
                      </td>
                      <td className="p-4">
                        <span className="flex items-center">
                          <img
                            src={cartItem.product.image}
                            className="rounded shadow dark:shadow-gray-800 w-12"
                            alt=""
                          />
                          <span className="ms-3">
                            <span className="block font-semibold">
                              {cartItem.product.name}
                            </span>
                          </span>
                        </span>
                      </td>
                      <td className="p-4 "> {cartItem.product.brand}</td>
                      <td className="p-4 text-center">
                        $ {cartItem.product.price}
                      </td>
                      <td className="p-4 text-center">
                        <div className="grid  gap-[30px] mt-4">
                          <div className="justify-between">
                            <button
                              onClick={() => decrement(cartItem)}
                              className="h-9 w-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-md bg-indigo-600/5 hover:bg-indigo-600 border border-indigo-600/10 hover:border-indigo-600 text-indigo-600 hover:text-white minus"
                            >
                              -
                            </button>
                            <input
                              type="text"
                              value={cartItem.quantity}
                              className="h-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-md bg-indigo-600/5 hover:bg-indigo-600 border border-indigo-600/10 hover:border-indigo-600 text-indigo-600 hover:text-white pointer-events-none w-16 ps-4 quantity"
                            />

                            <button
                              onClick={() => increment(cartItem)}
                              className="h-9 w-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-md bg-indigo-600/5 hover:bg-indigo-600 border border-indigo-600/10 hover:border-indigo-600 text-indigo-600 hover:text-white plus"
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </td>
                      <td className="p-4 text-end">
                        $ {cartItem.quantity * cartItem.product.price}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="grid lg:grid-cols-12 md:grid-cols-2 grid-cols-1 mt-6 gap-6">
              <div className="lg:col-span-9 text-justify items-center">
                <Button
                  label="Buy Now"
                  onClick={() => handleClick(PATH_PUBLIC.checkout)}
                  type="button"
                  variant="primary"
                />
              </div>

              <div className="lg:col-span-3 md:order-2 order-1">
                <ul className="list-none shadow dark:shadow-gray-800 rounded-md">
                  <li className="flex justify-between p-4">
                    <span className="font-semibold text-lg">Subtotal :</span>
                    <span className="text-slate-400">$ {subtotal}</span>
                  </li>
                  <li className="flex justify-between p-4 border-t border-gray-100 dark:border-gray-800">
                    <span className="font-semibold text-lg">Cargo :</span>
                    <span className="text-slate-400">$ 29.99</span>
                  </li>
                  <li className="flex justify-between font-semibold p-4 border-t border-gray-200 dark:border-gray-600">
                    <span className="font-semibold text-lg">Total :</span>
                    <span className="font-semibold">$ {subtotal + 29}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
