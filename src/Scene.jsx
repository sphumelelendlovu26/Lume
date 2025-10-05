import { Canvas } from "@react-three/fiber";
import WatchModel from "./components/watchModel";
import { OrbitControls } from "@react-three/drei";
import AppleWatchModel from "./components/AppleWatchModel";
import { AxesHelper } from "three";
import { useEffect, useRef, useState } from "react";
import ChronographModel from "./components/chronographModel";

const Scene = ({ isMobile }) => {
  const axesRef = useRef();
  const [scalingFactor, setScalingFactor] = useState(
    Math.min(Math.max(window.innerWidth / 960, 0.8), 1.15)
  );

  useEffect(() => {
    const handleResize = () => {
      setScalingFactor(Math.min(Math.max(window.innerWidth / 960, 0.9), 1.15));
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center overflow-hidden -z-50">
      <Canvas camera={[0, 0, 6]} fov={30}>
        <directionalLight
          intensity={20}
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />
        {/* <primitive object={new AxesHelper(10)} ref={axesRef} /> */}
        <ambientLight intensity={10} />
        <WatchModel scalingFactor={scalingFactor} />
        <AppleWatchModel scalingFactor={scalingFactor} isMobile={isMobile} />
        {/* <ChronographModel scalingFactor={scalingFactor} /> */}
        <OrbitControls
          enableZoom={false}
          // enablePan={false}
          // enableRotate={false}
        />
      </Canvas>
    </div>
  );
};
export default Scene;
