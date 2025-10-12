import React from "react";

const Summary = ({ cart }) => {
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  return (
    <main className="h-full">
      <h2>Total: R {total.toFixed(2)}</h2>
    </main>
  );
};

export default React.memo(Summary);
