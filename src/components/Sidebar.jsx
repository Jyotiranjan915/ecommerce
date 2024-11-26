import CartItems from "./CartItems";
import { useEffect } from "react";

const Sidebar = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <div
      className={`fixed top-0 right-0 h-full bg-gray-50 z-50 transition-transform duration-300 ease-in-out 
        ${isOpen ? "translate-x-0" : "translate-x-full"} 
        w-full sm:w-1/3 text-gray-800 p-5 md:p-6`}
    >
      <div className="cursor-pointer mb-5" onClick={onClose}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinejoin="round"
          strokeLinecap="round"
          className="lucide lucide-x"
        >
          <path d="M18 6 6 18" />
          <path d="m6 6 12 12" />
        </svg>
      </div>
      <h2 className="text-3xl font-bold mb-4">Cart</h2>
      <div className="flex flex-col max-h-[calc(100%-4rem)] overflow-y-auto">
        <CartItems />
      </div>
    </div>
  );
};

export default Sidebar;
