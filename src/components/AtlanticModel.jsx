import { useGLTF } from "@react-three/drei";
import { useRef, useEffect } from "react";
import gsap from "gsap";

const AtlanticModel = ({ scalingFactor, isMobile }) => {
  const { scene } = useGLTF("/watch_atlantic/scene.gltf");
  const group = useRef();
  const watchScale = 0.5;
  useEffect(() => {
    let tl, scrollTl, p3ScrollTl, p3ScrollTl2;

    if (group.current) {
      gsap.fromTo(group.current.rotation, { x: 1.5 }, { x: 1.5 });
      gsap.fromTo(group.current.position, { y: 1 }, { y: 1 });
      tl = gsap.timeline();

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
        { x: -30 },
        { x: isMobile ? -1.5 : -2, duration: 1.5 },
        0
      );

      scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: "#page2",
          start: "top 85%",
          end: "top 5%",
          scrub: true,
        },
      });
      //moves yellow watch left on scroll in the landing page
      scrollTl.fromTo(
        group.current.position,
        { x: -isMobile ? -1.5 : -2, y: 0.5 },
        { x: -10, y: 0.5 }
      );

      p3ScrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: "#page3",
          start: "top 80%",
          end: "top 30%",
          scrub: true,
        },
      });
      p3ScrollTl.fromTo(
        group.current.position,
        {
          x: -10,
          y: 0.5,
        },
        { x: 0, y: -10 }
      );
      p3ScrollTl.fromTo(
        group.current.position,
        { x: 0, y: -10, z: 0 },
        { x: 0, y: 0, z: 4 }
      );

      p3ScrollTl2 = gsap.timeline({
        scrollTrigger: {
          trigger: "#page3",
          start: "top 30%",
          end: "top 5%",
          scrub: true,
          // markers: true,
        },
      });

      p3ScrollTl2.fromTo(group.current.rotation, { x: 1.5 }, { x: 0.5 });
    }

    return () => {
      tl?.kill();
      scrollTl?.scrollTrigger?.kill();
      scrollTl?.kill();
      p3ScrollTl?.scrollTrigger?.kill();
      p3ScrollTl?.kill();
      p3ScrollTl2?.scrollTrigger?.kill();
      p3ScrollTl2?.kill();
    };
  });
  useEffect(() => {
    if (group.current) {
      group.current.scale.set(
        watchScale * scalingFactor,
        watchScale * scalingFactor,
        watchScale * scalingFactor
      );
    }
  }, [scalingFactor]);

  return (
    <group ref={group} scale={watchScale * scalingFactor}>
      <primitive object={scene}></primitive>
    </group>
  );
};

export default AtlanticModel;
