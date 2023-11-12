// import axios from "axios";
// import { useDispatch, useSelector } from "react-redux";
// import { useEffect } from "react";
// import { setProduct } from "../../redux/actions/productActions";
import axios from "axios";

import { useEffect, useState } from "react";
import { baseUrl } from "../../api/url.contants";
import { Product } from "../../models/Product";
import { useNavigate } from "react-router-dom";

export default function ProductListing() {
  const [products, setProducts] = useState<Product[]>([]);
  const redirect = useNavigate();

  useEffect(() => {
    async function fetchdata() {
      const response = await axios.get<Product[]>(baseUrl + "Product");
      setProducts(response.data);
      console.log(response.data);
    }
    fetchdata();
  }, [products]);

  const redirectToEditPage = (id: string) => {
    redirect(`/edit/${id}`);
  };

  const redirectToDeletePage = (id: string) => {
    redirect(`/delete/${id}`);
  };

  if (!products) return <p>products are empty</p>;

  return (
    <div>
      {products.map((product) => {
        if (!product) {
          return null;
        }

        const { name, productId } = product;

        return (
          <ul key={productId}>
            <li>product name : {name}</li>
            <button onClick={() => redirectToEditPage(productId!.toString())}>
              Edit
            </button>
            <br />
            <button onClick={() => redirectToDeletePage(productId!.toString())}>
              Delete
            </button>
          </ul>
        );
      })}
      )
    </div>
  );
}
