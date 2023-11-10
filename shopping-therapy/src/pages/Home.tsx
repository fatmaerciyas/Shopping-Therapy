import Categories from "../components/home/Categories";
import Products from "../components/home/Product";
import SliderComp from "../components/home/SliderComp";
import Sorting from "../components/home/Sorting";

export default function Home() {
  return (
    <div>
      <SliderComp />
      <Sorting />
      <div className="flex">
        <Categories />
        <Products />
      </div>
    </div>
  );
}
