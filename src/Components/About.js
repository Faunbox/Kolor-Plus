import React, { Component } from "react";
import "../Styles/About.css";
import "../App.css";
import { pageTransition, pageVariants } from "../Global/GlobalVariables";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import ActiveCategory from "./ActiveCategory";
import Aso1 from "../images/cromax puszki.webp";
import Aso2 from "../images/sklep 1 (1).webp";
import { motion } from "framer-motion";

const images = [Aso1, Aso2];

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photoIndex: 0,
      isOpen: false,
    };
  }

  render() {
    const { photoIndex, isOpen } = this.state;
    return (
      <>
        <ActiveCategory text="O nas" className="acWrapper wrapper" />
        <motion.div
          className="aboutWrapper wrapper"
          initial="out"
          animate="in"
          exit="out"
          variants={pageVariants}
          transition={pageTransition}
        >
          <div className="about">
            <p className="about">
              Firma Kolor-Plus powstała w 1992r. Jesteśmy autoryzowanym
              dystrybutorem marki Cromax (dawniej Dupont). Nasze blisko
              30-letnie doświadczenie przekłada się na ogromne zasoby wiedzy i
              profesjonalną obsługę oraz sieć zaufanych dostawców i zadowolonych
              odbiorców. Zaopatrujemy warsztaty blacharsko-lakiernicze, serwisy,
              sklepy, klientów indywidualnych oraz odbiorców przemysłowych w
              województwach śląskim i małopolskim.
            </p>
            <img
              onClick={() => this.setState({ isOpen: true, photoIndex: 0 })}
              src={images[0]}
              alt="zaopatrzenie sklepu 3M"
              className="aboutImages"
            />
          </div>

          <div className="about">
            <p className="about">
              Stale się rozwijamy i wprowadzamy do naszej oferty najnowsze
              rozwiązania technologiczne opracowywane przez naszych partnerów
              oraz nowe produkty, starając się sprostać oczekiwaniom klientów i
              pozostając konkurencyjnymi na rynku. W naszej ofercie znajdują się
              produkty dostosowane jakościowo i cenowo do warsztatów i lakierni
              rożnych wielkości tak aby każdy mógł znaleźć coś dla siebie. W
              naszym sklepie specjalizujemy się w doborze lakierów
              samochodowych.
            </p>
            <img
              onClick={() => this.setState({ isOpen: true, photoIndex: 1 })}
              src={images[1]}
              alt="Novol Boll zaopatrzenie"
              className="aboutImages"
            />
          </div>
          <p className="mainColumn">
            <strong>Misja:</strong>
            <br />
            Doskonały kolor i doskonała obsługa
          </p>
        </motion.div>

        {isOpen && (
          <Lightbox
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + images.length - 1) % images.length,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % images.length,
              })
            }
          />
        )}
      </>
    );
  }
}

export default About;
