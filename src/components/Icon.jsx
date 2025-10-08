// import { useEffect, useState } from "react";

// const Icon = () => {
//   const [angle, setAngle] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setAngle((prev) => (prev + 30) % 360);
//     }, 1000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="flex items-center justify-center relative size-full border  rounded-full">
//       <div className="absolute w-full h-full rounded-full "></div>
//       <div
//         className="absolute left-[25%] top-1/2 w-1/2 h-1 border  origin-left"
//         style={{
//           transform: `rotate(${angle}deg) translate(-50%, 0)`,
//         }}
//       ></div>
//     </div>
//   );
// };

// export default Icon;
