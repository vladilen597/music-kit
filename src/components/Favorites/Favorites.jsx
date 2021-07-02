import React, { useState } from "react";
import "./Favorites.scss";

import logo from "../../resourses/logo.png";

const Favorites = () => {
  const [xAxis, setXAxis] = useState(0);
  const [yAxis, setYAxis] = useState(0);
  const [zAxis, setZAxis] = useState(0);
  const [transition, setTransition] = useState("0.5s");

  const handleMouseMove = (event) => {
    setXAxis((window.innerWidth / 2 - event.clientX) / 30);
    setYAxis((window.innerHeight / 2 - event.clientY) / 30);
  };

  const handleMouseLeave = () => {
    setXAxis(0);
    setYAxis(0);
    setZAxis("0px");
    setTransition("0.5s");
  };

  const handleMouseEnter = () => {
    setTransition("none");
    setZAxis("50px");
  };

  return (
    <main className="favorites">
      <div className="wrapper">
        <div
          className="card"
          onMouseMove={handleMouseMove}
          style={{
            transform: `rotateX(${yAxis}deg) rotateY(${xAxis}deg)`,
            transition: transition,
          }}
          onMouseLeave={handleMouseLeave}
          onMouseEnter={handleMouseEnter}
        >
          <img src={logo} style={{ transform: `translateZ(${zAxis})` }} />
        </div>
      </div>
    </main>
  );
};

export default Favorites;
