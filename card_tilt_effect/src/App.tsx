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
        className="key-number-series-card-def"
        >
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.instagram.com/developerinspiration/"
          className="key-number-series-card-image-def"
          >
          <img
            className="key-number-series-card-main-image-def"
            src="/images/cover.png"
            alt="main cover of a developer inspiration article card"
            />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.instagram.com/developerinspiration/"
          className="key-number-series-informations-container-def"
          >
          <img
            className="key-number-series-informations-background-def"
            src="/images/cover.png"
            alt="blured cover of a developer inspiration article card"
            />

          <p className="key-number-series-card-title-def">
            Developer Inspiration
          </p>
          <div className="key-number-series-card-details-def">
            <p className="key-number-series-card-header-mention-def">
              Time to read this article
            </p>
            <p className="key-number-series-card-age-def">3min</p>
          </div>
          <p className="key-number-series-card-description-def">
            This is a card with a glare and tilt effect. Here we could put a
            little description
          </p>
        </a>
      </Tilt>
    </div>
  );
}

export default App;
