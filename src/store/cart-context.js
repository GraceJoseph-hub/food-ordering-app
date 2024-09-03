import { createContext } from "react";

const CartContext = createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => { },
  removeItem: (id) => { }
});



// const CartProvider = (props) => {
//   return <CartContext.Provider>
//     {props.children}
//   </CartContext.Provider>
// }


export default CartContext;