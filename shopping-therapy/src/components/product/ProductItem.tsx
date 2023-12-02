import { NavLink, useNavigate } from "react-router-dom";
import { Product } from "../../models/Product";
import agent from "../../api/agent";
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";

interface ProductItemProps {
  product: Product;
}

export default function ProductItem({ product }: ProductItemProps) {
  const navigate = useNavigate();

  const addCartItemAsync = ({ productId, quantity = 1 }) => {
    try {
      return agent.Cart.createCart(productId, quantity);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div
      onClick={() => navigate(`/catalog/${product.productId}`)}
      className="group "
    >
      <div className="relative overflow-hidden shadow dark:shadow-gray-800 group-hover:shadow-xl group-hover:scale-110 duration-500 group-hover:dark:shadow-gray-800 rounded-md ">
        <img src={product.image} alt="" />

        <div className="absolute -bottom-20 group-hover:bottom-3 start-3 end-3 duration-500">
          <NavLink
            to={"/cart"}
            className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-slate-900 border-slate-900 text-white w-full rounded-md"
            onClick={() => addCartItemAsync({ productId: product.productId! })}
          >
            Add to Cart
          </NavLink>
        </div>

        <ul className="list-none absolute top-[10px] end-4 opacity-0 group-hover:opacity-100 duration-500">
          <li>
            <a
              href="javascript:void(0)"
              className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white"
            >
              <AiOutlineHeart />
            </a>
          </li>
          <li className="mt-1">
            <a
              href="shop-item-detail.html"
              className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white"
            >
              <AiOutlineEye />
            </a>
          </li>
          <li className="mt-1">
            <a
              href="javascript:void(0)"
              className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white"
            >
              <AiOutlineShoppingCart />
            </a>
          </li>
        </ul>

        <ul className="list-none absolute top-[10px] start-4">
          <li>
            <a
              href="javascript:void(0)"
              className="bg-orange-600 text-white text-[10px] font-bold px-2.5 py-0.5 rounded h-5"
            >
              New
            </a>
          </li>
        </ul>
      </div>

      <div className="mt-4">
        <a className="hover:text-purple-300 duration-500 text-xl text-center font-semibold">
          {product.name}
        </a>
        <div className="flex justify-between items-center mt-1">
          <p className="text-green-600 text-xl">${product.price}</p>
          <del className="text-red-600 ml-4"> ${product.price + 12}</del>
        </div>
      </div>
    </div>
  );
}
