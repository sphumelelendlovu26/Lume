import { KTX2Loader } from "three/examples/jsm/loaders/KTX2Loader";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { WebGLRenderer } from "three";

// Create a temporary WebGLRenderer
const renderer = new WebGLRenderer();
const ktx2Loader = new KTX2Loader()
  .setTranscoderPath(
    "https://cdn.jsdelivr.net/gh/mrdoob/three.js/examples/js/libs/basis/"
  )
  .detectSupport(renderer);

GLTFLoader.prototype.setKTX2Loader?.(ktx2Loader);
