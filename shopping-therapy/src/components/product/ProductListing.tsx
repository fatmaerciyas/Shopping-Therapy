import { useEffect, useState } from "react";
import { Product } from "../../models/Product";
//import { useNavigate } from "react-router-dom";
import ProductItem from "../product/ProductItem";
import ReactPaginate from "react-paginate";
import Sorting from "./Sorting";

interface ProductItems {
  products: Product[];
  setSort: React.Dispatch<React.SetStateAction<string>>;
  sort: string;
  gridState: string;
}

export default function ProductListing({
  gridState,
  products,
  setSort,
  sort,
}: ProductItems) {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  const [itemOffset, setItemOffset] = useState(0);

  const ItemsPerPage = 9;

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
    setFilteredProducts(products);
    console.log(products);
  }, [products]);

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
        <Sorting setSort={setSort} />
      </div>

      {products.length != 0 ? (
        <>
          <div className={`${gridState}`}>
            {currentItems
              .sort((a, b) =>
                sort == "inc"
                  ? a.price - b.price
                  : sort == "dec"
                  ? b.price - a.price
                  : 0
              )
              .map((product) => {
                if (!product) {
                  console.log(`product is: :${product}`);
                  return null;
                }

                // const { productId } = product;

                return (
                  <>
                    <ProductItem key={product.productId} product={product} />
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
        </>
      ) : (
        <p className="text-white m-auto text-lg mt-20 ">
          There are no products in this category yet 👉👈😅
        </p>
      )}
    </div>
  );
}
