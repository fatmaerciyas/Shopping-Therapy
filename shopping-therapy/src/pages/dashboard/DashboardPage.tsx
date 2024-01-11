import { useEffect, useState } from "react";
import { Basket } from "../../models/Basket";
import { CargoEnum, Cart } from "../../models/Cart";
import useAuth from "../../hooks/useAuth.hook";
import { baseUrl } from "../../api/url.contants";
import axios from "axios";
import { MY_INBOX_MESSAGE_URL } from "../../api/globalConfig";
import { IMessageDto } from "../../models/Message";
import axiosInstance from "../../api/axiosInstance";
import toast from "react-hot-toast";
import { NavLink } from "react-router-dom";
import Button from "../../layout/dashboard/Button";
import moment from "moment";
import ProductListing from "../../components/product/ProductListing";
import { Product } from "../../models/Product";

const DashboardPage = () => {
  const [basket, setBasket] = useState<Basket[]>([]);
  const [cart, setCart] = useState<Cart[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [products, setProducts] = useState<Product[]>([]);
  const [sort, setSort] = useState("");

  const [messages, setMessages] = useState<IMessageDto[]>([]);
  const { user } = useAuth();

  const getMyMessages = async () => {
    try {
      setLoading(true);
      const response = await axiosInstance.get<IMessageDto[]>(
        MY_INBOX_MESSAGE_URL
      );
      const { data } = response;
      setMessages(data);
      console.log(data);
      setLoading(true);
    } catch (error) {
      toast.error("An Error happened. Please Contact admins");
      setLoading(true);
    }
  };

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${baseUrl}Basket/getbyuser?username=${user?.userName}`)
      .then((response) => setBasket(response.data));

    axios
      .get(`${baseUrl}Cart/orders?username=${user?.userName}`)
      .then((response) => setCart(response.data));

    axios
      .get<Product[]>(baseUrl + "Product")
      .then((response) => setProducts(response.data));

    getMyMessages();

    setLoading(true);

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

  return (
    <div id="root" className="min-h-screen ">
      <div className="min-h-100vh w-full px-36 pt-20 bg-white py-12">
        <h1 className="text-3xl font-semibold text-slate-600 text-center mb-8">
          Dashboard
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <NavLink to={"/dashboard/inbox"}>
            <div className="bg-white shadow-md rounded-lg p-8">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold text-gray-800">
                  My Messages
                </h2>
                <span className="bg-blue-500 text-slate-800 rounded-full px-3 py-1 text-sm">
                  {messages.length}
                </span>
              </div>
            </div>
          </NavLink>

          <NavLink to={"/dashboard/order"}>
            <div className="bg-white shadow-md rounded-lg p-8">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold text-gray-800">
                  My Orders
                </h2>
                <span className="bg-green-500 text-slate-800 rounded-full px-3 py-1 text-sm">
                  {cart.length}
                </span>
              </div>
            </div>
          </NavLink>

          <NavLink to={"/dashboard/cargo"}>
            <div className="bg-white shadow-md rounded-lg p-8">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold text-gray-800">
                  Check My Cargos
                </h2>
                <span className="bg-red-500 text-slate-800 rounded-full px-3 py-1 text-sm">
                  {cart.map((item) =>
                    item.cargoType.includes(CargoEnum.Delivered) ? (
                      <p>0</p>
                    ) : (
                      <p>{item.cargoType}</p>
                    )
                  )}
                </span>
              </div>
            </div>
          </NavLink>

          <NavLink to={"/dashboard/create-message"}>
            <div className="bg-white shadow-md rounded-lg p-8">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold text-gray-800">
                  Create a Message
                </h2>
                <span className="bg-yellow-500 text-slate-800 rounded-full px-3 py-1 text-sm">
                  New
                </span>
              </div>
            </div>
          </NavLink>
        </div>
        <div className="flex flex-row gap-6">
          <div className="mt-12 w-1/2">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Recent Orders
            </h2>
            <table className="w-full table-auto">
              <thead className="bg-slate-200 text-gray-700">
                <tr className="border border-b rounded-t-xl">
                  <th className="py-3 px-4 text-left font-bold">Name</th>
                  <th className="py-3 px-4 text-left font-bold">Brand</th>
                  <th className="py-3 px-4 text-left font-bold">Image</th>
                  <th className="py-3 px-4 text-left font-bold">Quantity</th>
                  <th className="py-3 px-4 text-left font-bold">Price</th>
                  <th className="py-3 px-4 text-left font-bold">Details</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y text-gray-700 divide-gray-200 rounded-b-lg">
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
                    <td className="py-3 px-4 text-sm text-left">
                      {item.product.quantity}
                    </td>
                    <td className="py-3 px-4 text-sm">{item.product.price}</td>
                    <td className="py-3 px-4">
                      <NavLink to={`/dashboard/order/${item.productId}`}>
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
          </div>
          <div className="mt-12 w-1/2">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Latest Messages
            </h2>
            <table className="w-full table-auto">
              <thead className=" bg-rose-100 text-gray-700">
                <tr className="border border-b rounded-t-xl">
                  <th className="py-3 px-4 text-left font-bold">Subject</th>
                  <th className="py-3 px-4 text-left font-bold">Sender</th>
                  <th className="py-3 px-4 text-left font-bold">Details</th>
                  <th className="py-3 px-4 text-left font-bold">Time</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y text-gray-700 divide-gray-200 rounded-b-lg">
                {messages.map((item) => (
                  <tr
                    key={item.messageId}
                    className="hover:bg-gray-50 dark:hover:bg-gray-900 transition-all"
                  >
                    <td className="py-3 px-4 text-sm">{item.subject}</td>
                    <td className="py-3 px-4 text-sm">{item.sender}</td>

                    <td className="py-3 px-4 text-sm text-left">
                      {item.details}
                    </td>
                    <td className="py-3 px-4 text-sm">
                      {" "}
                      {moment(item.createdAt).fromNow()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Check it out last products 😊
          </h2>
          <ProductListing
            products={products}
            setSort={setSort}
            sort={sort}
            gridState="grid lg:grid-cols-6 md:grid-cols-4 grid-cols-1 mt-8 gap-12"
          />
        </div>
        {/* <table className="w-full">
            <thead className=" bg-orange-200">
              <tr className="table-header">
                <th className="py-2 px-4 text-left">Product</th>
                <th className="py-2 px-4 text-left">Price</th>
                <th className="py-2 px-4 text-left">Quantity</th>
                <th className="py-2 px-4 text-left">Total</th>
              </tr>
            </thead>
            <tbody>
              <tr className="table-row">
                <td className="py-2 px-4 border-b">
                  <div className="flex items-center">
                    <img
                      src="https://via.placeholder.com/50x50"
                      alt="Product"
                      className="w-12 h-12 rounded-md mr-4"
                    />
                    <div>
                      <p className="font-semibold">Product 1</p>
                      <p className="text-gray-600">SKU-001</p>
                    </div>
                  </div>
                </td>
                <td className="py-2 px-4 border-b">$10</td>
                <td className="py-2 px-4 border-b">2</td>
                <td className="py-2 px-4 border-b">$20</td>
              </tr>
              <tr className="table-row">
                <td className="py-2 px-4 border-b">
                  <div className="flex items-center">
                    <img
                      src="https://via.placeholder.com/50x50"
                      alt="Product"
                      className="w-12 h-12 rounded-md mr-4"
                    />
                    <div>
                      <p className="font-semibold">Product 2</p>
                      <p className="text-gray-600">SKU-002</p>
                    </div>
                  </div>
                </td>
                <td className="py-2 px-4 border-b">$20</td>
                <td className="py-2 px-4 border-b">3</td>
                <td className="py-2 px-4 border-b">$60</td>
              </tr>
              <tr className="table-row">
                <td className="py-2 px-4 border-b">
                  <div className="flex items-center">
                    <img
                      src="https://via.placeholder.com/50x50"
                      alt="Product"
                      className="w-12 h-12 rounded-md mr-4"
                    />
                    <div>
                      <p className="font-semibold">Product 3</p>
                      <p className="text-gray-600">SKU-003</p>
                    </div>
                  </div>
                </td>
                <td className="py-2 px-4 border-b">$30</td>
                <td className="py-2 px-4 border-b">1</td>
                <td className="py-2 px-4 border-b">$30</td>
              </tr>
            </tbody>
          </table> */}
      </div>
    </div>
  );
};

export default DashboardPage;
