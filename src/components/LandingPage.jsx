import gsap from "gsap";
import { useEffect } from "react";

const LandingPage = () => {
  const tl = gsap.timeline();
  useEffect(() => {
    tl.fromTo(
      ".landing-heading",
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, delay: 1.5, stagger: 0.5, ease: "sine.inOut" },
      0
    );
    tl.fromTo(
      ".subHeader",
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, delay: 2.5, stagger: 0.3 },
      0
    );
    tl.fromTo(".discoverBtn", { y: 30, opacity: 0 }, { y: 0, opacity: 1 });
  }, []);

  return (
    <section className="h-[100vh] relative  ">
      <h1 className="text-center  text-4xl sm:text-7xl tracking-wide top-25 absolute right-1 sm:right-5 lg:right-10">
        <span className="landing-heading block"> TIME</span>{" "}
        <span className="landing-heading block text-shadow-lg text-shadow-gray-100">
          REDEFINED{" "}
        </span>
      </h1>
      <div className="absolute bottom-30 sm:bottom-40 w-full">
        {" "}
        <p className="text-center flex w-full flex-col gap-3 sm:text-4xl p-5 text-shadow-md text-shadow-gray-100">
          <span className="block subHeader tracking-wide">
            Discover the ultimate{" "}
          </span>{" "}
          <span className="block subHeader tracking-wide">blend of style</span>{" "}
          <span className="block subHeader tracking-wide">and precision.</span>
        </p>
      </div>

      <a
        href="#"
        className="discoverBtn shadow px-3 rounded sm:text-2xl sm:bottom:25 bottom-20 absolute left-1/2 translate-x-[-50%]"
      >
        Discover More
      </a>
    </section>
  );
};

export default LandingPage;
