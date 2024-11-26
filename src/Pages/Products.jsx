import CardContainer from "../components/CardContainer";

const Products = () => {
  return (
    <div>
      <div className="hero text-center text-gray-800 mt-10 mb-16 md:mt-20 px-6 md:px-32">
        <h1 className="text-7xl font-bold">Explore Our Complete Collection</h1>
        <p className="text-xl my-5">
          Find everything you need, from the latest trends to everyday
          essentials, all in one place.
        </p>
      </div>
      <CardContainer url="https://fakestoreapi.com/products?sort=desc" />
    </div>
  );
};

export default Products;
