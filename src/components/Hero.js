import React from "react";
import "./Hero.css";

const Hero = ({ imageSrc }) => {
  return (
    <div className="hero">
      <img src={imageSrc} alt="Travel Guide" className="hero__image" />
      <h1 className="hero__title">This is an ALX portfolio project a landing page for my Portfolio project <u>Buddy GUIDE </u> you can check the github link above .</h1>
    </div>
  );
};

export default Hero;
