import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  decreaseQuantity,
  addToCart,
  clearCart,
} from "./cartSlice";

const Cart = () => {
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="container">
      <h1> Cart</h1>
      {cart.length === 0 && <p>Cart is empty</p>}
      {cart.map((item) => (
        <div key={item.id}>
          <h2>{item.name}</h2>
          <p>
            ${item.price} × {item.quantity}
          </p>
          <button onClick={() => dispatch(addToCart(item))}>+</button>
          <button onClick={() => dispatch(decreaseQuantity(item.id))}>-</button>
          <button onClick={() => dispatch(removeFromCart(item.id))}>
            Remove
          </button>
        </div>
      ))}
      <h2>Total: ${total.toFixed(2)}</h2>
      <button onClick={() => dispatch(clearCart())}>Clear Cart</button>
    </div>
  );
};

export default Cart;
