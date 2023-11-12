import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/navbar/Navbar";
import "./index.css";
import PageContainer from "./containers/PageContainer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductDetail from "./components/home/ProductDetail";
import AddProduct from "./components/home/AddProduct";
import EditProduct from "./components/home/EditProduct";
import DeleteProduct from "./components/home/DeleteProduct";

function App() {
  return (
    <>
      <PageContainer>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:productId" element={<ProductDetail />} />
            <Route path="/add" element={<AddProduct />} />
            <Route path="/edit/:id" element={<EditProduct />} />
            <Route path="/delete/:id" element={<DeleteProduct />} />
          </Routes>
        </BrowserRouter>
      </PageContainer>
    </>
  );
}

export default App;
