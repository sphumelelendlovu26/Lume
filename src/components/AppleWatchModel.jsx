import { useGLTF } from "@react-three/drei";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// model foer the right watch
const AppleWatchModel = ({ scalingFactor, isMobile }) => {
  const { scene } = useGLTF("/seiko-watch-model/scene.gltf");
  const group = useRef();

  useEffect(() => {
    const tl = gsap.timeline();

    // group.current.traverse((child) => {
    //   if (child.isMesh && child.material) {
    //     child.material.transparent = true;
    //     child.material.opacity = 0.5;

    //     tl.to(
    //       child.material,
    //       {
    //         opacity: 1,
    //         delay: 1,
    //         ease: "power2.out",
    //       },
    //       0
    //     );
    //   }
    // });
    // on mount animation
    tl.fromTo(
      group.current.position,
      { x: 30 },
      { x: isMobile ? 1.5 : 2, y: -0.2, duration: 1.5 },
      0
    );

    const scrollTl = gsap.timeline({
      scrollTrigger: {
        trigger: "#page2",
        start: "top 85%",
        end: "top 5%",
        scrub: true,
      },
    });

    scrollTl.fromTo(
      group.current.position,
      { x: isMobile ? 1.5 : 2, opacity: 1 },
      { x: 10, opacity: 0.5 }
    );
    scrollTl.fromTo(
      group.current.position,
      { x: 10, opacity: 0.5, y: -0.2 },
      { x: 1.5, y: -0.6, opacity: 1 }
    );
    scrollTl.fromTo(group.current.rotation, { x: 0 }, { x: -0.2 });

    const p3ScrollTl = gsap.timeline({
      scrollTrigger: {
        trigger: "#page3",
        start: "top 95%",
        end: "top 40%",
        scrub: true,
      },
    });

    p3ScrollTl.fromTo(
      group.current.position,
      { x: 1.5, y: -0.6 },
      { x: 0, y: -0.6 }
    );
    p3ScrollTl.fromTo(
      group.current.position,
      { x: 0, y: -0.6 },
      { x: 0, y: 8 }
    );
    return () => {
      tl.kill();
      scrollTl.scrollTrigger?.kill();
      scrollTl.kill();
      p3ScrollTl.scrollTrigger?.kill();
      p3ScrollTl.kill();
    };
  }, []);
  useEffect(() => {
    if (group.current) {
      group.current.scale.set(
        16 * scalingFactor,
        16 * scalingFactor,
        16 * scalingFactor
      );
    }
  }, [scalingFactor]);

  return (
    <group ref={group} scale={16 * scalingFactor}>
      <primitive object={scene}></primitive>
    </group>
  );
};

export default AppleWatchModel;
