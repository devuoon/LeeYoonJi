import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./reset.css";
import Header from "./components/common/header.js";
import Page1 from "./components/page1/index";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Header />
    <Page1 />
  </React.StrictMode>
);
