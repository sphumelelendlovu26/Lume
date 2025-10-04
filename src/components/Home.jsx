import Scene from "../Scene";
import FeaturePage from "./FeaturePage";
import LandingPage from "./LandingPage";

const Home = () => {
  return (
    <main>
      <Scene />
      <LandingPage />
      <FeaturePage />
      <section
        id="page3"
        className="h-[100vh] p-5 relative flex flex-col justify-center items-center text-shadow-md text-shadow-white"
      >
        <h2 className="text-4xl sm:text-6xl font-semibold text-center mb-5 subHeader4">
          Crafted for Every Moment
        </h2>
        <p className="text-center max-w-3xl text-lg sm:text-2xl paragraph4">
          From boardrooms to mountain peaks, our timepieces are built to elevate
          your journey. Experience the fusion of durability, elegance, and
          innovation — wherever life takes you.
        </p>
        <div className="mt-10 flex gap-5 sm:gap-10">
          <button className="px-6 py-3 rounded bg-black text-white text-lg discoverBtn">
            Explore Collections
          </button>
          <button className="px-6 py-3 rounded border border-black text-black text-lg discoverBtn">
            Book a Virtual Try-On
          </button>
        </div>
      </section>
    </main>
  );
};

export default Home;
