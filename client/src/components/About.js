import React from "react";

const About = (props) => {
  const { time, deletePage } = props;
  return (
    <div id="shopMenu">
      <div id="quitBar">
        <img
          alt="shop"
          id="quitIcons"
          src={require("../img/dots.png")}
          onClick={() => deletePage("about")}
        />
      </div>
      <div id="about">
        <p>
          {" "}
          Made by: <br />
          <a
            className="gitName"
            href="https://github.com/Francesco-HART"
            target="blank"
          >
            Fibyou <br />
          </a>
          <br />
          Help by:
          <br />
          <a
            className="gitName"
            href="https://github.com/Francesco-HART"
            target="blank"
          >
            Starton API
            <br />
          </a>
        </p>
        <p id="timeText">
          Time played: <br />
          {Math.floor(time / 3600)} hour <br />
          {Math.floor(time / 60)} min
          <br /> {time} s
        </p>
      </div>
    </div>
  );
};
export default About;
