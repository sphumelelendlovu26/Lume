import gsap from "gsap";
import { useEffect } from "react";

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
    <nav className="fixed top-0 left-0 w-full shadow z-50">
      <div className="flex justify-between sm p-2">
        <span>Icon</span>
        <ul className="flex gap-5 sm:gap-15">
          <li className="link">Home</li>
          <li className="link">Jewellery</li>
          <li className="link">Watches</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
