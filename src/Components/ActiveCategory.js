import React from 'react';
import '../Styles/ActiveCategory.css'
import {motion} from 'framer-motion'

const pageVariants = {
    in: {
      opacity: 1,
      scale: 1,
      x:0,
    },
    out: {
      opacity:0,
      scale:0.8,
      x:'-30px'
    }
  }
  
  const pageTransition = {
    type:"tween",
    ease:"anticipate",
    duration: 0.8,
  }

const ActiveCategory = (props) => {
    return ( 
        <>
        <motion.div 
        className={props.class}
        initial="out"
         animate="in"
         exit="out"
         variants={pageVariants}
         transition={pageTransition}>
        <h1 id="ac">{props.text}</h1>
        </motion.div>
        
        </>
     );
}
 
export default ActiveCategory;