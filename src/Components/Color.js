import React from "react";
import ActiveCategory from "./ActiveCategory";
import "../Styles/Color.css";
import Chroma from "../images/Chroma.png";
import Chroma2 from "../images/Chroma2.png";
import Chroma3 from "../images/Chroma3.png";
import Chroma4 from "../images/natrysk.webp";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { pageTransition, pageVariants } from "../Global/GlobalVariables";

const Color = () => {
  const images = [Chroma, Chroma2, Chroma3, Chroma4];

  return (
    <>
    <Helmet>
    <meta
          name="keywords"
          content="lakiery żywiec, lakiery samochodowe żywiec, lakiery samochodowe zywiec, lakiery zywiec, novol, cromax, spectral, 3M, lakiery samochodowe żywiec, autolakiery, autolakiery żywiec, rozcieńczalniki, materiały polerskie, lakiery akrylowe, podkłady epoksydowe, szpachlówki, auto detailing, utwardzacze, emalie przemysłowe, dobór lakieru, dobor lakieru, masy uszczelniające, wyposażenie lakierni, dodatki, materiały pomocnicze, nitro, rozpuszczalniki, kleje, kosmetyka samochodowa, zaopatrzenie lakierni"
        />
    <meta
          name="description"
          content="Nasza firma zajmuje się sprzedażą lakierów samochodowych. Konserwacje, wyposażenie lakierni, spraye, farby, akcesoria lakiernicze."
        />
      <title>Kolor Plus - Kolor</title>
    </Helmet>
      <ActiveCategory text="Kolory" className="acWrapper wrapper" />
      <motion.div
        className="colorWrapper wrapper"
        initial="out"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
      >
        <div className="color">
          <img className="color" alt="dobór koloru" src={images[3]} />
          <p className="color">
            {" "}
            <strong>
              W naszym sklepie specjalizujemy się w doborze kolorów różnych
              powłok.
            </strong>
            <br />
            Do każdego lakieru podchodzimy indywidualnie.
            <br /> Numer koloru jest pomocny ale nie gwarantuje dobrze dobranego
            koloru. Klienta prosimy o dostarczenie wzoru lakieru w postaci:
            <br />- elementu samochodu
            <br />- kawałka wyciętej blachy
            <br />- lub przyjazdu samochodem
          </p>
        </div>
        <p className="color bold">
          Sprawdzamy każdy lakier poprzez natrysk próbny i poprawiamy go, aż do
          uzyskania odpowiedniego odcienia.
        </p>
        <div className="color">
          <img className="color" alt="ChromaWeb Cromax" src={images[0]} />
          <p className="color first">
            <strong>Posiadamy bazę receptur z całego świata,</strong> która
            codziennie w czasie rzeczywistym jest uaktualniana i poszerzana.
            Posiadamy receptury na kolory:
            <br />- samochodowe (w tym Mazda 46V, Mazda 46G, Mitsubishi P62,
            Ford E7)
            <br />- przemysłowe
            <br />- motocyklowe
            <br />- inne
          </p>
        </div>
        <div className="color">
          <img className="color" alt="Chromavision" src={images[1]} />
          <p className="color">
            <strong>
              Używamy nowoczesnych narzędzi takich jak spektrofotometr
              Chromavision Pro Mini
            </strong>
            , który jako jeden z pierwszych potrafi odczytywać w kolorze ziarna
            metaliczne, perłowe i xyrallic oraz lampa imitująca światło
            słoneczne, dzięki której jesteśmy w stanie sprawdzić lakier{" "}
            <strong>w każdych warunkach.</strong>
          </p>
        </div>

        <div className="color last">
          <p className="color last">
            <strong>
              Na ostateczny odcień składa się wiele czynników, takich jak:{" "}
            </strong>
          </p>
          <ul className="color">
            <li className="color">• ciśnienie natrysku,</li>
            <li className="color">• rozmiar dyszy,</li>
            <li className="color">• ilość warstw,</li>
            <li className="color">• grubość warstw,</li>
            <li className="color">• „wypylenie” lub „wylanie” lakieru,</li>
            <li className="color">
              • odległość pistoletu od elementu oraz wiele innych.
            </li>
          </ul>

          <img
            className="color last"
            alt="sprawdzanie lakieru"
            src={images[2]}
          />
        </div>
      </motion.div>
    </>
  );
};

export default Color;
