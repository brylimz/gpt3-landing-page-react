import React from "react";
import "./App.css";
import {
  Blog,
  Features,
  Header,
  Possibility,
  WhatGPT3,
  Footer,
} from "./containers";

import { CTA, Brand, Navbar } from "./components";

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
      </div>
      <Header />
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
