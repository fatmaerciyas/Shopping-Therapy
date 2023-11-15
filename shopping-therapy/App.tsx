import "./src/index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import GlobalRouter from "./src/router";
import { Toaster } from "react-hot-toast";

// import Header from "./src/layout/Header";
// import Footer from "./src/layout/Footer";
// import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <GlobalRouter />
      <Toaster />
    </>
  );
}

export default App;
