import WatchCard from "./WatchCard";
const Collection = ({ setModalIsOpen, setSelectedModelSrc }) => {
  const watches = [
    {
      id: 1,
      title: "Chronograph Watch",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel commodi aperiam unde laborum minus, pariatur fuga ipsa quaerat incidunt dolores, facere veritatis rerum laboriosam tenetur autem corrupti, reiciendis consectetur repudiandae",
      price: 4999,
      image: "",
      src: "/chronograph_watch/scene.gltf",
    },
    {
      id: 2,
      title: "Casio Watch",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur nihil mollitia corporis, culpa aliquid totam incidunt dolorem architecto ipsum magnam facilis pariatur id dolores. Nisi perferendis sint cumque rem molestias",
      price: 6999,
      image: "/casio_watch/casio_watch.JPG",
      src: "/casio_watch/scene.gltf",
    },
  ];

  return (
    <main className="w-[95vw] h-[95vh] container ">
      <div className=" gap-3">
        {watches.map((watch) => (
          <WatchCard
            key={watch.id}
            watch={watch}
            setModalIsOpen={setModalIsOpen}
            setSelectedModelSrc={setSelectedModelSrc}
          />
        ))}
      </div>
    </main>
  );
};

export default Collection;
