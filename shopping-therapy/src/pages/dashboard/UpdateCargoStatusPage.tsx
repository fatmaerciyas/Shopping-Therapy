import axios from "axios";
import { useParams } from "react-router-dom";
import { baseUrl } from "../../api/url.contants";
import { Cart } from "../../models/Cart";
import { useEffect, useState } from "react";
import Spinner from "../../layout/Spinner";
import Button from "../../layout/dashboard/Button";
import { toast } from "react-hot-toast";

export default function UpdateCargoStatusPage() {
  const { cartId } = useParams();
  const [isLoaded, setIsLoaded] = useState(false);
  const [cargoType, setCargoType] = useState<Cart[]>([]);
  const [cart, setCart] = useState<Cart[]>([]);
  const [selectedCargoType, setSelectedCargoType] = useState<string>("");
  // const [selectedCargoType, setSelectedCargoType] = useState(() => {
  //   return cart.length > 0 ? cart[0].cargoType : "";
  // });
  useEffect(() => {
    async function fetchdata() {
      //dropdown
      const CargoTypeResponse = await axios.get<Cart[]>(
        baseUrl + "Cart/getCargoTypes"
      );
      setCargoType(CargoTypeResponse.data);
      // all cart information
      const Response = await axios.get<Cart[]>(
        baseUrl + `Cart/getById?id=${cartId}`
      );
      setCart(Response.data);

      if (Response.data.length > 0) {
        setSelectedCargoType(Response.data[0].cargoType);
      }
      setIsLoaded(true);
    }
    fetchdata();
  }, [cartId]);

  // axios.post<Cart[]>(baseUrl + "Cart/carts");
  // Cart/carts?productId=1&quantity=1&CargoTypeId=4
  // export enum CargoEnum {
  //   Getting_ready = " Getting_ready",
  //   Send_by_cargo = "Send_by_cargo",
  //   Set_out = "Set_out",
  //   Distribution = "Distribution",
  //   Delivered = "Delivered",
  // }
  const renderCartOption = (item: Cart) => (
    <option className="text-slate-600" key={item} value={item}>
      {item}
    </option>
  );

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCargoType = event.target.value;
    setSelectedCargoType(selectedCargoType);
    console.log(selectedCargoType);
  };

  const handleUpdateCargoType = (item: Cart) => {
    const cargoTypeId =
      selectedCargoType == "Send_by_cargo"
        ? 1
        : selectedCargoType == "Set_out"
        ? 2
        : selectedCargoType == "Distribution"
        ? 3
        : selectedCargoType == "Delivered"
        ? 4
        : 0;
    console.log(cargoTypeId);

    axios.post<Cart[]>(
      baseUrl +
        `Cart/updateCargoType?productId=${item.productId}&CargoTypeId=${cargoTypeId}`
    );

    toast.success(`Cargo Updates as ${selectedCargoType}`);
  };

  if (!isLoaded) return <Spinner />;

  return (
    <div
      id="root"
      className="min-h-100vh flex grow bg-slate-50 dark:bg-navy-900"
    >
      <main className="main-content mail-app w-full px-[var(--margin-x)] pb-6">
        <div className="flex justify-between">
          <p className="ml-0 text-2xl text-indigo-500 mb-8">
            Product Management
          </p>
        </div>
        <div className="mb-12 flex cursor-pointer flex-row border-b border-zinc-400 p-2.5 font-semibold text-slate-700 hover:bg-slate-100 dark:border-navy-500 dark:text-navy-100 dark:hover:bg-navy-600 sm:flex-row sm:items-left">
          <div className="flex items-left justify-between">
            <div className="flex space-x-2 sm:w-48">
              <div className="flex items-left  space-x-2">
                <div className="avatar h-6 w-6 pl-12 font-bold text-black">
                  Name
                </div>
              </div>
            </div>
            <div className=" px-1 font-bold text-black  x-10 text-md ">
              Brand
            </div>
          </div>
          <div className="flex mx-28 items-left font-bold ml-32 text-black  ">
            Image
          </div>
          <div className="shrink-0 px-1 mr-8 font-bold text-black ">Stock</div>
          <div className="hidden px-2 font-bold text-black mx-20 sm:flex">
            Price
          </div>
          <div className="hidden px-2 font-bold text-black mx-20 sm:flex">
            Cargo State
          </div>
          <div className="hidden px-2 font-bold text-black ml-8 sm:flex">
            Update
          </div>
        </div>
        <div className="card ml-0">
          {cart.map((item) => (
            <div
              key={item.product.productId}
              className="flex cursor-pointer flex-row border-b p-2.5 font-semibold text-slate-700 hover:bg-slate-100 dark:border-navy-500 dark:text-navy-100 dark:hover:bg-navy-600 sm:flex-row sm:items-left"
            >
              <div className="flex items-left justify-between">
                <div className="flex  space-x-2 sm:w-48">
                  <div className="flex items-left  space-x-2">
                    <div className="avatar h-6 w-6 pl-12 text-indigo-700">
                      {item.product.name}
                    </div>
                  </div>
                </div>
                <div className="shrink-0 px-1 text-md ">
                  {item.product.brand}
                </div>
              </div>
              <div className="flex mx-12 items-center  ">
                <img
                  className="rounded-full ml-16 w-16 "
                  src={item.product.image}
                  alt="avatar"
                />
              </div>
              <div className=" px-1 ml-16 mr-10 text-xs ">
                {item.product.stock}
              </div>
              <div className="hidden px-2 text-xs+ mx-20 sm:flex">
                {item.product.price}
              </div>
              <div className="ml-12">
                <select
                  value={selectedCargoType}
                  onChange={handleSelectChange}
                  className="  w-60 py-2 text-slate-600 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-300 rounded-lg outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0"
                >
                  {cargoType.map(renderCartOption)}
                </select>
              </div>
              <div className="ml-12">
                <Button
                  label="Update"
                  onClick={() => handleUpdateCargoType(item)}
                  type="button"
                  variant="success"
                />
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
