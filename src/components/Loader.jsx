import { Html, useProgress } from "@react-three/drei";

const Loader = () => {
  const { progress } = useProgress();
  return (
    <Html center>
      <div className="bg-gray-200/50 animate-pulse rounded-lg p-4 text-center shadow-lg">
        <p className="sm:text-lg font-semibold text-gray-700/50">
          Loading model... {Math.floor(progress)}%
        </p>
      </div>
    </Html>
  );
};
export default Loader;
