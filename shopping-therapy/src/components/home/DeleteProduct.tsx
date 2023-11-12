//import agent from "../../api/agent";
import { useNavigate, useParams } from "react-router-dom";
import agent from "../../api/agent";

export default function DeleteProduct() {
  const redirect = useNavigate();
  const { id } = useParams();

  const handleBackBtnClick = (e) => {
    e.preventDefault();
    redirect("/productlisting");
  };

  const handleDeleteBtnClick = (e) => {
    agent.Product.deleteProduct(Number(id!))
      .then(() => redirect("/"))
      .catch((error) => console.log(error));
  };

  return (
    <div className=" container">
      <h2>Delete this product</h2>
      <h4>Are you sure you wat to delete this product?</h4>
      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button
          type="submit"
          onClick={(e) => handleBackBtnClick(e)}
          className="rounded-md bg-yellow-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-yelow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Back
        </button>
        <button
          type="submit"
          onClick={(e) => handleDeleteBtnClick(e)}
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Yes Delete It!
        </button>
      </div>
    </div>
  );
}
