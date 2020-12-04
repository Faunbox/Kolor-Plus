import React from "react";
import "../Styles/MainSection.css";
import newsImg from '../images/family.jpg'
import "../App.css";
import {motion} from 'framer-motion'
import frontImg from '../images/front.webp'


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
  duration: 1.3,
}

const MainSection = () => {
  return (
    <>
    <motion.div 
    className="mainSection wrapper"
    initial="out"
         animate="in"
         exit="out"
         variants={pageVariants}
         transition={pageTransition}>
           <div className="mainColumn">     
        <section className="textMain">
          <img className="main-image" src={frontImg} alt="Kolor-Plus sklep" />
          <div className="main">
          <p className="textMain main"> <strong>W naszym sklepie możecie państwo kupić między innymi:</strong></p>          
          <ul className="main">
            <li className="main">– lakiery</li>
            <li className="main">– szpachlówki</li>
            <li className="main">– podkłady</li>
            <li className="main">– środki do konserwacji</li>
            <li className="main">– taśmy klejące</li>
            <li className="main">– kleje</li>
            <li className="main">– masy uszczelniające</li>
            <li className="main">– materiały ścierne</li>
            <li className="main">– materiały do polerowania</li>
            <li className="main">– lakiery SPRAY</li>
            <li className="main">– rozcieńczalniki i zmywacze</li>
            <li className="main">– kombinezony i rękawiczki</li>
            <li className="main">– zaprawki z pędzelkiem</li>
            <li className="main">– odrdzewiacze</li>
            <li className="main">– pistolety lakiernicze i do konserwacji</li>
            <li className="main">– polerki i szlifierki</li>
          </ul>
          </div>    
          </section>
          <p className="mainColumn">Jako firma z wieloletnim doświadczeniem, profesjonalna obsługa naszych klientów jest dla nas priorytetem. Zapewniamy najdokładniejszy dobór koloru, fachową poradę i co najważniejsze - <strong>100% satysfakcji.</strong></p>
           
      
        
        </div>
        <div className="line"></div>
        <h1 className="news">Aktualności</h1>
        <article className="news">
          <img className='news main-image' alt="novol" src={newsImg} />
          <p className='news textMain'><strong>NOVOL</strong> nie próżnuje i wystartował z programem lojalnościowym <a href="https://nfamily.novol.com/." target="blank">N-family</a>. Dzięki udziałowi w programie zbierasz punkty za zamówienie wybranych produktów NOVOL i odbierasz atrakcyjne nagrody. Dodatkowo jako pierwszy dowiesz się o nowych produktach i ich innowacyjnych właściwościach.
</p>
        </article>
          </motion.div>
    </>
  );
};

export default MainSection;
