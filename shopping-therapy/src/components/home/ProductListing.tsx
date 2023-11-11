// import axios from "axios";
// import { useDispatch, useSelector } from "react-redux";
// import { useEffect } from "react";
// import { setProduct } from "../../redux/actions/productActions";
import axios from "axios";

import { useEffect, useState } from "react";
import { baseUrl } from "../../api/url.contants";
import { Product } from "../../models/Product";

// export default function ProductListing() {
//   const products = useSelector((state) => state);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     const fetchProducts = async () => {
//       await axios
//         .get("https://localhost:7049/api/Product")
//         .then((response) => {
//           // Assuming that 'response.data' is an array of ProductItem objects
//           dispatch(setProduct(response.data));
//         })
//         .catch((err) => {
//           console.log("Err", err);
//         });
//     };

//     fetchProducts();
//   }, [dispatch]);

//   console.log(products);
//   return (
//     <div>
//       <h1>Product Listing</h1>
//     </div>
//   );
// }

export default function ProductListing() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchdata() {
      const response = await axios.get<Product[]>(baseUrl + "Product");
      setProducts(response.data);
      console.log(response.data);
    }
    fetchdata();
  }, [products]);

  if (!products) return <p>products are empty</p>;

  return (
    <div>
      {products.map((product, index) => {
        return (
          <ul key={Math.random().toString()}>
            <li>product name : {products[index].name}</li>
          </ul>
        );
      })}
      )
    </div>
  );
}
