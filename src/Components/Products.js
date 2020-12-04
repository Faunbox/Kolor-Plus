import React from "react";
import ActiveCategory from "./ActiveCategory";
import BrandImages from "./BrandImages";
import ProductsInfo from "./ProductsInfo";
import "../Styles/Products.css";
import "../App.css";
import {motion} from 'framer-motion'

const pageVariants = {
  in: {
    opacity: 1,
    scale: 1
  },
  out: {
    opacity:0,
    scale:0.8,
  }
}

const pageTransition = {
  type:"tween",
  ease:"anticipate",
  duration: 0.7,
}

const Products = () => {
  return (
    <>
      <ActiveCategory text="Produkty" class="acWrapper wrapper"/>
      <motion.div className="brandWrapper" initial="out"
         animate="in"
         exit="out"
         variants={pageVariants}
         transition={pageTransition}>
        <ProductsInfo />
        <BrandImages />
      </motion.div>
    </>
  );
};

export default Products;
