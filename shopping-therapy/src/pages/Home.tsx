import Categories from "../components/home/Categories";
import ProductListing from "../components/home/ProductListing";
import Products from "../components/home/Products";

import SliderComp from "../components/home/SliderComp";
import Sorting from "../components/home/Sorting";

export default function Home() {
  return (
    <div>
      <SliderComp />
      <Sorting />
      <div className="flex">
        <Categories />
      </div>
      <Products />
      <br />
      <ProductListing />
    </div>
  );
}
