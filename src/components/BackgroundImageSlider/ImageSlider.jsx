import React, { useState, useEffect } from "react";

//import images
import bg1 from "../../images/bg1.jpg";
import bg2 from "../../images/bg2.jpg";
import bg3 from "../../images/bg3.jpg";
import bg4 from "../../images/bg4.jpeg";

import "./ImageSlider.css";

const ImageSlider = () => {

  const backgroundImages = [bg1, bg2, bg3, bg4];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % backgroundImages.length
      );
    }, 12000);

    return () => clearInterval(interval);
  }, []);

  const currentImage = backgroundImages[currentImageIndex]; //bg[0] = bg1

  return (
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${currentImage})`,
        }}
      ></div>
  );
};

export default ImageSlider;
