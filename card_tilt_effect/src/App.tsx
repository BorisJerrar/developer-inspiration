import React from "react";
import Tilt from "react-parallax-tilt";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Tilt
        scale={1.02}
        tiltMaxAngleX={5}
        tiltMaxAngleY={5}
        glareEnable={true}
        glareMaxOpacity={0.5}
        glareColor="white"
        glarePosition="bottom"
        className="card-container"
        >
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.instagram.com/developerinspiration/"
          className="card-main-image"
          >
          <img
            className="card-main-image-img"
            src="/images/cover.png"
            alt="main cover of a developer inspiration article card"
            />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.instagram.com/developerinspiration/"
          className="card-informations-container"
          >
          <img
            className="card-informations-background"
            src="/images/cover.png"
            alt="blured cover of a developer inspiration article card"
            />

          <p className="card-informations-title">
            Developer Inspiration
          </p>
          <div className="card-informations-details">
            <p className="card-informations-time-paragraph">
              Time to read this article
            </p>
            <p className="card-informations-time">3min</p>
          </div>
          <p className="card-informations-description">
            This is a card with a glare and tilt effect. Here we could put a
            little description
          </p>
        </a>
      </Tilt>
    </div>
  );
}

export default App;
