import { useState, useEffect } from "react";
import axios from "axios";
import { Cart } from "../../models/Cart";
import { baseUrl } from "../../api/url.contants";

export default function Products() {
  //   const [products, setProducts] = useState<Cart[]>([]);

  //   useEffect(() => {
  //     async function fetchdata() {
  //       const response = await axios.get<Cart[]>(baseUrl);
  //       setProducts(response.data);
  //       console.log(response.data);
  //     }
  //     fetchdata();
  //   }, [products]);

  //   if (!products) return <p>products are empty</p>;

  //   return <div>{products.buyerId}</div>;

  const [products, setProducts] = useState<Cart>();

  useEffect(() => {
    async function fetchdata() {
      const response = await axios.get<Cart>(baseUrl + "Cart");
      setProducts(response.data);
      console.log(response.data);
    }
    fetchdata();
  }, [products]);

  if (!products) return <p>products are empty</p>;

  return (
    <div>
      {products.items.map((product, index) => {
        return (
          <div key={index}>
            <h2>{product.name}</h2>
          </div>
        );
      })}
    </div>
  );
}
