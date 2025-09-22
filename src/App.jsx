import Scene from "./scene";
import FeaturePage from "./components/FeaturePage";
import LandingPage from "./components/LandingPage";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="h-[300vh]">
      <Navbar />
      <Scene />
      <LandingPage />
      <FeaturePage />
      <section className="h-[100vh] border bg-gray-400">
        <h1 className="text-center">page 3</h1>
      </section>
    </div>
  );
};

export default App;
