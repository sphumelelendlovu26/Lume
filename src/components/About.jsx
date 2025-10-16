import { lazy, useRef, useState } from "react";
import { useLayoutEffect } from "react";
const About = () => {
  const containerRef = useRef(null);
  const contentRef = useRef(null);

  const [activeIndex, setActiveIndex] = useState(0);
  useLayoutEffect(() => {
    let ctx;
    const loadGSAP = async () => {
      const gsap = (await import("gsap")).default;

      ctx = gsap.context(() => {
        gsap.fromTo(
          contentRef.current,
          { autoAlpha: 0, y: 20 },
          { autoAlpha: 1, y: 0, duration: 0.6, ease: "power2.out" }
        );
      }, containerRef);
    };

    loadGSAP();

    return () => ctx?.revert();
  }, [activeIndex]);

  const aboutSections = [
    {
      title: "About Us",
      content:
        "We craft watches that blend timeless design with modern engineering — each piece tells your story.",
      position: { top: "20%", left: "50%" },
    },
    {
      title: "Our Philosophy",
      content:
        "Elegance lives in simplicity. We fuse Swiss-inspired precision with minimalist aesthetics to elevate everyday moments.",
      position: { top: "30%", left: "85%" },
    },
    {
      title: "For the Modern Explorer",
      content:
        "Whether navigating cities or chasing horizons, our watches move with you — bold, stylish, and reliable.",
      position: { top: "60%", left: "85%" },
    },
    {
      title: "Craftsmanship & Character",
      content:
        "Inspired by Mediterranean textures and architectural symmetry, our designs reflect intentional living and quiet luxury.",
      position: { top: "80%", left: "50%" },
    },
    {
      title: "Our Story",
      content:
        "From a single sketch to a legacy on every wrist — we reimagined what a watch could be.",
      position: { top: "60%", left: "15%" },
    },
    {
      title: "Looking Ahead",
      content:
        "We’re exploring sustainable materials and digital innovation to shape the future of wearable design.",
      position: { top: "30%", left: "15%" },
    },
  ];
  return (
    <main className="container h-[94vh] mx-[25%]  relative">
      {" "}
      {aboutSections.map((section, i) => (
        <span
          key={i}
          className="absolute hover:scale-105 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer text-sm font-semibold hover:text-blue-600 transition"
          style={{ top: section.position.top, left: section.position.left }}
          onMouseEnter={() => setActiveIndex(i)}
          onClick={() => setActiveIndex(i)}
        >
          {" "}
          {section.title}{" "}
        </span>
      ))}{" "}
      <div className="absolute size-2/4 top-1/2 left-1/2 translate-[-50%] flex items-center border rounded-full border-gray-200 backdrop-blur-5xl shadow">
        {" "}
        <p ref={contentRef} className="sm:text-2xl text-center">
          {" "}
          {aboutSections[activeIndex].content}{" "}
        </p>{" "}
      </div>{" "}
    </main>
  );
};
export default About;
