import { Link } from "react-router-dom";

const MobileNav = () => {
  return (
    <div className=" border border-gray-100 items-center mobileNav left-[21%] top-7 size-3/5 z-[500] justify-between p-5 fixed bg-white/20 backdrop-blur-lg shadow">
      <ul className="flex flex-col  gap-3 sm:gap-12 items-center  px-4">
        <li className="link">
          <Link to="/">Home</Link>
        </li>
        <li className="link">
          <Link to="/collection">Collection</Link>
        </li>
        <li className="link">
          <Link to="/about">About</Link>
        </li>
        <li className="link">
          <Link to="/login">Login</Link>
        </li>
        <li className="link">
          <Link to="/cart">
            <box-icon name="cart"></box-icon>
          </Link>
          {/* swap with a cart icon */}
        </li>
      </ul>
    </div>
  );
};

export default MobileNav;
