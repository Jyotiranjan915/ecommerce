import { useContext } from "react";
import { truncateText } from "../utils";
import { CartContext } from "../context/CartContext";

const CartItems = () => {
  const { state, dispatch } = useContext(CartContext);
  const CartProducts = state.products;

  return (
    <>
      {!CartProducts?.length ? (
        <div className="w-full min-h-80 flex justify-center font-light text-center items-center  text-2xl">
          You have not added any items in your cart!
        </div>
      ) : (
        <div>
          {CartProducts?.map((product) => {
            return (
              <div
                key={product?.id}
                className="text-gray-800 flex items-center py-6 border-b-[1px] border-gray-200"
              >
                <div className="w-24 h-24 bg-gray-100 p-5 rounded-md flex items-center justify-center">
                  <img
                    src={product?.image}
                    alt={product?.title}
                    className="object-contain mix-blend-multiply bg-transparent"
                  />
                </div>

                <div className="px-3">
                  <div>
                    <span className="text-sm text-gray-500">
                      {product?.category}
                    </span>
                    <p className="font-medium">
                      {truncateText(product?.title, 16)}
                    </p>
                    <span className="font-bold">${product?.price}/-</span>
                  </div>

                  <div className="flex items-center justify-evenly">
                    <div className="mt-2 flex items-center">
                      <button
                        onClick={() =>
                          dispatch({
                            type: "dec",
                            payload: { id: product?.id },
                          })
                        }
                        className="border-[1px] rounded-xl text-md font-extrabold  px-5 mr-2"
                      >
                        -
                      </button>
                      <span className="border-[1px] rounded-xl text-md font-semibold  px-7  mr-2">
                        {product.count}
                      </span>
                      <button
                        onClick={() =>
                          dispatch({
                            type: "inc",
                            payload: { id: product?.id },
                          })
                        }
                        className="border-[1px] rounded-xl text-md font-extrabold  px-5 mr-2"
                      >
                        +
                      </button>
                    </div>

                    <div
                      onClick={() =>
                        dispatch({
                          type: "remove",
                          payload: { id: product?.id },
                        })
                      }
                      className="cursor-pointer"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="22"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-trash-2"
                      >
                        <path d="M3 6h18" />
                        <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                        <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                        <line x1="10" x2="10" y1="11" y2="17" />
                        <line x1="14" x2="14" y1="11" y2="17" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default CartItems;
