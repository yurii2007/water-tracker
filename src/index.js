import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";

import store from "./redux/store";

import App from "./App";
import "./index.css";
import "modern-normalize/modern-normalize.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename="/water-tracker">
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
