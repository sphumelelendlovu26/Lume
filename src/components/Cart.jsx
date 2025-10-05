import { useSelector, useDispatch } from "react-redux";

const Cart = () => {
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="container">
      <h1> Cart</h1>
      {cart.length === 0 && <p>Cart is empty</p>}
      {cart.map((item) => (
        // ------
        <div key={item.id}>
          <h2>{item.name}</h2>
          <p>
            ${item.price} × {item.quantity}
          </p>
        </div>
      ))}
      <h2>Total: ${total.toFixed(2)}</h2>
    </div>
  );
};

export default Cart;
