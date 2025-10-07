import { useEffect } from "react";
import { Link } from "react-router-dom";

const CraftedPage = () => {
  useEffect(() => {
    const loadGSAP = async () => {
      const gsap = (await import("gsap")).default;
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);
    };
    loadGSAP();
  });

  return (
    <section
      id="page3"
      className=" h-[100vh] p-5  relative flex flex-col justify-center items-center text-shadow-md text-shadow-white  "
    >
      <h2 className="text-3xl absolute  top-[8%] sm:text-5xl font-semibold text-center mb-5 subHeader4">
        Crafted for Every Moment
      </h2>
      <p className="text-center max-w-3xl text-sm sm:text-2xl paragraph4 absolute top-[35%]">
        From boardrooms to mountain peaks, our timepieces are built to elevate
        your journey. Experience the fusion of durability, elegance, and
        innovation — wherever life takes you.
      </p>
      <div className="mt-10 flex gap-5 sm:gap-10 absolute bottom-[30%]">
        <Link to="/collection">
          <button className=" rounded bg-gray-900  hover:border transition-all text-sm text-white sm:text-lg discoverBtn hover:bg-transparent hover:text-gray-900">
            Explore Collections
          </button>
        </Link>
        <Link>
          <button className=" rounded border border-gray-900 text-black text-sm sm:text-lg discoverBtn hover:bg-gray-900 hover:text-gray-100 transition-all">
            Book a Virtual Try-On
          </button>
        </Link>
      </div>
    </section>
  );
};

export default CraftedPage;
