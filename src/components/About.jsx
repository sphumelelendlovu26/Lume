import { lazy } from "react";
import { useLayoutEffect } from "react";

const About = () => {
  useLayoutEffect(() => {
    let tl;
    const loadGSAP = async () => {
      const gsap = (await import("gsap")).default;
    };
  });

  return (
    <div className="container">
      <h1 className="text-center text-2xl font-bold about-headers">About Us</h1>
      <p>
        We craft watches that blend timeless design with modern engineering —
        each piece tells your story.
      </p>

      <h2 className="text-center text-xl about-headers">Our Philosophy</h2>
      <p>
        Elegance lives in simplicity. We fuse Swiss-inspired precision with
        minimalist aesthetics to elevate everyday moments.
      </p>

      <h2 className="text-center text-xl about-headers">What Sets Us Apart</h2>
      <ul>
        <li>
          <strong>Precision:</strong> Engineered for accuracy and durability.
        </li>
        <li>
          <strong>Design:</strong> Clean, modern, and versatile silhouettes.
        </li>
        <li>
          <strong>Materials:</strong> Premium components built to last.
        </li>
      </ul>

      <h2>For the Modern Explorer</h2>
      <p>
        Whether navigating cities or chasing horizons, our watches move with you
        — bold, stylish, and reliable.
      </p>

      <h2 className="text-center text-xl about-headers">
        Craftsmanship & Character
      </h2>
      <p>
        Inspired by Mediterranean textures and architectural symmetry, our
        designs reflect intentional living and quiet luxury.
      </p>

      <h2 className="text-center text-xl about-headers">Our Story</h2>
      <p>
        From a single sketch to a legacy on every wrist — we reimagined what a
        watch could be.
      </p>

      <h2 className="text-center text-xl about-headers">Looking Ahead</h2>
      <p>
        We’re exploring sustainable materials and digital innovation to shape
        the future of wearable design.
      </p>
    </div>
  );
};

export default About;
