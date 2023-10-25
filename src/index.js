import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./reset.css";
import "./font.css";
import Header from "./components/common/header.js";
import Page1 from "./components/page1/index";
import Page2 from "./components/page2/index";
import Page3 from "./components/page3/index";
import Page4 from "./components/page4/index";
import Page5 from "./components/page5/index";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Header />
    <Page1 />
    <Page2 />
    <Page3 />
    <Page4 />
    <Page5 />
  </React.StrictMode>
);
