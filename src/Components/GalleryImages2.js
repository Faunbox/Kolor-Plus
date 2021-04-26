import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import React, { Component } from "react";
import "../Styles/Gallery.css";
import { motion } from "framer-motion";
import Aso1 from "../images/certyfikat1-min.jpg";
import Aso2 from "../images/certyfikat2-min.jpg";
import Aso3 from "../images/certyfikat4-min.jpg";
import Aso4 from "../images/certyfikat3-min.jpg";

const images = [Aso1, Aso2, Aso3, Aso4];
const alts = [
  "profesjonalne techniki sprzedaży",
  "Cromax",
  "doskonała obsługa klienta",
  "cetryfikat Cromax",
];

const pageVariants = {
  in: {
    opacity: 1,
    scale: 1,
  },
  out: {
    opacity: 0,
    scale: 0.8,
  },
};

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 1,
};

class GalleryImages extends Component {
  state = {
    photoIndex: 0,
    isOpen: false,
  };
  render() {
    const { photoIndex, isOpen } = this.state;
    return (
      <motion.div
        className="GalleryWrapper"
        initial="out"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
      >
        <p className="gallery">{this.props.text}</p>
        <div className="GalleryImages">
          {images.map((image, id) => {
            return (
              <img
                onClick={() => this.setState({ isOpen: true, photoIndex: id })}
                key={id}
                src={image}
                alt={alts[id]}
                className="galleryImages"
              />
            );
          })}
        </div>

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
      </motion.div>
    );
  }
}

export default GalleryImages;
