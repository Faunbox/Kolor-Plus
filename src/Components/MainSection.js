import React from "react";
import "../Styles/MainSection.css";
import "../App.css";
import { motion } from "framer-motion";
import frontImg from "../images/front.webp";
import News from "./News.js";

const pageVariants = {
  in: {
    opacity: 1,
    scale: 1,
  },
  out: {
    opacity: 0,
    scale: 0.8,
  },
};

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 1.3,
};

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
            <img className="main-image" src={frontImg} alt="Kolor-Plus sklep" />
            <div className="main">
              <p className="textMain news">
                <strong>
                  W naszym sklepie możecie państwo kupić między innymi:
                </strong>
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
            Jako firma z wieloletnim doświadczeniem, profesjonalna obsługa
            naszych klientów jest dla nas priorytetem. Zapewniamy
            najdokładniejszy dobór koloru, fachową poradę i co najważniejsze -{" "}
            <strong>100% satysfakcji.</strong>
          </p>
        </div>
        <div className="line"></div>
        <News />
      </motion.div>
    </>
  );
};

export default MainSection;
