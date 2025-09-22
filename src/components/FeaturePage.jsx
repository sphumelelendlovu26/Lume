import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

const FeaturePage = () => {
  useEffect(() => {
    // PrecisionEngineering animation
    const tween1 = gsap.fromTo(
      ".subHeader1",
      { opacity: 0, y: -60 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".feature-page",
          start: "top 80%",
          end: "top 20%",
          scrub: true,
        },
      }
    );

    // Sleek animation
    const subHeaderLeftTween = gsap.fromTo(
      ".subHeader2-left",
      {
        opacity: 0,
        x: -150,
        scale: 2,
      },
      {
        opacity: 1,
        x: 0,
        scale: 1,
        scrollTrigger: {
          trigger: "#page2",
          start: "top 30%",
          end: "top 10%",
          scrub: true,
        },
      }
    );
    // Designs Animation
    const subHeaderRightTween = gsap.fromTo(
      ".subHeader2-right",
      {
        opacity: 0,
        x: 150,
        scale: 2,
      },
      {
        opacity: 1,
        x: 0,
        scale: 1,
        scrollTrigger: {
          trigger: "#page2",
          start: "top 30%",
          end: "top 10%",

          scrub: true,
        },
      }
    );
    // Innovative materials Animation
    const tween3 = gsap.fromTo(
      ".subHeader3",
      { opacity: 0, x: 60 },
      {
        opacity: 1,
        x: 0,
        stagger: 0.2,
        duration: 1,
        scrollTrigger: {
          trigger: ".feature-page",
          start: "top 20%",
          end: "top 5%",
          scrub: true,
        },
      }
    );
    const paragraphTween = gsap.fromTo(
      ".paragraph1",
      { opacity: 0, scale: 1.1 },
      {
        opacity: 1,
        scale: 1,
        scrollTrigger: {
          trigger: ".feature-page",
          start: "top 80%",
          end: "top 40%",
          scrub: true,
        },
      }
    );
    const paragraph2Tween = gsap.fromTo(
      ".paragraph2",
      { opacity: 0, scale: 1.1 },
      {
        opacity: 1,
        scale: 1,
        scrollTrigger: {
          trigger: "#page2",
          start: "top 30%",
          end: "top 10%",
          scrub: true,
        },
      }
    );
    const paragraph3Tween = gsap.fromTo(
      ".paragraph3",
      { opacity: 0, scale: 1.1, x: -30 },
      {
        opacity: 1,
        scale: 1,
        x: 0,
        scrollTrigger: {
          trigger: "#page2",
          start: "top 30%",
          end: "top 10%",
          scrub: true,
        },
      }
    );

    return () => {
      tween1.scrollTrigger?.kill();
      subHeaderLeftTween.scrollTrigger?.kill();
      subHeaderRightTween.scrollTrigger?.kill();
      tween3.scrollTrigger?.kill();
      paragraphTween.scrollTrigger?.kill();
      paragraph2Tween.scrollTrigger?.kill();
      paragraph3Tween.scrollTrigger?.kill();
    };
  }, []);

  return (
    <section
      id="page2"
      className=" feature-page h-[100vh] p-5 relative text-shadow-2xs text-shadow-white"
    >
      <div className=" ">
        <h2 className="text-center ">
          <span className="subHeader1  mr-3">Precision </span>
          <span className="subHeader1 ">Engineering</span>
          <p className="paragraph1 block">
            Every watch is crafted with Swiss-inspired precision for unmatched
            accuracy.
          </p>
        </h2>
      </div>
      <div className=" absolute top-1/3  w-full">
        <h2 className="text-center text-gray-400">
          <span className="subHeader2-left mr-3">Sleek</span>
          <span className="subHeader2-right">Designs</span>
          <p className="paragraph2">
            Minimalist, timeless aesthetics that complement every outfit.
          </p>
        </h2>
      </div>
      <div className=" absolute bottom-50  w-full">
        <h2 className="text-start  inline">
          <span className="subHeader3 mr-2 ">Innovative </span>
          <span className="subHeader3">Materials</span>
          <p className="ml-5 paragraph3">
            Durable sapphire crystal glass and stainless steel for lasting
            elegance.
          </p>
        </h2>
      </div>
    </section>
  );
};

export default FeaturePage;
