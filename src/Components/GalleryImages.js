import React, { Component, } from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import "../Styles/Gallery.css";
import {motion} from 'framer-motion'
import Image1 from "../images/front.webp";
import Image2 from "../images/przód.webp";
import Image3 from "../images/srodek2.webp";
import Image4 from "../images/środek1.webp";
import Image5 from "../images/srodek4.webp";
import Image6 from "../images/spraye.webp";
import Image7 from "../images/srodek3.webp";

const image = [Image1, Image2, Image3, Image4, Image5, Image6, Image7]

const alts = ["kolor-plus żywiec", "sklep z lakierami Żywiec", "mieszalnia lakierów", "zaopatrzenie sklepu", "zaopatrzenie sklepu","lakiery w sprayu", "asortyment"]

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


class GalleryImages extends Component {
  state = {
    photoIndex: 0,
    isOpen: false,
  };


  render() {
    const { photoIndex, isOpen } = this.state;
    return (
      <motion.div className="GalleryWrapper" initial="out"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}>
        <p className="gallery">{this.props.text}</p>
        <div className="GalleryImages">
          {image.map((image, id) => { return <img
          onClick={() => this.setState({ isOpen: true, photoIndex: id })}
          key={id}
          src={image}
          alt={alts[id]}
          className="galleryImages"
        />
            }
          )}        
        </div>

        {isOpen && (
          <Lightbox
            mainSrc={image[photoIndex]}
            nextSrc={image[(photoIndex + 1) % image.length]}
            prevSrc={image[(photoIndex + image.length - 1) % image.length]}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + image.length - 1) % image.length,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % image.length,
              })
            }
          />
        )}
      </motion.div>
    );
  }
}

export default GalleryImages;
