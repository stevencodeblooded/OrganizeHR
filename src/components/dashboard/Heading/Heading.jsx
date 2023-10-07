import React, { useState, useEffect } from "react";

//for animation
import AOS from "aos";
import 'aos/dist/aos.css'
import ImageSlider from "../../BackgroundImageSlider/ImageSlider";
import "./Heading.css";

const Heading = () => {
  
  const words = ["Personnel", "Group", "Crew", "Team"];
  const [currentWordIndex, setcurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setcurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const currentWord = words[currentWordIndex];

  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <div className="heading-with-background">
      <div className="heading">
        <h1 data-aos='zoom-in-up' data-aos-duration='1000' data-aos-easing='linear'>
          Smart <span className="span-header">{currentWord}</span> <br />{" "}
          Consultants.
        </h1>

        <p className="heading-text" data-aos="fade-right" data-aos-duration='2000' data-aos-easing="ease-in-sine">
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
