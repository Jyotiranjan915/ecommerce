import Skeleton from "react-loading-skeleton";
import useGetData from "../hooks/useGetData";
import Card from "./Card";
import { Link } from "react-router-dom";

const CardContainer = ({ title, url }) => {
  const { data: products, loading, error } = useGetData(url);

  if (loading)
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        <Skeleton className="w-full h-80" count={4} />
      </div>
    );

  if (error) return console.log(error);

  return (
    <div className="py-10 mb-10">
      {title && (
        <h2 className="text-2xl font-semibold uppercase tracking-widest mb-10">
          {title}
        </h2>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {products?.map((product) => {
          return (
            <Link key={product.id} to={`/products/${product.id}`}>
              <Card {...product} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default CardContainer;
