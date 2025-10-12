import { useLayoutEffect } from "react";
import { Link } from "react-router-dom";
import "boxicons";
import React from "react";
// import Icon from "./Icon";

const Navbar = ({ isMobile, setNavIsOpen, navIsOpen }) => {
  useLayoutEffect(() => {
    let tl;
    const loadGSAP = async () => {
      const gsap = (await import("gsap")).default;
      tl = gsap.timeline();
      if (!isMobile) {
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
      }
    };
    loadGSAP();
    return () => {
      tl.kill?.();
    };
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full h-7  sm:h-auto shadow-lg">
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
          <div className="border h-[2rem] w-[2rem] "></div>
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
