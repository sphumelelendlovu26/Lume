import { useGLTF } from "@react-three/drei";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useThree } from "@react-three/fiber";

gsap.registerPlugin(ScrollTrigger);

const WatchModel = () => {
  const { scene } = useGLTF("/watch-model/scene.gltf");
  const { camera } = useThree();
  const watchModelRef = useRef();

  useEffect(() => {
    if (watchModelRef.current) {
      // Intro animation
      const tl = gsap.timeline();
      // watchModelRef.current.traverse((child) => {
      //   if (child.isMesh && child.material) {
      //     child.material.transparent = true;
      //     child.material.opacity = 0.5;

      //     tl.to(
      //       child.material,
      //       {
      //         opacity: 1,
      //         delay: 2,
      //         ease: "power2.out",
      //       },
      //       0
      //     );
      //   }
      // });

      tl.fromTo(
        watchModelRef.current.rotation,
        { y: 0 },
        { y: Math.PI * 2, duration: 1, ease: "sine.inOut" },
        0
      );

      tl.fromTo(
        watchModelRef.current.scale,
        { x: 0.39, y: 0.39, z: 0.39 },
        { x: 0.16, y: 0.16, z: 0.16, duration: 1 },
        0
      );

      tl.fromTo(
        watchModelRef.current.position,
        { y: -1, x: 0, z: 0 },
        { x: 0.5, y: 0.5, z: 0 },
        0
      );

      // Scroll-driven timeline
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: "#page2",
          start: "top 85%",
          end: "top 10%",
          scrub: true,
          // markers: true,
        },
      });

      // watch rotation
      scrollTl.fromTo(
        watchModelRef.current.rotation,
        { y: Math.PI * 2, z: 0 },
        { y: 0, ease: "none" }
      );

      // camera movement
      scrollTl.fromTo(
        camera.position,
        { x: 2, y: 1, z: 5 },
        {
          x: 0,
          y: 1.05,
          z: 2.8,
          onUpdate: () => camera.lookAt(0, 0, 0),
        },
        0 // sync with rotation
      );

      // model position
      scrollTl.fromTo(
        watchModelRef.current.position,
        { x: 0.5, y: 0.5, z: 0 },
        { x: 0, y: 0, z: 0 }
      );

      // page 3 timeline
      const p3ScrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: "#page3",
          start: "top 95%",
          end: "top 40%",
          scrub: true,
        },
      });
      p3ScrollTl.fromTo(
        watchModelRef.current.position,
        {
          x: 0,
          y: 0,
          z: 0,
        },
        { x: 0, y: 4, z: 0 }
      );

      return () => {
        tl.kill();
        scrollTl.scrollTrigger?.kill();
        scrollTl.kill();
        p3ScrollTl.scrollTrigger?.kill();
      };
    }
  }, [camera]);

  return (
    <group ref={watchModelRef}>
      <primitive object={scene} />
    </group>
  );
};

export default WatchModel;
