import React from "react";
import ReactDOM from "react-dom/client";
import "./app.css";
import { Provider } from "react-redux";
import store from "./app/store";
import App from "./app/app";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
