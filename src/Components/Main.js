import React, { lazy } from "react";
import MainSection from "./MainSection";
import { Helmet } from "react-helmet-async";

import "../App.css";

const Slider = lazy(() => import("./DBSlider"));

const Main = () => {
  return (
    <>
      <Helmet>
        <meta
          name="keywords"
          content="lakiery żywiec, lakiery samochodowe żywiec, chowaniec, lakiery samochodowe zywiec, lakiery zywiec, zywiec lakiery samochodowe, żywiec lakiery samochodowe, piłsudskiego, novol, cromax, spectral, 3M, lakiery samochodowe żywiec, autolakiery, autolakiery żywiec, rozcieńczalniki, materiały polerskie, lakiery akrylowe, podkłady epoksydowe, szpachlówki, auto detailing, utwardzacze, emalie przemysłowe, zaopatrzenie hurt / detal, masy uszczelniające, wyposażenie lakierni, dodatki, materiały pomocnicze, nitro, rozpuszczalniki, kleje, kosmetyka samochodowa, zaopatrzenie lakierni"
        />
        <meta
          name="description"
          content="Nasza firma zajmuje się sprzedażą lakierów samochodowych. Konserwacje, wyposażenie lakierni, spraye, farby, akcesoria lakiernicze."
        />
        <title>Kolor Plus - Lakiery samochodowe</title>
      </Helmet>
      <Slider />
      <MainSection />
    </>
  );
};

export default Main;
