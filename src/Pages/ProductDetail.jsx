import { useParams } from "react-router-dom";
import CardContainer from "../components/CardContainer";
import Rating from "../components/Rating";
import useGetData from "../hooks/useGetData";
import Skeleton from "react-loading-skeleton";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const ProductDetail = () => {
  const { id } = useParams();
  const { data: product, loading } = useGetData(
    `https://fakestoreapi.com/products/${id}`
  );

  const { dispatch } = useContext(CartContext);

  if (loading) {
    return (
      <div className="flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="relative w-full lg:w-[50%] h-96 bg-gray-100 p-10 rounded-md flex items-center justify-center">
          <Skeleton className="w-full h-[70%]" />
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="w-full h-96 flex items-center justify-center text-gray-800">
        <p className="text-3xl font-medium">No Product with id: {id}</p>
      </div>
    );
  }

  const handleAddToCart = () => {
    dispatch({ type: "add", payload: { ...product, count: 0 } });
  };

  return (
    <div className="my-5 text-gray-800 text-center md:text-left">
      <div className="flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="relative w-full lg:w-[50%] h-96 bg-gray-100 p-10 rounded-md flex items-center justify-center">
          <img
            src={product?.image}
            alt={product?.title}
            className="w-full h-[100%] object-contain mix-blend-multiply bg-transparent"
          />
        </div>

        <div className="px-5 w-full lg:w-[50%]">
          <h1 className="text-3xl font-medium mb-3 md:mb-5">
            {product?.title}
          </h1>
          <p className="text-sm text-gray-500 mb-3 md:mb-5">
            {product?.description}
          </p>

          <Rating
            rating={product?.rating?.rate}
            reviewCount={product?.rating?.count}
          />

          <div className="border-y-[1px] border-gray-200 my-3 md:my-5 py-2">
            <h2 className="text-2xl font-extrabold">
              ${product?.price}/- only
            </h2>
            <p className="text-sm text-gray-500">
              order now, it will be delivered to you fastest.
            </p>
          </div>

          <button
            onClick={handleAddToCart}
            className="px-6 py-1 text-lg font-semibold border-2 border-blue-500 text-blue-500 rounded-sm bg-transparent transition-all duration-300 ease-in-out hover:bg-blue-500 hover:text-white focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-offset-2"
          >
            Add to Cart
          </button>
        </div>
      </div>

      {product && (
        <CardContainer
          title="Top related products"
          url={`https://fakestoreapi.com/products/category/${product?.category}?limit=4`}
        />
      )}
    </div>
  );
};

export default ProductDetail;
