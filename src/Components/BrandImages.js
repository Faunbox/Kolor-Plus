import React from "react";
import "../Styles/Products.css";

const BrandImages = () => {
  let imagesPng = [
    "1 (1)",
    "1 (2)",
    "1 (5)",
    "1 (6)",
    "1 (7)",
    "1 (8)",
    "1 (9)",
    "1 (11)",
    "1 (12)",
    "1 (14)",
  ].map((name, index) => {
    return (
      <div className="brandLogo" key={index}>
        <img
          key={index}
          className="brandLogo"
          alt={name}
          src={require(`../images/logos//${name}.png`)}
        />
      </div>
    );
  });
  let imagesJpg = [
    "1 (1)",
    "1 (2)",
    "1 (3)",
    "1 (4)",
    "1 (5)",
    "1 (6)",
    "1 (7)",
    "1 (8)",
    "1 (9)",
    "1 (11)",
    "1 (12)",
    "1 (13)",
    "1 (14)",
    "1 (15)",
    "1 (16)",
    "1 (17)",
    "1 (18)",
  ].map((name, index) => {
    return (
      <div className="brandLogo" key={index}>
        <img
          key={index}
          className="brandLogo"
          alt=""
          src={require(`../images/logos//${name}.jpg`)}
        />
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
