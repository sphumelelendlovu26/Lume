import React from "react";
const WatchCard = ({ watch, setModalIsOpen, setSelectedModelId }) => {
  return (
    <main
      className="shadow-lg border border-gray-300  watchCard flex flex-col items-center gap-5   rounded  hover:cursor-pointer "
      onClick={() => {
        setModalIsOpen(true);
        setSelectedModelId(watch.id);
      }}
    >
      <div className="">
        <img
          loading="lazy"
          className="w-full h-64 object-cover rounded hover:scale-105 transition-all duration-200"
          src={watch.image}
          alt={watch.alt}
        />
      </div>
      <h2 className="mask-b-from-55%">{watch.title}</h2>
      <p className="mask-b-from-55%">R {watch.price}</p>
    </main>
  );
};

export default React.memo(WatchCard);
