import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { Suspense, useEffect, useRef } from "react";
import { Box3, Vector3 } from "three";
import { AxesHelper } from "three";
import Loader from "./Loader";

import gsap from "gsap";

const Model = ({ src, desiredScale = 1 }) => {
  const { scene } = useGLTF(src.src);
  const ref = useRef();

  useEffect(() => {
    if (scene) {
      scene.traverse((child) => {
        if (child.isMesh) {
          child.castShadow = true;
          child.receiveShadow = true;
        }
      });
    }

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

      gsap.fromTo(
        ref.current.rotation,
        { y: 0 },
        { y: Math.PI * 2, duration: 2, ease: "power2.inOut" }
      );
    }
  }, [scene, desiredScale]);

  return (
    <group ref={ref}>
      <primitive object={scene} />
    </group>
  );
};

const ModelViewer = ({ src }) => {
  return (
    <div className="sm:h-1/2 h-1/3 relative  ">
      <Canvas
        shadows
        camera={{
          position: [0, 0, 15],
          fov: 30,
        }}
      >
        <ambientLight intensity={5} />
        <directionalLight
          intensity={10}
          castShadow
          position={[1, 7, 1]}
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
        />
        <OrbitControls
          enablePan={false}
          enableZoom={false}
          minPolarAngle={Math.PI / 2}
          maxPolarAngle={Math.PI / 2}
          autoRotateSpeed={1}
          // autoRotate
        />

        <Suspense fallback={<Loader />}>
          <Model src={src} desiredScale={5} />
        </Suspense>
        {/* <axesHelper args={[2]} /> */}
      </Canvas>
      <div className=" font-extrabold w-full absolute top-1/2 z-50 flex justify-center gap-30  sm:gap-100">
        <button className="navigationBtn">{"<"}</button>{" "}
        <button className="navigationBtn">{">"}</button>
      </div>
    </div>
  );
};

export default ModelViewer;
