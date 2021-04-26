import React from "react";
import "../Styles/MainSection.css";
import "../App.css";
import { motion } from "framer-motion";
import frontImg from "../images/front.webp";
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
            <img
              className="main-image"
              src={frontImg}
              loading="auto"
              alt="Kolor-Plus sklep"
            />
            <div className="main">
              <p className="textMain news">
                <strong>W naszej ofercie znajdziecie Państwo:</strong>
              </p>
              <ul className="main">
                {products.map((product, i) => (
                  <li className="main" key={i}>
                    {product}
                  </li>
                ))}
              </ul>
            </div>
          </section>
          <p className="mainColumn">
            <strong>Misja:</strong>
            <br />
            Doskonały kolor i doskonała obsługa
          </p>
        </div>
        <div className="line"></div>
        <News />
      </motion.div>
    </>
  );
};

export default MainSection;
