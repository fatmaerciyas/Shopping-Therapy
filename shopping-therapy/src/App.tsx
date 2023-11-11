import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/navbar/Navbar";
import "./index.css";
import PageContainer from "./containers/PageContainer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductDetail from "./components/home/ProductDetail";
import AddProduct from "./components/home/AddProduct";

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
          </Routes>
        </BrowserRouter>
      </PageContainer>
    </>
  );
}

export default App;
