import React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./styles.css";
import App from "./components/App";

const container = document.getElementById("root");
//const root = ReactDOM.createRoot(container); // createRoot(container!) if you use TypeScript
render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  container
);
