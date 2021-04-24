import React from "react";
import "../Styles/Footer.css";
import {
  faMapMarkedAlt as localization,
  faEnvelope as mail,
  faPhoneAlt as phone,
  faArrowRight as arrow,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BottomFooter from "./BottomFooter";
import "../App.css";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footerWrapper wrapper">
          <div className="FAdres">
            <h1 className="FAdres">Adres</h1>
            <section className="FAdres">
              <a className="FAdres" href="https://www.google.com/maps/place/Kolor-Plus+s.c.+Glajc-Chowaniec+Beata,+Chowaniec+Marian/@49.682271,19.2092888,15z/data=!4m2!3m1!1s0x0:0x6b416dd2a3e1abb7?sa=X&ved=2ahUKEwjK4cjLmsDrAhWwl4sKHVpfBY8Q_BIwCnoECBcQCA">
                <FontAwesomeIcon icon={localization} />
                Aleja Marszałka Józefa Piłsudskiego 80, 34-300 Żywiec
              </a>
              <p className="hours">
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
                <br />
                Niedziela - nieczynne
              </p>
            </section>
          </div>
          <div className="FData">
            <h1 className="FData">Dane firmy</h1>
            <p className="FData">
              <FontAwesomeIcon icon={arrow} />
              Kolor-Plus s.c. Glajc-Chowaniec Beata, Chowaniec Marian
            </p>
            <p className="FData">
              <FontAwesomeIcon icon={arrow} />
              NIP: 5471008558
            </p>
            <p className="FData">
              <FontAwesomeIcon icon={arrow} />
              Regon: 241635803
            </p>
          </div>
          <div className="FTelephone">
            <h1 className="FTelephone">Telefon</h1>
            <p className="FTelephone">
              <FontAwesomeIcon icon={phone} />
              Telefon Marcin: <a href="tel:+48 693 699 079">+48 693 699 079</a>
            </p>
            <p className="FTelephone">
              <FontAwesomeIcon icon={phone} />
              Telefon Bossu: <a href="tel:+48 693 699 079">+48 693 699 079</a>
            </p>
          </div>
          <div className="FEmail">
            <h1 className="FEmail">Napisz do nas!</h1>
            <p className="FEmail">
              <FontAwesomeIcon icon={mail} />
              <a href="mailto:faunbox2@gmail.com">biuro@kolorplus.com.pl</a>
            </p>
            <p className="FEmail">
              <FontAwesomeIcon icon={mail} />
              <a href="mailto:marian@kolorplus.com.pl">
                marian@kolorplus.com.pl
              </a>
            </p>
            <p className="FEmail">
              <FontAwesomeIcon icon={mail} />
              <a href="mailto:beata@kolorplus.com.pl">beata@kolorplus.com.pl</a>
            </p>
          </div>
        </div>
      </footer>
      <BottomFooter />
    </>
  );
};

export default Footer;
