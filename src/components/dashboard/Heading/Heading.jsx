import React, { useState, useEffect } from "react";

import ImageSlider from "../../BackgroundImageSlider/ImageSlider";
import "./Heading.css";

const Heading = () => {
  
  const words = ["Team", "Group", "Crew", "Unit"];
  const [currentWordIndex, setcurrentWordIndex] = useState(0);

  useEffect(() => {
    
    const interval = setInterval(() => {
      setcurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const currentWord = words[currentWordIndex];

  return (
    <div className="heading-with-background">

      <div className="heading">
        <h1>
          Smart <span className="span-header">{currentWord}</span> <br />{" "}
          Consultants.
        </h1>

        <p className="heading-text">
          Welcome to Smart Personnel Consultants – Your Path to Exceptional
          Talents, Career Growth, and Expert Guidance in Connecting Businesses
          with Skilled Professionals.
        </p>
      </div>

      <div className="image-slider">
        <ImageSlider />
      </div>
      
    </div>
  );
};

export default Heading;
