import React from 'react';
import ActiveCategory from "./ActiveCategory";
import "../Styles/Color.css";
import Chroma from "../images/Chroma.png";
import Chroma2 from "../images/Chroma2.png";
import Chroma3 from "../images/Chroma3.png";
import Chroma4 from '../images/natrysk.webp'
import {motion } from 'framer-motion'

const pageVariants = {
  in: {
    opacity: 1,
    scale: 1,
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

const Color = () => {
  const images = [Chroma, Chroma2, Chroma3, Chroma4];



  return (
    <>
      <ActiveCategory text="Kolory" class="acWrapper wrapper"/>
      <motion.div className="colorWrapper wrapper" initial="out"
         animate="in"
         exit="out"
         variants={pageVariants}
         transition={pageTransition}>
           <div className="color">
        <img className="color" alt="dobór koloru" src={images[3]} />
        <p className="color"> <strong>W naszym sklepie specjalizujemy się w doborze lakierów samochodowych.</strong><br/> Z doświadczenia wiemy, że do każdego lakieru trzeba podejść
          indywidualnie.<br/> Numer koloru jest pomocny ale nie gwarantuje dobrze
          dobranego koloru. Dorobienie lakieru to odpowiedzialność po obu
          stronach, zarówno naszej jak i klienta. Zawsze prosimy o element
          samochodu bądź wycięty kawałek, ewentualnie zostawienie nam samochodu
          na parkingu na określony czas. Klient powinien również zwrócić uwagę
          czy przyniesiony element nie był już wcześniej lakierowany/cieniowany,
          gdyż może to prowadzić do pomyłki przy dobieraniu odcienia.
          </p>    
          </div>
        <div className="color">
          <img className="color" alt="ChromaWeb Cromax" src={images[0]} />
          <p className="color first">
          <strong>Posiadamy ogromną bazę receptur z całego świata,</strong> która codziennie w
            czasie rzeczywistym jest uaktualniana i poszerzana poprzez stałe
            połączenie z chmurą. Mamy receptury na prawie każdy kolor
            samochodowy (w tym Mazda 46V, Mazda 46G, Mitsubishi P62), większość
            przemysłowych a także wiele motocyklowych.
          </p>
        </div>
        <div className="color">
          <img className="color" alt="Chromavision" src={images[1]} />
          <p className="color">
          <strong>Używamy nowoczesnych narzędzi takich jak spektrofotometr
            Chromavision Pro Mini</strong>, który jako jeden z pierwszych potrafi
            odczytywać w kolorze ziarna metaliczne, perłowe i xyrallic oraz
            lampa imitująca światło słoneczne, dzięki której jesteśmy w stanie
            sprawdzić lakier <strong>w każdych warunkach.</strong>
          </p>
        </div>
        
        <div className="color last">
        <p className="color last"><strong>Na ostateczny odcień
          składa się wiele czynników, takich jak: </strong></p>
          <ul className="color">
            <li className="color">• ciśnienie natrysku,</li>
            <li className="color">• rozmiar dyszy,</li> 
            <li className="color">• ilość warstw,</li> 
            <li className="color">• grubość warstw,</li> 
            <li className="color">• „wypylenie” lub „wylanie” lakieru,</li> 
            <li className="color">• odległość pistoletu od elementu oraz wiele innych.</li>
          </ul>
        <p className="color last">Sprawdzamy każdy lakier poprzez natrysk próbny i poprawiamy go, aż do uzyskania odpowiedniego odcienia.</p>
        <img className="color last" alt="sprawdzanie lakieru" src={images[2]} /> 
        </div>
      </motion.div>
    </>
  );
};

export default Color;
