import React, { useEffect, useRef, useState } from "react";
import Slider from "@material-ui/core/Slider";

import { FaPlay, FaPause } from "react-icons/fa";

import signalFireSong from "../../resourses/DevilSoldHisSoul/SignalFire.mp3";
import "./Player.scss";
import { withStyles } from "@material-ui/core";

const Player = () => {
  const StyledSlider = withStyles({
    root: {
      width: "90%",
    },
    thumb: {
      width: "5px",
      borderRadius: "none",
      backgroundColor: "#fff",
    },
    rail: {
      backgroundColor: "orange",
      opacity: 0.8,
    },
    track: {
      backgroundColor: "orange",
      opacity: 0.2,
    },
    active: {
      backgroundColor: "none",
    },
  })(Slider);

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(1);
  const [currentTime, setCurrentTime] = useState(0);
  const [durationTime, setDurationTime] = useState(0);

  const audio = useRef();

  const togglePlaying = () => {
    setIsPlaying((prevState) => !prevState);
    if (isPlaying) {
      audio.current.pause();
    } else audio.current.play();
  };

  const setCurrentTimeDuration = (event) => {
    setCurrentTime(Math.floor(event.target.currentTime));
  };

  const convertCurrentTime = () => {
    let minutes = Math.floor(currentTime / 60);
    let seconds = Math.floor(currentTime % 60);
    if (seconds < 10) {
      return `${minutes}:0${seconds}`;
    } else return `${minutes}:${seconds}`;
  };

  const currentTimeConverted = convertCurrentTime();

  const HandleDurationTime = (event) => {
    setDurationTime(Math.ceil(event.target.duration));
  };

  const convertDurationTime = () => {
    let minutes = Math.floor(durationTime / 60);
    let seconds = Math.floor(durationTime % 60);
    if (seconds < 10) {
      return `${minutes}:0${seconds}`;
    } else {
      return `${minutes}:${seconds}`;
    }
  };

  const durationTimeConverted = convertDurationTime();

  const handleChange = (event, value) => {
    audio.current.currentTime = Math.floor(event.target.value);
    setCurrentTime(Math.floor(event.target.value));
  };

  return (
    <footer className="audio-player">
      <section className="audio-now-playing">
        <h3>Signal Fire</h3>
        <p>Devil Sold His Soul</p>
      </section>
      <section className="audio-track">
        <audio
          draggable={false}
          onTimeUpdate={setCurrentTimeDuration}
          onLoadedData={HandleDurationTime}
          ref={audio}
          src={signalFireSong}
          preload="metadata"
        />
        <div className="slider">
          <div>{currentTimeConverted}</div>
          <input
            type="range"
            onChange={handleChange}
            step={0.01}
            min={0}
            value={currentTime}
            max={durationTime}
            className="slider-styled"
          />
          <div>{durationTimeConverted}</div>
        </div>
        <button onClick={togglePlaying} className="audio-play-button">
          {isPlaying ? (
            <FaPause className="pause-icon" />
          ) : (
            <FaPlay className="play-icon" />
          )}
        </button>
      </section>
    </footer>
  );
};

export default Player;
