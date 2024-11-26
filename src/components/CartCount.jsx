import { useContext, useState } from "react";
import Sidebar from "./Sidebar";
import { CartContext } from "../context/CartContext";

const CartCount = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const { state } = useContext(CartContext);

  const openSidebar = () => {
    setSidebarOpen(true);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <>
      <div
        className="relative cursor-pointer text-gray-800 font-bold"
        onClick={openSidebar}
      >
        <div className="count absolute top-[-5px] right-[-8px] bg-blue-500 w-5  h-5 flex items-center justify-center rounded-full text-white">
          {state.products.length}
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-shopping-cart font-bold"
        >
          <circle cx="8" cy="21" r="1" />
          <circle cx="19" cy="21" r="1" />
          <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
        </svg>
      </div>
      {isSidebarOpen && (
        <div
          onClick={closeSidebar}
          className="fixed inset-0 bg-black opacity-50 z-40"
        ></div>
      )}
      <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
    </>
  );
};

export default CartCount;
