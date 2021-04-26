import React from "react";
import "../Styles/Products.css";
import jpgImage1 from "../images/logos/1 (1).jpg";
import jpgImage2 from "../images/logos/1 (2).jpg";
import jpgImage3 from "../images/logos/1 (3).jpg";
import jpgImage4 from "../images/logos/1 (4).jpg";
import jpgImage5 from "../images/logos/1 (5).jpg";
import jpgImage6 from "../images/logos/1 (6).jpg";
import jpgImage7 from "../images/logos/indasta.png";
import jpgImage8 from "../images/logos/1 (8).jpg";
import jpgImage9 from "../images/logos/1 (9).jpg";
import jpgImage11 from "../images/logos/1 (11).jpg";
import jpgImage12 from "../images/logos/1 (12).jpg";
import jpgImage13 from "../images/logos/1 (13).jpg";
import jpgImage14 from "../images/logos/1 (14).jpg";
import jpgImage15 from "../images/logos/1 (15).jpg";
import jpgImage16 from "../images/logos/1 (16).jpg";
import jpgImage17 from "../images/logos/1 (17).jpg";
import jpgImage18 from "../images/logos/1 (18).jpg";

import pngImage2 from "../images/logos/1 (2).png";
import pngImage6 from "../images/logos/1 (6).png";
import pngImage7 from "../images/logos/1 (7).png";
import pngImage8 from "../images/logos/1 (8).png";
import pngImage9 from "../images/logos/1 (9).png";
import pngImage11 from "../images/logos/1 (11).png";
import pngImage12 from "../images/logos/1 (12).png";
import pngImage14 from "../images/logos/k2.png";

import mipa from "../images/logos/mipa.webp";
import menzerna from "../images/logos/menzerna-logo.webp";
import abw from "../images/logos/abw logp.webp";
import cromax from "../images/logos/cromax logo.webp";

const BrandImages = () => {
  let imagesPng = [
    abw,
    pngImage2,
    cromax,
    pngImage6,
    pngImage7,
    mipa,
    pngImage8,
    pngImage9,
    pngImage11,
    pngImage12,
    pngImage14,
  ].map((name, index) => {
    return (
      <div className="brandLogo" key={index}>
        <img key={index} className="brandLogo" alt={name} src={name} />
      </div>
    );
  });
  let imagesJpg = [
    jpgImage1,
    jpgImage2,
    jpgImage3,
    jpgImage4,
    jpgImage5,
    jpgImage6,
    menzerna,
    jpgImage7,
    jpgImage8,
    jpgImage9,
    jpgImage11,
    jpgImage12,
    jpgImage13,
    jpgImage14,
    jpgImage15,
    jpgImage16,
    jpgImage17,
    jpgImage18,
  ].map((name, index) => {
    return (
      <div className="brandLogo" key={index}>
        <img key={index} className="brandLogo" alt={name} src={name} />
      </div>
    );
  });
  return (
    <>
      <div className="break"></div>
      {imagesJpg}
      {imagesPng}
    </>
  );
};

export default BrandImages;
