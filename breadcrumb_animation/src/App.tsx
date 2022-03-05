import React, { useEffect, useRef, useState } from 'react';
import './App.css';

function App() {
  const [animationState, setAnimationState] = useState({
    "1": false,
    "2": false,
    "3": false,
    "4": false,
    "5": false,
    "6": false,
    "7": false,
  });
  const firstAnimationRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) =>
      setAnimationState({
        "1": entry.isIntersecting,
        "2": false,
        "3": false,
        "4": false,
        "5": false,
        "6": false,
        "7": false,
      })
    );
    observer.observe(firstAnimationRef!.current!);
    return () => {
      observer.disconnect();
    };
  }, []);
  return (
    <div className="App">
    <div className="breadcrumb-container">
<div
        className="breadcrumb-animation-container"
        ref={firstAnimationRef}
      >
        {animationState["1"] && (
          <div
            onAnimationEnd={() =>
              setAnimationState({ ...animationState, "2": true })
            }
            className="breadcrumb-animation-1"
          ></div>
        )}
        {animationState["2"] && (
          <div
            onAnimationEnd={() =>
              setAnimationState({ ...animationState, "3": true })
            }
            className="breadcrumb-animation-2"
          >
            <img src="/images/idea.svg" alt="rss logo" />
            <p
              style={{
                filter: animationState["3"] ? "opacity(1)" : "opacity(0)",
              }}
            >
Have an idea
            </p>
          </div>
        )}
        {animationState["3"] && (
          <div
            onAnimationEnd={() =>
              setAnimationState({ ...animationState, "4": true })
            }
            className="breadcrumb-animation-3"
          ></div>
        )}
        {animationState["4"] && (
          <div
            onAnimationEnd={() =>
              setAnimationState({ ...animationState, "5": true })
            }
            className="breadcrumb-animation-4"
          >
            <img src="/images/code.svg"alt="sybel logo" />
            <p
              style={{
                filter: animationState["5"] ? "opacity(1)" : "opacity(0)",
              }}
            >
Code it
            </p>
          </div>
        )}
        {animationState["5"] && (
          <div
            onAnimationEnd={() =>
              setAnimationState({ ...animationState, "6": true })
            }
            className="breadcrumb-animation-5"
          ></div>
        )}
        {animationState["6"] && (
          <div
            onAnimationEnd={() =>
              setAnimationState({ ...animationState, "7": true })
            }
            className="breadcrumb-animation-6"
          >
            <img src="/images/instagram.svg" alt="success logo" />
            <p
              style={{
                filter: animationState["7"] ? "opacity(1)" : "opacity(0)",
              }}
            >
Post it, and voila.
            </p>
          </div>
        )}
        {animationState["7"] && (
          <div className="breadcrumb-animation-7"></div>
        )}
      </div>
      </div>
    </div>
  );
}

export default App;
