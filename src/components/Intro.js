import React from "react";
import Programming from "../images/programming.svg";

const Intro = () => {
  return (
    <div className="padding intro-div">
      <div className="intro-grid">
        <div className="text-content">
          <p className="text-title">Hey, I am Hamza Iftikhar</p>
          <p className="text-large">
            I am a web developer. I create visually appealing websites using the
            MERN and MEAN Stack. I combine productivity and design to create websites
            that provide the best User Experience. I love to create beautiful
            animations and transitions to really bring an interactive element to
            the design.
          </p>
        </div>
        <img className="intro-image" src={Programming} alt="Programmer"></img>
      </div>
    </div>
  );
};

export default Intro;
