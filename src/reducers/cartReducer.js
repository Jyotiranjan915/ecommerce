export default function cartReducer(state, action) {
  switch (action.type) {
    case "add":
      const existingProduct = state.products.find(
        (product) => product.id === action.payload.id
      );
      if (existingProduct) {
        return state;
      }
      return {
        products: [...state.products, { ...action.payload, count: 1 }],
      };
    case "remove":
      return {
        products: state.products.filter(
          (product) => product.id !== action.payload.id
        ),
      };
    case "inc":
      return {
        products: state.products.map((product) =>
          product.id === action.payload.id
            ? { ...product, count: product.count + 1 }
            : product
        ),
      };
    case "dec":
      return {
        products: state.products.map((product) =>
          product.id === action.payload.id
            ? { ...product, count: Math.max(product.count - 1, 0) }
            : product
        ),
      };
    default:
      return state;
  }
}
