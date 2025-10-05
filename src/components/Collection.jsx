import WatchCard from "./WatchCard";
import { useEffect } from "react";
const Collection = ({
  setModalIsOpen,
  setSelectedModelId,
  setSelectedModel,
  selectedModelId,
}) => {
  const watches = [
    {
      id: 1,
      title: "Chronograph Watch",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel commodi aperiam unde laborum minus, pariatur fuga ipsa quaerat incidunt dolores, facere veritatis rerum laboriosam tenetur autem corrupti, reiciendis consectetur repudiandae",
      price: 4999,
      image: "/chronograph_watch/chronograph_watch.JPG",
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

  useEffect(() => {
    const selected = watches.find((watch) => watch.id === selectedModelId);
    if (selected) {
      setSelectedModel(selected);
    }
  }, [selectedModelId]);

  return (
    <main className="w-[95vw]  container  ">
      <div className="flex gap-2 flex-wrap justify-center items-center  overflow-scroll">
        {watches.map((watch) => (
          <WatchCard
            key={watch.id}
            watch={watch}
            setModalIsOpen={setModalIsOpen}
            setSelectedModelId={setSelectedModelId}
          />
        ))}
      </div>
    </main>
  );
};

export default Collection;
