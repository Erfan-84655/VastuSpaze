import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import AuthContextProvider from "./Context/AuthContext.jsx";
import { BrowserRouter } from "react-router-dom";
import {Provider} from "react-redux";
import store from "./store/index.js";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ProcessingInstruction>
        <App />
      </ProcessingInstruction>
    </BrowserRouter>
  </StrictMode>,
);
