import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import ProductDetail from "./Pages/ProductDetail";
import MaxWidthWrapper from "./components/MaxWidthWrapper";

const App = () => {
  return (
    <>
      <MaxWidthWrapper>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetail />} />
        </Routes>
      </MaxWidthWrapper>
    </>
  );
};

export default App;
