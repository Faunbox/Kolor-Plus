import React from "react";
import { Helmet } from "react-helmet-async";
import ActiveCategory from "./ActiveCategory";
import GalleryImages from "./GalleryImages";
import GalleryImages2 from "./GalleryImages2";
import "../App.css";

const Gallery = () => {
  return (
    <>
      <Helmet>
        <meta
          name="keywords"
          content="lakiery żywiec, lakiery samochodowe żywiec, lakiery samochodowe zywiec, lakiery zywiec, novol, drtc, chowaniec cromax, spectral, 3M, lakiery samochodowe żywiec, autolakiery, autolakiery żywiec, rozcieńczalniki, materiały polerskie, lakiery akrylowe, podkłady epoksydowe, szpachlówki, auto detailing, utwardzacze, emalie przemysłowe, zaopatrzenie hurt / detal, masy uszczelniające, wyposażenie lakierni, dodatki, materiały pomocnicze, nitro, rozpuszczalniki, kleje, kosmetyka samochodowa, zaopatrzenie lakierni"
        />
        <meta
          name="description"
          content="Galeria zdjęć przedstawiająca sklep Kolor Plus oraz certyfikaty."
        />
        <title>Kolor Plus - Galeria</title>
      </Helmet>
      <ActiveCategory text="Galeria" className="acWrapper wrapper" />
      <GalleryImages text="Zdjęcia naszego sklepu oraz asortymentu" />
      <GalleryImages2 text="Certyfikaty i szkolenia" />
    </>
  );
};

export default Gallery;
