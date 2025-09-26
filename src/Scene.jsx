import { Canvas } from "@react-three/fiber";
import WatchModel from "./components/watchModel";
import { OrbitControls } from "@react-three/drei";
import AppleWatchModel from "./components/AppleWatchModel";
import { AxesHelper } from "three";
import { useRef } from "react";
import ChronographModel from "./components/chronographModel";

const Scene = () => {
  const axesRef = useRef();

  return (
    <div className="fixed top-0 left-0 w-full -z-50 h-full  ">
      <Canvas camera={[0, 0, 6]} shadows fov={30}>
        <directionalLight
          intensity={20}
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />
        {/* <primitive object={new AxesHelper(10)} ref={axesRef} /> */}
        <ambientLight intensity={1} />
        <WatchModel />
        <AppleWatchModel />
        <ChronographModel />
        <OrbitControls
        // enableZoom={false}
        // enablePan={false}
        // enableRotate={false}
        />
      </Canvas>
    </div>
  );
};
export default Scene;
