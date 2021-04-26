import React, { lazy } from "react";
import MainSection from "./MainSection";
import "../App.css";

const Slider = lazy(() => import("./DBSlider"));

const Main = () => {
  return (
    <>
      <Slider />
      <MainSection />
    </>
  );
};

export default Main;
