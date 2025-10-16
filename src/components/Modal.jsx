const ModelViewer = lazy(() => import("./ModelViewer"));
const WatchDetails = lazy(() => import("./WatchDetails"));
import React, { lazy, useEffect, useRef } from "react";
const Modal = ({ setModalIsOpen, selectedModel }) => {
  const modalRef = useRef();

  useEffect(() => {
    const loadGSAP = async () => {
      if (modalRef.current) {
        const gsap = (await import("gsap")).default;

        gsap.fromTo(
          modalRef.current,
          { opacity: 0, y: -20 },
          { opacity: 1, y: 0, duration: 1 }
        );
      }
    };

    loadGSAP();
  }, []);
  return (
    <main
      ref={modalRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-gray-400/50"
    >
      <div className="relative w-[85vw] h-[85vh] max-w-3xl bg-white rounded shadow-lg">
        <button
          className="absolute top-3 right-3 z-50 text-2xl font-bold  hover:text-red-500 hover:cursor-pointer flex items-center justify-center"
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
