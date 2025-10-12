import { useSelector, useDispatch } from "react-redux";
import React, { lazy } from "react";
import { removeFromCart } from "./cartSlice";
import { increaseQuantity, decreaseQuantity } from "./cartSlice";
const Summary = lazy(() => import("./Summary"));

const CartItem = ({ watch }) => {
  const dispatch = useDispatch();

  return (
    <div className="flex justify-between text-sm items-center h-[25vh]   cartItem shadow hover:">
      <h3 className="absolute top-5 font-semibold   w-full right-0 text-center">
        {watch.title}
      </h3>
      <div className="h-full w-1/3">
        <img
          src={watch.image}
          alt={watch.title}
          className=" object-cover size-full"
        />
      </div>{" "}
      <div className=" flex items-center gap-2">
        <button
          className="border size-5 border-gray-300 hover:bg-gray-400  hover:cursor-pointer rounded flex items-center justify-center"
          onClick={() => dispatch(decreaseQuantity(watch.id))}
        >
          -
        </button>
        <span>{watch.quantity}</span>
        <button
          className="border size-5 hover:cursor-pointer hover:bg-gray-400 transition-all rounded  border-gray-300 flex items-center justify-center"
          onClick={() => dispatch(increaseQuantity(watch.id))}
        >
          +
        </button>
      </div>
      <div className="pr-1">
        <span>R {watch.price * watch.quantity}</span>
      </div>
      <button
        className=" border absolute deleteBtn bottom-10 right-15 transition-all rounded hover:cursor-pointer hover:bg-gray-900 hover:text-gray-100"
        onClick={() => dispatch(removeFromCart(watch.id))}
      >
        Remove From Cart
      </button>
    </div>
  );
};

const Cart = () => {
  const cart = useSelector((state) => state.cart.items);

  return (
    <main className="h-[92vh] container">
      <header className="">
        <h2 id="cartHeader" className="text-center  font-bold">
          {" "}
          Shopping Cart
        </h2>
      </header>

      {cart.length === 0 ? (
        <p>Your cart is currently empty.</p>
      ) : (
        <div className="border border-gray-300 sm:grid sm:grid-cols-2">
          <div className="border-r border-gray-300">
            {cart.map((item) => (
              <CartItem key={item.id} watch={item} />
            ))}
          </div>
          <Summary cart={cart} />
        </div>
      )}
    </main>
  );
};

export default React.memo(Cart);
