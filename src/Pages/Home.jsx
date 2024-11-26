import { Link } from "react-router-dom";
import CardContainer from "../components/CardContainer";
import MaxWidthWrapper from "../components/MaxWidthWrapper";
import Navbar from "../components/navbar";

const Home = () => {
  return (
    <>
      <div className="hero text-center text-gray-800 mt-10 mb-16 md:mt-20 px-6 md:px-32">
        <h1 className="text-7xl font-bold">
          Shop. Save. <br />
          Smile.
        </h1>
        <p className="text-xl my-5">
          Find your perfect products with just a few clicks. <br /> We bring
          convenience and quality right to your doorstep!
        </p>
        <Link
          to={"/products"}
          className="px-6 py-1 text-lg font-semibold border-2 border-blue-500 text-blue-500 rounded-sm bg-transparent transition-all duration-300 ease-in-out hover:bg-blue-500 hover:text-white focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-offset-2"
        >
          Explore All Products
        </Link>
      </div>

      <CardContainer
        title="Top trending products"
        url="https://fakestoreapi.com/products?limit=4"
      />

      <CardContainer
        title="Top Selling Products"
        url="https://fakestoreapi.com/products?limit=8&sort=desc"
      />
    </>
  );
};

export default Home;
