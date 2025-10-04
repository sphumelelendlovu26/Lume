import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { div } from "three/tsl";

const Model = ({ src }) => {
  const { scene } = useGLTF(src);
  return <primitive object={scene} />;
};

const ModelViewer = ({ src }) => {
  return (
    <div className="size-full">
      <Canvas>
        <ambientLight intensity={5} />
        <directionalLight intensity={5} />
        <OrbitControls />
        <Model src={src} />
      </Canvas>
    </div>
  );
};

export default ModelViewer;
