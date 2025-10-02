import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGLTF } from "@react-three/drei";
import { useEffect, useRef } from "react";
import { useThree } from "@react-three/fiber";

gsap.registerPlugin(ScrollTrigger);

const ChronographModel = ({ scalingFactor }) => {
  const { scene } = useGLTF("/chronograph-model/scene.gltf");
  const group = useRef();
  const { camera } = useThree();

  useEffect(() => {
    if (!group.current) return;
    const tl = gsap.timeline();

    // on mount animation
    tl.fromTo(
      group.current.position,
      { x: -50 },
      { x: -3, duration: 1.5, opacity: 1 },
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
    //moves yellow watch left on scroll in the landing page
    scrollTl.fromTo(group.current.position, { x: -3, y: 0 }, { x: -10, y: 0 });

    const p3ScrollTl = gsap.timeline({
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
        y: 0,
      },
      { x: 0, y: -10 }
    );
    p3ScrollTl.fromTo(group.current.position, { x: 0, y: -10 }, { x: 0, y: 0 });

    const p3ScrollTl2 = gsap.timeline({
      scrollTrigger: {
        trigger: "#page3",
        start: "top 30%",
        end: "top 5%",
        scrub: true,
        // markers: true,
      },
    });

    p3ScrollTl2.fromTo(group.current.rotation, { x: 0 }, { x: -1.5 }, 0);
    // p3ScrollTl2.fromTo(
    //   camera.position,
    //   { x: 0, y: 1.05, z: 2.8 },
    //   { x: 0, y: 0.8, z: 0.7 },
    //   0
    // );
    p3ScrollTl2.fromTo(
      camera.rotation,
      {
        y: 0,
      },
      { y: 2 }
    );

    //resets animations on unmount
    return () => {
      p3ScrollTl?.kill();
      scrollTl?.kill();
      tl?.kill();
    };
  }, []);

  return (
    <group ref={group} scale={0.45 * scalingFactor}>
      <primitive object={scene} />
    </group>
  );
};

export default ChronographModel;
