"use client";
import ImageGallery from "react-image-gallery";
import React from "react";
import "react-image-gallery/styles/css/image-gallery.css";
const ImageSlider = ({ images }) => {
  return (
    <div>
      <ImageGallery
        items={images}
        autoPlay={true}
        showPlayButton={false}
        showFullscreenButton={false}
        slideInterval={5000}
      />
    </div>
  );
};

export default ImageSlider;
