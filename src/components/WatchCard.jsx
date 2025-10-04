const WatchCard = ({ watch, setModalIsOpen, setSelectedModelId }) => {
  return (
    <main
      className="shadow-lg watchCard flex flex-col items-center gap-5   rounded  hover:cursor-pointer "
      onClick={() => {
        setModalIsOpen(true);
        setSelectedModelId(watch.id);
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
