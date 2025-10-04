import ModelViewer from "./ModelViewer";
const Modal = ({ setModalIsOpen, selectedModelSrc }) => {
  return (
    <main className="fixed inset-0 z-50 flex items-center justify-center bg-gray-400/50">
      <div className="w-[95vw] h-[95vh] border-4 bg-white relative">
        <button
          className="absolute top-4 right-4 z-[51] text-xl font-bold hover:cursor-pointer"
          onClick={() => setModalIsOpen(false)}
        >
          X
        </button>
        <ModelViewer src={selectedModelSrc} />
      </div>
    </main>
  );
};

export default Modal;
