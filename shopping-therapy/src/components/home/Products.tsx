import { useState, useEffect } from "react";
import axios from "axios";
import { Cart } from "../../models/Cart";
import { baseUrl } from "../../api/url.contants";

export default function Products() {
  const [products, setProducts] = useState<Cart>();

  // const redirectToDeletePage = (id: string) => {
  //   redirect(`/delete/${id}`);
  // };

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

            <br />
          </div>
        );
      })}
    </div>
  );
}
