import React from "react";
import LightGallery from "lightgallery/react";
import Bali from "../assets/Bali.webp";
import Paris from "../assets/Paris.jpg";
import Tokyo from "../assets/Tokyo.jpg";
import India from "../assets/India.jpg";
import Venice from "../assets/Venice.jpg";
import Hero1 from "../assets/Hero1.webp";
import Hero2 from "../assets/Hero22.jpg";
import Hero3 from "../assets/Hero3.jpg";
import Hero4 from "../assets/Hero4.webp";

import "./Css/Gallery.css";
// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

// import plugins if you need
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

const GalleryComp = () => {
  const onInit = () => {
    console.log("lightGallery has been initialized");
  };
  return (
    <div className="max-w-7xl mx-auto mb-16 px-4 md:px-0 mt-10">
      <div className="">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-3 font-serif">
          Gallery Kami
        </h2>
        <hr className="text-red-500 w-[200px] bg-red-500 mx-auto h-1 mb-10" />
      </div>
      <div className="App">
        <LightGallery
          onInit={onInit}
          speed={500}
          plugins={[lgThumbnail, lgZoom]}
        >
          <a href={India}>
            <img
              alt="Taj Mahal"
              src={India}
              className="w-full aspect-[3/2] object-cover rounded-2xl transition-transform duration-200"
              loading="lazy"
            />
          </a>
          <a href={Hero1}>
            <img
              alt="Hero1"
              src={Hero1}
              className="w-full aspect-[3/2] object-cover rounded-2xl transition-transform duration-200 mt-3"
              loading="lazy"
            />
          </a>
          <a href={Hero2}>
            <img
              alt="Hero2"
              src={Hero2}
              className="w-full aspect-[3/2] object-cover rounded-2xl transition-transform duration-200 mt-3"
              loading="lazy"
            />
          </a>
          <a href={Hero3}>
            <img
              alt="Hero3"
              src={Hero3}
              className="w-full aspect-[3/2] object-cover rounded-2xl transition-transform duration-200 mt-3"
              loading="lazy"
            />
          </a>
          <a href={Hero4}>
            <img
              alt="Gunung Sindoro Sumbing"
              src={Hero4}
              className="w-full aspect-[3/2] object-cover rounded-2xl transition-transform duration-200 mt-3"
              loading="lazy"
            />
          </a>
          <a href={Bali}>
            <img
              alt="Bali"
              src={Bali}
              className="w-full aspect-[3/2] object-cover rounded-2xl transition-transform duration-200 mt-3"
              loading="lazy"
            />
          </a>
          <a href={Venice}>
            <img
              alt="Venice"
              src={Venice}
              className="w-full aspect-[3/2] object-cover rounded-2xl transition-transform duration-200 mt-3"
              loading="lazy"
            />
          </a>
          <a href={Paris}>
            <img
              alt="Paris"
              src={Paris}
              className="w-full aspect-[3/2] object-cover rounded-2xl transition-transform duration-200 mt-3"
              loading="lazy"
            />
          </a>
          <a href={Tokyo}>
            <img
              alt="Tokyo"
              src={Tokyo}
              className="w-full aspect-[3/2] object-cover rounded-2xl transition-transform duration-200 mt-3"
              loading="lazy"
            />
          </a>
        </LightGallery>
      </div>
    </div>
  );
};

export default GalleryComp;
