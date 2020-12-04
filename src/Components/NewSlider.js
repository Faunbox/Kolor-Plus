import React, { useEffect, useState, useRef } from 'react';
import "../Styles/NewSlider.css"
import gsap from 'gsap'
import {motion} from 'framer-motion'

const pageVariants = {
    in: {
      opacity: 1,
      scale: 1,
      y:0,
    },
    out: {
      opacity:0,
      scale:0.8,
      y:"-40px"
    }
  }
  
  const pageTransition = {
    type:"tween",
    ease:"anticipate",
    duration: 1,
  }

const NewSlider = () => {
    const h1Text = ["kosmetyki samochodowe", "Emalie przemysłowe", "poliuretanowa powłoka ochronna", "lakiery samochodowe i zaopatrzenie lakierni"]
    const [ id, setId ] = useState(0);
    const divRef = useRef(null);  
    const h1Ref = useRef(null)  
    
    if(id === h1Text.length) {
        setId(0); 
    }

    useEffect(() => {           
        const TimeoutTime = "5000";
        const h1 = h1Ref.current;
        const div = divRef.current

        gsap.set(h1, {autoAlpha:0})
        gsap.set(div, {backgroundPositionX:"30%", opacity:0.5})
        gsap.fromTo(h1, {x:'+=40%', stagger:0.3}, {delay: 0.2, duration:0.8, autoAlpha:1, x:'0'})
        if (id === 2) {
        gsap.to(div, {duration:1, stagger:0.3 ,backgroundPositionX:"100%", opacity:1})
        } else if (id === 3) {
          gsap.to(div, {duration:1, stagger:0.3 ,backgroundPositionX:"25%", opacity:1})
        } else {
          gsap.to(div, {duration:1, stagger:0.3 ,backgroundPositionX:"50%", opacity:1})
        }
        const counter = setTimeout(() => { 
             
                setId(id + 1);
                      
        }, TimeoutTime);
        return () => clearTimeout(counter)        
    })


    return (           
        <motion.div 
            className={`sliderWrapper background${id}`}
            ref={divRef}
            initial="out"
         animate="in"
         exit="out"
         variants={pageVariants}
         transition={pageTransition}
        >
            <h1
                ref={h1Ref} 
                className="slider"
                >
                {h1Text[id]}
            </h1>
            
        </motion.div>
     );
}
 
export default NewSlider;