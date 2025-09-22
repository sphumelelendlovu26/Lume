import { Canvas } from "@react-three/fiber";
import WatchModel from "./components/watchModel";
import { OrbitControls } from "@react-three/drei";
import AppleWatchModel from "./components/AppleWatchModel";
const Scene = () => {
  return (
    <div className="fixed top-0 left-0 w-full z-0 h-full border">
      <Canvas camera={[0, 0, 6]} shadows fov={30}>
        <directionalLight
          intensity={20}
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />
        <ambientLight intensity={1} />
        <WatchModel />
        <AppleWatchModel />
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
};
export default Scene;
