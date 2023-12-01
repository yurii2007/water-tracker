import React from "react";
import { BrowserRouter } from "react-router-dom";
import 'modern-normalize/modern-normalize.css';

import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter basename="/water-tracker">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
