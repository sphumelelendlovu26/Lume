import { useGLTF } from "@react-three/drei";
import { useLayoutEffect, useEffect, useRef, useMemo } from "react";
import "../setupKTX2Loader";
import { KTX2Loader } from "three/examples/jsm/Addons.js";
import { useThree } from "@react-three/fiber";

useGLTF.preload("/watch-model/scene-compressed.glb");
const WatchModel = ({ scalingFactor }) => {
  const gl = useThree((state) => state.gl);
  const { scene } = useGLTF(
    "/watch-model/scene-compressed.glb",
    undefined,
    undefined,
    (loader) => {
      const ktx2loader = new KTX2Loader();
      ktx2loader.setTranscoderPath(
        "https://cdn.jsdelivr.net/gh/pmndrs/drei-assets/basis/"
      );
      ktx2loader.detectSupport(gl);
      loader.setKTX2Loader(ktx2loader);
    }
  );
  const clonedScene = useMemo(() => scene.clone(), [scene]);
  const watchModelRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        observer.disconnect();
      }
    });
    const el = document.querySelector("#page2");
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useLayoutEffect(() => {
    let tl, scrollTl, p3ScrollTl;

    const loadGSAP = async () => {
      const gsap = (await import("gsap")).default;
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);
      if (!scene) return null;
      if (watchModelRef.current) {
        // Intro animation
        tl = gsap.timeline();

        tl.fromTo(
          watchModelRef.current.rotation,
          { y: 0 },
          { y: Math.PI * 2, duration: 1, ease: "sine.inOut" },
          0
        );

        tl.fromTo(
          watchModelRef.current.scale,
          {
            x: 0.39 * scalingFactor,
            y: 0.39 * scalingFactor,
            z: 0.39 * scalingFactor,
          },
          {
            x: 0.16 * scalingFactor,
            y: 0.16 * scalingFactor,
            z: 0.16 * scalingFactor,
            duration: 1,
          },
          0
        );

        tl.fromTo(
          watchModelRef.current.position,
          { y: -1, x: 0, z: 0 },
          { x: 0, y: 0.5, z: 0 },
          0
        );

        // Scroll-driven timeline
        scrollTl = gsap.timeline({
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
        // scrollTl.fromTo(
        //   camera.position,
        //   {
        //     x: 0,
        //     y: 1.05,
        //     z: 2.8,
        //   },
        //   { x: 2, y: 1, z: 5 },
        //   0 // sync with rotation
        // );

        // page 2 scroll animation
        scrollTl.fromTo(
          watchModelRef.current.position,
          { x: 0, y: 0.5, z: 0 },
          { x: 0, y: -0.1, z: 2.5 }
        );

        // page 3 timeline
        p3ScrollTl = gsap.timeline({
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
            y: -0.1,
            z: 2.5,
          },
          { x: 0, y: 4, z: 2.5 }
        );
      }
    };

    const idleCallbackId = requestIdleCallback(() => {
      loadGSAP();
    });
    return () => {
      tl?.kill();
      scrollTl?.scrollTrigger?.kill();
      scrollTl?.kill();
      p3ScrollTl?.scrollTrigger?.kill();
      cancelIdleCallback(idleCallbackId);
    };
  }, []);

  useEffect(() => {
    if (watchModelRef.current) {
      watchModelRef.current.scale.set(
        0.16 * scalingFactor,
        0.16 * scalingFactor,
        0.16 * scalingFactor
      );
    }
  }, [scalingFactor]);

  return (
    <group ref={watchModelRef}>
      <primitive object={clonedScene} />
    </group>
  );
};

export default WatchModel;
