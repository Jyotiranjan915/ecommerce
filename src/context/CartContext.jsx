import { useReducer } from "react";
import { createContext } from "react";
import cartReducer from "../reducers/cartReducer";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, { products: [] });
  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
