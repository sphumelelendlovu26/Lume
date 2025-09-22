import { useGLTF } from "@react-three/drei";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AppleWatchModel = () => {
  const { scene } = useGLTF("/apple-watch-model/scene.gltf");
  const group = useRef();

  useEffect(() => {
    const tl = gsap.timeline();

    group.current.traverse((child) => {
      if (child.isMesh && child.material) {
        child.material.transparent = true;
        child.material.opacity = 0.5;

        tl.to(
          child.material,
          {
            opacity: 1,
            delay: 1,
            ease: "power2.out",
          },
          0
        );
      }
    });
    tl.fromTo(
      group.current.position,
      { x: 50 },
      { x: 2.5, duration: 1, opacity: 1 },
      0
    );

    const scrollTween1 = gsap.fromTo(
      group.current.position,
      { x: 2.5 },
      {
        x: 6,
        z: -1,
        scrollTrigger: {
          trigger: "#page2",
          start: "top 80%",
          end: "bottom 30%",
          scrub: true,
          markers: true,
        },
      }
    );

    return () => {
      scrollTween1.scrollTrigger?.kill();
    };
  });

  return (
    <group
      ref={group}
      position={[2.5, 0.9, 0]}
      scale={[0.45, 0.45, 0.45]}
      rotation={[0.25, 0.5, 0]}
    >
      <primitive object={scene}></primitive>
    </group>
  );
};

export default AppleWatchModel;
