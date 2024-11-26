import { truncateText } from "../utils";
import Rating from "./Rating";

const Card = ({ title, price, image, rating }) => {
  return (
    <div className="w-full">
      <div className="w-full h-72 bg-gray-100 p-10 rounded-md flex items-center justify-center">
        <img
          src={image}
          alt={title}
          className="w-[50%] sm:w-[60%] md:w-[80%] object-contain mix-blend-multiply bg-transparent"
        />
      </div>

      <div className="flex items-center justify-between font-medium mt-3">
        <h3 className="text-lg">{truncateText(title, 16)}</h3>
        <span className="font-extrabold">
          <sup>$</sup>
          {price}
        </span>
      </div>

      <p className="text-sm font-thin text-gray-700 truncate">{title}</p>

      <Rating rating={rating.rate} reviewCount={rating.count} />
    </div>
  );
};

export default Card;
