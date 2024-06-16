import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./reset.css";
import "./font.css";
import ProgressBar from "react-scroll-progress-bar";
import Header from "./components/common/header.js";
import Page1 from "./components/page1/index";
import Page2 from "./components/page2/index";
import Page3 from "./components/page3/index2";
import Page4 from "./components/page4/index";
import Page5 from "./components/page5/index";
import Footer from "./components/common/footer";
import Toptoscroll from "./components/common/topscroll";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ProgressBar
      height="4px"
      bgcolor="#a84fff"
      duration="1"
      border-radius="5px"
    />
    <Header />
    <Toptoscroll />
    <Page1 />
    <Page2 />
    <Page3 />
    {/*<Page4 />*/}
    <Page5 />
    <Footer />
  </React.StrictMode>
);
