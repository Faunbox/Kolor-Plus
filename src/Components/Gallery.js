import React from "react";
import ActiveCategory from "./ActiveCategory";
import GalleryImages from "./GalleryImages";
import GalleryImages2 from "./GalleryImages2";
import "../App.css";


const Gallery = () => {
  return (
    <>
      <ActiveCategory text="Galeria" class="acWrapper wrapper"/>
      <GalleryImages text="Zdjęcia naszego sklepu oraz asortymentu" />
      <GalleryImages2 text="Certyfikaty i szkolenia" />
    </>
  );
};

export default Gallery;
