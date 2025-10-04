import { useDispatch } from "react-redux";
import addToCart from "./cartSlice";
const WatchDetails = ({ selectedModel }) => {
  const dispatch = useDispatch();
  return (
    <div className="h-1/2  flex flex-col gap-5 wa p-5 items-center">
      <h2>{selectedModel?.title}</h2>
      <p>{selectedModel?.decription}</p>
      <p>{selectedModel?.price}</p>
      <button
        className="border hover:cursor-pointer"
        onClick={() => dispatch(addToCart(selectedModel))}
      >
        {" "}
        Add To Cart
      </button>
    </div>
  );
};

export default WatchDetails;
