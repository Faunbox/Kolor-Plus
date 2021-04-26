import React from "react";
import ActiveCategory from "./ActiveCategory";
import BrandImages from "./BrandImages";
import ProductsInfo from "./ProductsInfo";
import "../Styles/Products.css";
import "../App.css";
import { motion } from "framer-motion";

import { pageTransition, pageVariants } from "../Global/GlobalVariables";

const Products = () => {
  return (
    <>
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
