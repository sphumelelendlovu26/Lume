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

    const scrollTl = gsap.timeline({
      scrollTrigger: {
        trigger: "#page2",
        start: "top 99%",
        end: "top 95%",
        scrub: true,
      },
    });

    scrollTl.fromTo(
      ".landing-heading",
      { opacity: 1 },
      { opacity: 0, stagger: 0.3 }
    );
    const subHeaderTl = gsap.timeline({
      scrollTrigger: {
        trigger: "#page2",
        start: "top 60%",
        end: "top 40%",
        scrub: true,
      },
    });
    subHeaderTl.fromTo(
      ".subHeader",
      { y: 0, opacity: 1 },
      {
        y: -40,
        opacity: 0,
        stagger: 0.3,
      }
    );

    return () => {
      scrollTl?.kill();
      tl?.kill();
      subHeaderTl?.kill();
    };
  }, []);

  return (
    <section className="h-[100vh] relative   ">
      <h1 className="text-center -z-10  text-4xl sm:text-6xl tracking-wide sm:top-25 top-12 absolute right-1 sm:right-5 lg:right-10">
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
    </section>
  );
};

export default LandingPage;
