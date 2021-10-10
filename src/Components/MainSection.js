import React from "react";
import "../Styles/MainSection.css";
import "../App.css";
import { motion } from "framer-motion";
import frontImg from "../images/front.webp";
import frontImgMin from "../images/front.min.webp";
import News from "./News.js";

import { pageTransition, pageVariants } from "../Global/GlobalVariables";

const products = [
  "– lakiery",
  "– szpachlówki",
  "– podkłady",
  "– środki do konserwacji",
  "– taśmy klejące",
  "– kleje",
  "– masy uszczelniające",
  "– materiały ścierne",
  "– materiały do polerowania",
  "– lakiery SPRAY",
  "– rozcieńczalniki i zmywacze",
  "– kombinezony i rękawiczki",
  "– zaprawki z pędzelkiem",
  "– odrdzewiacze",
  "– pistolety lakiernicze i do konserwacji",
  "– polerki i szlifierki",
];

const MainSection = () => {
  return (
    <>
      <motion.div
        className="mainSection wrapper"
        initial="out"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
      >
        <div id="news" className="mainColumn">
          <section className="textMain">
            <picture>
              <source media="(max-width: 800px)" srcSet={frontImgMin} />
              <img
                className="main-image"
                src={frontImg}
                loading="auto"
                alt="Kolor Plus sklep"
              />
            </picture>
            <div className="main">
              <p className="textMain news">
                <strong>W naszej ofercie znajdziecie Państwo:</strong>
              </p>
              <ul className="main">
                {products.map((product) => (
                  <li className="main" key={product}>
                    {product}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </div>
        <div className="line"></div>
        <News />
      </motion.div>
    </>
  );
};

export default MainSection;
