import Navbar from "./components/Navbar";
import Lenis from "lenis";
import { lazy, Suspense, useEffect, useState } from "react";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import MobileNav from "./components/MobileNav";

//lazy-loaded components
const About = lazy(() => import("./components/About"));
const Collection = lazy(() => import("./components/Collection"));
import Modal from "./components/Modal";
const Login = lazy(() => import("./components/Login"));
const Cart = lazy(() => import("./components/Cart"));

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
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [navIsOpen, setNavIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <BrowserRouter>
      <Layout>
        <Navbar
          isMobile={isMobile}
          setNavIsOpen={setNavIsOpen}
          navIsOpen={navIsOpen}
        />

        <Routes>
          <Route path="/" element={<Home isMobile={isMobile} />} />
          <Route
            path="/collection"
            element={
              <Suspense>
                <Collection
                  setModalIsOpen={setModalIsOpen}
                  setSelectedModelId={setSelectedModelId}
                  setSelectedModel={setSelectedModel}
                  selectedModelId={selectedModelId}
                />
              </Suspense>
            }
          />
          <Route
            path="/about"
            element={
              <Suspense>
                <About />
              </Suspense>
            }
          />
          <Route
            path="/login"
            element={
              <Suspense>
                <Login />
              </Suspense>
            }
          />
          <Route
            path="/cart"
            element={
              <Suspense>
                <Cart />
              </Suspense>
            }
          />
        </Routes>
        {modalIsOpen && (
          <Modal
            setModalIsOpen={setModalIsOpen}
            selectedModel={selectedModel}
          />
        )}
        {navIsOpen && <MobileNav />}
      </Layout>
    </BrowserRouter>
  );
};

export default App;
