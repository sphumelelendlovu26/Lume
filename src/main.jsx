import { createRoot } from "react-dom/client";
import "./index.css";
import "./setupKTX2Loader.js";
import App from "./App.jsx";
import { store } from "./components/store.jsx";
import { Provider } from "react-redux";
createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
