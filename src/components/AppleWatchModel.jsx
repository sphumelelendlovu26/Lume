import { useGLTF } from "@react-three/drei";
import { useEffect, useRef } from "react";
import "../setupKTX2Loader";
import { KTX2Loader } from "three/examples/jsm/Addons.js";
import { useThree } from "@react-three/fiber";
// model foer the right watch
const AppleWatchModel = ({ scalingFactor, isMobile }) => {
  const gl = useThree((state) => state.gl);
  const { scene } = useGLTF(
    "/seiko-watch-model/scene-compressed.glb",
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
  const group = useRef();

  useEffect(() => {
    let tl, scrollTl, p3ScrollTl;
    const loadGSAP = async () => {
      const gsap = (await import("gsap")).default;
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      tl = gsap.timeline();

      tl.fromTo(
        group.current.position,
        { x: 30 },
        { x: isMobile ? 1.5 : 2, y: -0.2, duration: 1.5 },
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

      scrollTl.fromTo(
        group.current.position,
        { x: isMobile ? 1.5 : 2 },
        { x: 10 }
      );
      scrollTl.fromTo(
        group.current.position,
        { x: 10, y: -0.2 },
        { x: 1.5, y: -0.6 }
      );
      scrollTl.fromTo(group.current.rotation, { x: 0 }, { x: -0.2 });

      p3ScrollTl = gsap.timeline({
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
    };
    loadGSAP();

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
