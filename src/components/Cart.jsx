import { useSelector, useDispatch } from "react-redux";

const Cart = () => {
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <main className="container border h-[90vh]">
      <section aria-labelledby="cart-heading" className="border h-full">
        <header className="border">
          <h2 id="cartHeader" className="text-center cart-heading font-bold">
            {" "}
            Cart
          </h2>
        </header>

        {cart.length === 0 ? (
          <p>Your cart is currently empty.</p>
        ) : (
          <ul className="border">
            {cart.map((item) => (
              <li key={item.id}>
                <article>
                  <h2>{item.name}</h2>
                  <p>
                    ${item.price} × {item.quantity}
                  </p>
                </article>
              </li>
            ))}
          </ul>
        )}

        <footer>
          <h2>Total: ${total.toFixed(2)}</h2>
        </footer>
      </section>
    </main>
  );
};

export default Cart;
