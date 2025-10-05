import gsap from "gsap";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import "boxicons";
import React from "react";

const Navbar = ({ isMobile, setNavIsOpen, navIsOpen }) => {
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
        stagger: 0.3,
        duration: 1,
        ease: "none",
      }
    );
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-screen h-7 sm:h-auto shadow">
      {isMobile ? (
        <div className=" flex justify-between items-center">
          <span>Icon</span>

          {navIsOpen ? (
            <button
              onClick={() => {
                setNavIsOpen(false);
              }}
            >
              {" "}
              <box-icon name="menu-alt-left"></box-icon>
            </button>
          ) : (
            <button
              onClick={() => {
                setNavIsOpen(true);
              }}
            >
              {" "}
              <box-icon name="menu-alt-right"></box-icon>
            </button>
          )}
        </div>
      ) : (
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
              <Link to="/login">Login</Link>
            </li>
            <li className="link">
              <Link className="hover:text-white" to="/cart">
                {" "}
                <box-icon name="cart"></box-icon>
              </Link>
              {/* swap with a cart icon */}
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default React.memo(Navbar);
