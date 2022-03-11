import React from "react";
import "./App.scss";
import { motion } from "framer-motion";

function App() {
  return (
    <div className="App">
      <motion.div className="splash-screen-container"
          animate={{
            scale: [1, 1.2, 1.2, 1, 1],
            rotate: [0, 0, 270, 270, 0],
            borderRadius: ["10%", "10%", "50%", "50%", "10%"],
          }}
          transition={{ repeat: Infinity, duration: 3 }}
      >
        <img src="/images/logo.svg" className="splash-screen-image" alt="developerinspiration logo"/>
        <div
          className="splash-screen-grey"
        ></div>
        <div
          className="splash-screen-purple"
        ></div>
        <div
          className="splash-screen-yellow"
        ></div>
        <div
          className="splash-screen-pink"
        ></div>
      </motion.div>
    </div>
  );
}

export default App;
