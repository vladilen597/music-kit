import React, { useState } from "react";
import "./Volume.scss";

const Volume = ({ audio }) => {
  const [currentVolume, setCurrentVolume] = useState(100);

  const handleVolumeChange = (event) => {
    audio.current.volume = event.target.value / 100;
    setCurrentVolume(Math.floor(event.target.value));
  };

  return (
    <section className="volume-control">
      <input
        onChange={handleVolumeChange}
        type="range"
        step={1}
        min={0}
        max={100}
        defaultValue={100}
        className="slider-styled-volume"
      />
      <div>{currentVolume}</div>
    </section>
  );
};

export default Volume;
