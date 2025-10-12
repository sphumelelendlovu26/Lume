import { Canvas } from "@react-three/fiber";
import WatchModel from "./components/WatchModel";
import { OrbitControls } from "@react-three/drei";
import AppleWatchModel from "./components/AppleWatchModel";
import { useEffect, useState } from "react";
import AtlanticModel from "./components/AtlanticModel";

const Scene = ({ isMobile }) => {
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
        <directionalLight intensity={15} position={[0, 1, 0.5]} />

        <ambientLight intensity={14} />
        <WatchModel scalingFactor={scalingFactor} />
        <AppleWatchModel scalingFactor={scalingFactor} isMobile={isMobile} />
        <AtlanticModel scalingFactor={scalingFactor} isMobile={isMobile} />
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
