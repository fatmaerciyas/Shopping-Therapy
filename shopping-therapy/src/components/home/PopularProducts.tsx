import { useEffect, useState } from "react";
import { Product } from "../../models/Product";
//import { useNavigate } from "react-router-dom";
import ProductItem from "../product/ProductItem";
import ReactPaginate from "react-paginate";

interface ProductItems {
  products: Product[];
  setSort: React.Dispatch<React.SetStateAction<string>>;
  sort: string;
}

export default function PopularProducts({ products }: ProductItems) {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  const [itemOffset, setItemOffset] = useState(0);

  const ItemsPerPage = 9;

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + ItemsPerPage;

  const currentItems = filteredProducts.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(filteredProducts.length / ItemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * ItemsPerPage) % filteredProducts.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  // const redirect = useNavigate();

  useEffect(() => {
    if (products) {
      setFilteredProducts(products);
    }
  }, [products, filteredProducts]);

  // const redirectToEditPage = (id: string) => {
  //   redirect(`/edit/${id}`);
  // };

  // const redirectToDeletePage = (id: string) => {
  //   redirect(`/delete/${id}`);
  // };

  return (
    <div className="lg:col-span-8 md:col-span-6">
      <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
        <div className="lg:col-span-9 md:col-span-8">
          <h3 className="text-xl leading-normal font-semibold"></h3>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-8 gap-12">
        {currentItems.map((product) => {
          if (!product) {
            console.log(`product is: :${product}`);
            return null;
          }

          const { productId } = product;

          return (
            <>
              <ProductItem product={product} key={productId} />
              {/* <button onClick={() => redirectToEditPage(productId!.toString())}>
              Edit
            </button>
            <br />
            <button onClick={() => redirectToDeletePage(productId!.toString())}>
              Delete
            </button> */}
            </>
          );
        })}
      </div>

      <div className="grid md:grid-cols-12 grid-cols-1 mt-8">
        <div className="md:col-span-12 text-center justify-center">
          <ReactPaginate
            className="paginate"
            breakLabel="..."
            nextLabel=">"
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel="<"
            renderOnZeroPageCount={null}
          />
        </div>
      </div>
    </div>
  );
}
