//import useAuth from "../../hooks/useAuth.hook";
import axios from "axios";
import { useEffect, useState } from "react";
import { Cart } from "../../models/Cart";
import { baseUrl } from "../../api/url.contants";
import Spinner from "../../layout/Spinner";
//import Button from "../../layout/dashboard/Button";

export default function YourCart() {
  //const { user } = useAuth();

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

  if (!isLoaded) return <Spinner />;
  return (
    <>
      {" "}
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
                  <h5 className="font-semibold">{cartItem.product.name}</h5>
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
    </>
  );
}
