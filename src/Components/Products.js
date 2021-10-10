import React from "react";
import ActiveCategory from "./ActiveCategory";
import BrandImages from "./BrandImages";
import ProductsInfo from "./ProductsInfo";
import "../Styles/Products.css";
import "../App.css";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

import { pageTransition, pageVariants } from "../Global/GlobalVariables";

const Products = () => {
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
        <title>Kolor Plus - Produkty</title>
      </Helmet>
      <ActiveCategory text="Produkty" className="acWrapper wrapper" />
      <motion.div
        className="brandWrapper"
        initial="out"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
      >
        <ProductsInfo />
        <BrandImages />
      </motion.div>
    </>
  );
};

export default Products;
