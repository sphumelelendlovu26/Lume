const WatchCard = ({ watch, setModalIsOpen, setSelectedModelSrc }) => {
  return (
    <main
      className="shadow-lg border flex flex-col items-center m-4 size-1/2 rounded  hover:cursor-pointer"
      onClick={() => {
        setModalIsOpen(true);
        setSelectedModelSrc(watch.src);
      }}
    >
      <div className="">
        <img
          className="w-full h-64 object-cover rounded-t"
          src={watch.image}
          alt={watch.alt}
        />
      </div>
      <h2>{watch.title}</h2>
      <p>R {watch.price}</p>
    </main>
  );
};

export default WatchCard;
