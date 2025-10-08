import { useDispatch } from "react-redux";
import { addToCart } from "./cartSlice";
import React from "react";

const WatchDetails = ({ selectedModel }) => {
  const dispatch = useDispatch();
  return (
    <div className="h-1/2   flex flex-col gap-4 sm:gap-10   items-center">
      <h2 className="mask-b-from-55% font-semibold sm:text-2xl tracking-widest">
        {selectedModel?.title}
      </h2>
      <p className="max-w-2xl text-sm sm:text-lg">
        {selectedModel?.description}
      </p>
      <p className="mask-b-from-55% font-semibold tracking-wide">
        R {selectedModel?.price}.00
      </p>
      <button
        className="border hover:cursor-pointer w-1/2 addTocartBtn hover:scale-105 bg-gray-900 text-white hover:bg-gray-100 hover:text-gray-900"
        onClick={() => dispatch(addToCart(selectedModel))}
      >
        {" "}
        Add To Cart
      </button>
    </div>
  );
};

export default React.memo(WatchDetails);
