import React, { useEffect, useRef } from "react";
import ActiveCategory from "./ActiveCategory";
import "../Styles/Contacts.css";
import {
  faMapMarkedAlt as localization,
  faEnvelope as mail,
  faPhoneAlt as phone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../App.css";
import {motion} from 'framer-motion'
import gsap from 'gsap'

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



const Contacts = () => {

  const mapRef = useRef(null)

  useEffect(() => {
    const map = mapRef.current

    gsap.set(map, {autoAlpha:0, x:"50px"})
    gsap.to(map, {autoAlpha:1, x:0, duration:1.5, stagger:0.3, ease:"Power1.out"})
})
  return (
    <>
      <ActiveCategory text="Kontakt" class="acWrapper wrapper"/>
      <motion.div className="contactWrapper wrapper" initial="out"
         animate="in"
         exit="out"
         variants={pageVariants}
         transition={pageTransition}>
        <div className="contactTab">
          <div className="contactAdress">
            <FontAwesomeIcon icon={localization} />
            <a
              className="contact"
              href="https://www.google.com/maps/place/Kolor-Plus+s.c.+Glajc-Chowaniec+Beata,+Chowaniec+Marian/@49.682271,19.2092888,15z/data=!4m2!3m1!1s0x0:0x6b416dd2a3e1abb7?sa=X&ved=2ahUKEwjK4cjLmsDrAhWwl4sKHVpfBY8Q_BIwCnoECBcQCA"
            >
              Aleja Marszałka Józefa Piłsudskiego 80, 34-300 Żywiec
            </a>
          </div>
          <div className="contactTelephone">
            <FontAwesomeIcon icon={phone} />

            <a className="contact" href="tel:602-271-079">
              602-271-079
            </a>
          </div>
          <div className="contactEmail">
            <FontAwesomeIcon icon={mail} />
            <a className="contact" href="mailto:biuro@kolorplus.com.pl">
              biuro@kolorplus.com.pl
            </a>
          </div>
        </div>
        <div className="map" ref={mapRef}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d645.3787768580913!2d19.208741629208!3d49.68227186644041!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4714289c9f123d01%3A0x6b416dd2a3e1abb7!2sKolor-Plus%20s.c.%20Glajc-Chowaniec%20Beata%2C%20Chowaniec%20Marian!5e0!3m2!1spl!2spl!4v1596474761100!5m2!1spl!2spl"
            width="700"
            height="400"
            frameBorder="0"
            satelite="true"
            title="map"
            allow="fullscreen"
          ></iframe>
        </div>
      </motion.div>
    </>
  );
};

export default Contacts;
