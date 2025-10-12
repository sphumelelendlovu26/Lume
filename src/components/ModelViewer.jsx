import { Canvas } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import React, {
  Suspense,
  useEffect,
  useRef,
  useMemo,
  lazy,
  useState,
} from "react";
import { Box3, Vector3, TextureLoader } from "three";
import { AxesHelper } from "three";
const Loader = lazy(() => import("./Loader"));
import { KTX2Loader } from "three/examples/jsm/Addons.js";
import { useThree } from "@react-three/fiber";

const LazyOrbitControls = lazy(() =>
  import("@react-three/drei").then((mod) => ({ default: mod.OrbitControls }))
);
const Model = ({ src, desiredScale = 1 }) => {
  const [textureMap, setTextureMap] = useState(null);

  const gl = useThree((state) => state.gl);
  useGLTF.preload(src.src, undefined, undefined, (loader) => {
    const ktx2loader = new KTX2Loader();
    ktx2loader.setTranscoderPath(
      "https://cdn.jsdelivr.net/gh/pmndrs/drei-assets/basis/"
    );
    ktx2loader.detectSupport(gl);
    loader.setKTX2Loader(ktx2loader);
  });

  const { scene } = useGLTF(src.src);

  const memoizedScene = useMemo(() => scene.clone(), [scene]);
  const ref = useRef();
  // useEffect for loading gsap
  useEffect(() => {
    const loadGSAP = async () => {
      const gsap = (await import("gsap")).default;
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
    };
    loadGSAP();
  }, [scene, desiredScale]);

  useEffect(() => {
    if (!src?.model) return;
    const loadManifest = async () => {
      const res = await fetch(`/${src.model}/textures/index.json`);
      const manifest = await res.json();
      setTextureMap(manifest);
    };
    loadManifest();
  }, [src.model]);
  useEffect(() => {
    if (!textureMap || !ref.current) return;

    const loader = new TextureLoader();
    const loadTextures = async () => {
      const loadedTextures = {};

      await Promise.all(
        Object.entries(textureMap).map(async ([name, file]) => {
          const texture = await loader.loadAsync(
            `/${src.model}/textures/${file}`
          );
          loadedTextures[name] = texture;
        })
      );

      ref.current.traverse((child) => {
        if (child.isMesh) {
          const key = child.material?.name || child.name;
          const texture = loadedTextures[key];
          if (texture) {
            child.material.map = texture;
            child.material.needsUpdate = true;
          }
        }
      });
    };

    loadTextures();
  }, [textureMap]);

  return (
    <group ref={ref}>
      <primitive object={memoizedScene} />
    </group>
  );
};

const ModelViewer = ({ src }) => {
  return (
    <div className=" relative h-1/2">
      <Canvas
        shadows
        camera={{
          position: [0, 0, 15],
          fov: 30,
        }}
      >
        <ambientLight intensity={3} />
        <directionalLight
          intensity={5}
          castShadow
          position={[1, 7, 1]}
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
        />
        <Suspense fallback={<Loader type="controls" />}>
          {" "}
          <LazyOrbitControls
            enablePan={false}
            enableZoom={false}
            minPolarAngle={Math.PI / 2}
            maxPolarAngle={Math.PI / 2}
            autoRotateSpeed={1}
            autoRotate
          />
        </Suspense>

        <Suspense fallback={<Loader />}>
          <Model src={src} desiredScale={5} />
        </Suspense>
        {/* <axesHelper args={[2]} /> */}
      </Canvas>
      
    </div>
  );
};

export default React.memo(ModelViewer);
