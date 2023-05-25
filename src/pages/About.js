import React from "react";
import MultiplePizzas from "../assets/multiplePizzas.jpeg";
import "../styles/About.css";

function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${MultiplePizzas})` }}
      ></div>
      <div className="aboutBottom">
        <h1>About Us</h1>
        <p>
          {" "}
          This is my story of creating simple HTML/CSS/JS application to React
          JS web app. I started with Javascript then I came to know React JS and
          Angular JS and decided to complete a full course through Udemy and
          uploaded eveything on Github.
        </p>
      </div>
    </div>
  );
}

export default About;
