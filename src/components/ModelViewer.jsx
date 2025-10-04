import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

import { useEffect, useRef } from "react";
import { Box3, Vector3 } from "three";
const Model = ({ src, desiredScale = 1 }) => {
  const { scene } = useGLTF(src.src);
  const ref = useRef();

  useEffect(() => {
    if (ref.current) {
      const box = new Box3().setFromObject(ref.current);
      const size = new Vector3();
      box.getSize(size);

      const maxDimension = Math.max(size.x, size.y, size.z);
      const scaleFactor = desiredScale / maxDimension;

      ref.current.scale.setScalar(scaleFactor);

      const center = new Vector3();
      box.getCenter(center);
      ref.current.position.sub(center.multiplyScalar(scaleFactor));
    }
  }, [scene, desiredScale]);

  return <primitive object={scene} ref={ref} />;
};

const ModelViewer = ({ src }) => {
  return (
    <div className="h-1/2  ">
      <Canvas>
        <ambientLight intensity={5} />
        <directionalLight intensity={5} />
        <OrbitControls enablePan={false} enableZoom={false} />
        <Model src={src} desiredScale={5} />
      </Canvas>
    </div>
  );
};

export default ModelViewer;
