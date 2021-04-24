import React from "react";
import "../Styles/ActiveCategory.css";
import { motion } from "framer-motion";
import { pageTransition, pageVariants } from "../Global/GlobalVariables";

const ActiveCategory = ({ text, className }) => {
  return (
    <>
      <motion.div
        className={className}
        initial="out"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
      >
        <h1 id="ac">{text}</h1>
      </motion.div>
    </>
  );
};

export default ActiveCategory;
