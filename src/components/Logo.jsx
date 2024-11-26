import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to={"/"}>
      <div className="flex items-center">
        <h1 className="text-3xl font-extrabold text-gray-800 tracking-wider uppercase">
          ShopEase
        </h1>
        <span className="ml-2 w-2 h-2 rounded-full bg-blue-500"></span>
      </div>
    </Link>
  );
};

export default Logo;
