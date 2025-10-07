import { useGLTF } from "@react-three/drei";
import { useRef, useEffect, useMemo } from "react";

useGLTF.preload("/watch_atlantic/scene-draco.glb");

const AtlanticModel = ({ scalingFactor, isMobile }) => {
  const { scene } = useGLTF("/watch_atlantic/scene-draco.glb");
  const memoizedScene = useMemo(() => scene.clone(), [scene]);

  const group = useRef();
  const watchScale = 0.5;
  useEffect(() => {
    let tl, scrollTl, p3ScrollTl, p3ScrollTl2;

    const loadGSAP = async () => {
      const gsap = (await import("gsap")).default;
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      if (group.current) {
        gsap.fromTo(group.current.rotation, { x: 1.5 }, { x: 1.5 });
        gsap.fromTo(group.current.position, { y: 1 }, { y: 1 });
        tl = gsap.timeline();

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
        //moves left watch  on scroll in the landing page
        scrollTl.fromTo(
          group.current.position,
          { x: isMobile ? -1.5 : -2, y: 0.5 },
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
    };
    const idleCallbackId = requestIdleCallback(() => {
      loadGSAP();
    });

    return () => {
      cancelIdleCallback(idleCallbackId);
      tl?.kill();
      scrollTl?.scrollTrigger?.kill();
      scrollTl?.kill();
      p3ScrollTl?.scrollTrigger?.kill();
      p3ScrollTl?.kill();
      p3ScrollTl2?.scrollTrigger?.kill();
      p3ScrollTl2?.kill();
    };
  }, [isMobile]);
  let finalScale = useMemo(() => watchScale * scalingFactor);
  useEffect(() => {
    if (group.current) {
      group.current.scale.set(finalScale, finalScale, finalScale);
    }
  }, [scalingFactor]);

  return (
    <group ref={group} scale={finalScale}>
      <primitive object={memoizedScene}></primitive>
    </group>
  );
};

export default AtlanticModel;
