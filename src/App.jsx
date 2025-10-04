import Navbar from "./components/Navbar";
import Lenis from "lenis";
import { useEffect, useState } from "react";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Collection from "./components/Collection";
import Modal from "./components/Modal";
import { useLocation } from "react-router-dom";
import Layout from "./components/Layout";
const App = () => {
  //lenis scroll configuration
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

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedModelSrc, setSelectedModelSrc] = useState(null);

  return (
    <BrowserRouter>
      <Layout>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/collection"
            element={
              <Collection
                setModalIsOpen={setModalIsOpen}
                setSelectedModelSrc={setSelectedModelSrc}
              />
            }
          />
          <Route path="/about" element={<About />} />
        </Routes>
        {modalIsOpen && (
          <Modal
            setModalIsOpen={setModalIsOpen}
            selectedModelSrc={selectedModelSrc}
          />
        )}
      </Layout>
    </BrowserRouter>
  );
};

export default App;
