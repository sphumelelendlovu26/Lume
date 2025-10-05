import ModelViewer from "./ModelViewer";
import WatchDetails from "./WatchDetails";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
const Modal = ({ setModalIsOpen, selectedModel }) => {
  const modalRef = useRef();

  useEffect(() => {
    if (modalRef.current) {
      gsap.fromTo(
        modalRef.current,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 1 }
      );
    }
  }, []);
  return (
    <main
      ref={modalRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-gray-400/50"
    >
      <div className="relative w-[85vw] h-[85vh] max-w-3xl bg-white rounded shadow-lg">
        <button
          className="absolute top-3 right-3 z-50 text-2xl font-bold hover:cursor-pointer"
          onClick={() => setModalIsOpen(false)}
        >
          ×
        </button>
        <ModelViewer src={selectedModel} />
        <WatchDetails selectedModel={selectedModel} />
      </div>
    </main>
  );
};

export default React.memo(Modal);
