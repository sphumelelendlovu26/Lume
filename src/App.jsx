import Navbar from "./components/Navbar";
import Lenis from "lenis";
import { useEffect, useState } from "react";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Collection from "./components/Collection";
import Modal from "./components/Modal";

import Layout from "./components/Layout";
import Cart from "./components/Cart";
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
  const [selectedModelId, setSelectedModelId] = useState(null);
  const [selectedModel, setSelectedModel] = useState(null);

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
                setSelectedModelId={setSelectedModelId}
                setSelectedModel={setSelectedModel}
                selectedModelId={selectedModelId}
              />
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        {modalIsOpen && (
          <Modal
            setModalIsOpen={setModalIsOpen}
            selectedModel={selectedModel}
          />
        )}
      </Layout>
    </BrowserRouter>
  );
};

export default App;
