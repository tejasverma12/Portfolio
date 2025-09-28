import React from "react";
import "./Hero.css";
import profilePic from "../assets/Profile.jpg";

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <img src={profilePic} alt="Tejaswi" className="profile-img" />
        <div className="hero-text">
          <h1>Tejaswi Ranjan</h1>
          <p>Full Stack Developer | React JS Enthusiast</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
