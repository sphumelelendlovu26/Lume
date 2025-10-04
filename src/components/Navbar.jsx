import gsap from "gsap";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const tl = gsap.timeline();
  useEffect(() => {
    tl.fromTo(
      ".link",
      {
        opacity: 0,
        y: -20,
      },
      {
        opacity: 1,
        y: 0,
        stagger: 0.5,
        duration: 1,
        ease: "sine.inOut",
      }
    );
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-screen shadow z-50 ">
      <div className="flex items-center justify-between p-5">
        <span>Icon</span>
        <ul className="flex gap-3 sm:gap-12 items-center  px-4">
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
            <Link>Contact</Link>
          </li>
          <li className="link">
            <Link to="/cart">🛒</Link>
            {/* swap with a cart icon */}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
