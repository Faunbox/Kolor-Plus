import React, { useEffect, useRef } from "react";
import ActiveCategory from "./ActiveCategory";
import "../Styles/Contacts.css";
import {
  faMapMarkedAlt as localization,
  faPhoneAlt as phone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../App.css";
import { motion } from "framer-motion";
import { pageTransition, pageVariants } from "../Global/GlobalVariables";
import gsap from "gsap";
import { Helmet } from "react-helmet-async";

const Contacts = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    const map = mapRef.current;

    gsap.set(map, { autoAlpha: 0, x: "50px" });
    gsap.to(map, {
      autoAlpha: 1,
      x: 0,
      duration: 1.5,
      stagger: 0.3,
      ease: "Power1.out",
    });
  });
  return (
    <>
      <Helmet>
        <meta
          name="keywords"
          content="lakiery żywiec, lakiery samochodowe żywiec, lakiery samochodowe zywiec, lakiery zywiec, novol, cromax, spectral, 3M, lakiery samochodowe żywiec, autolakiery, autolakiery żywiec, rozcieńczalniki, materiały polerskie, lakiery akrylowe, podkłady epoksydowe, szpachlówki, auto detailing, utwardzacze, emalie przemysłowe, zaopatrzenie hurt / detal, masy uszczelniające, wyposażenie lakierni, dodatki, materiały pomocnicze, nitro, rozpuszczalniki, kleje, kosmetyka samochodowa, zaopatrzenie lakierni"
        />
        <meta
          name="description"
          content="Kontakt z firmą Kolor Plus - lakiery samochodowe"
        />
        <title>Kolor Plus - Kontakt</title>
      </Helmet>
      <ActiveCategory text="Kontakt" className="acWrapper wrapper" />
      <motion.div
        className="contactWrapper wrapper"
        initial="out"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
      >
        <div className="contactTab">
          <div className="contactAdress">
            <FontAwesomeIcon icon={localization} />
            <span className="hours">Godziny otwarcia:</span>
            <br /> Poniedziałek - 08:00–16:00
            <br /> Wtorek - 08:00–16:00
            <br /> Środa - 08:00–16:00
            <br />
            Czwartek - 08:00–16:00
            <br />
            Piątek - 08:00–16:00
            <br />
            Sobota - 09:00 - 13:00
          </div>
          <div className="contactTelephone">
            <FontAwesomeIcon icon={phone} />
            <a className="contact" href="tel:33 8618084 ">
              33 861 80 84
            </a>
          </div>
        </div>
        <div className="map" ref={mapRef}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10326.060613743473!2d19.2092888!3d49.682271!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x6b416dd2a3e1abb7!2sKolor-Plus%20s.c.%20Glajc-Chowaniec%20Beata%2C%20Chowaniec%20Marian!5e0!3m2!1spl!2spl!4v1619607844571!5m2!1spl!2spl"
            width="700"
            height="400"
            style={{ border: 0 }}
            satelite="true"
            title="map"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </motion.div>
    </>
  );
};

export default Contacts;
