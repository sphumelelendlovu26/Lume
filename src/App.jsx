import Scene from "./scene";
import FeaturePage from "./components/FeaturePage";
import LandingPage from "./components/LandingPage";
import Navbar from "./components/Navbar";
import Lenis from "lenis";
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    window.scrollTo(0, 0);
    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="h-[300vh]">
      <Navbar />
      <Scene />
      <LandingPage />
      <FeaturePage />
      <section id="page3" className="h-[100vh] ">
        <h1 className="text-center">page 3</h1>
      </section>
    </div>
  );
};

export default App;
