import React, { useEffect, useRef, useState } from "react";

import { FaPlay, FaPause } from "react-icons/fa";
import { connect } from "react-redux";
import songs from "../../constants/resourses/songsObject.jsx";
import togglePlaying from "../../store/actionCreators/togglePlaying.jsx";
import { Slider } from "@material-ui/core";

import "./Player.scss";

const Player = ({ songId, isPlaying, togglePlaying }) => {
  const [currentVolume, setCurrentVolume] = useState(100);
  const [currentTime, setCurrentTime] = useState(0);
  const [durationTime, setDurationTime] = useState(0);

  const audio = useRef();

  useEffect(() => {
    if (isPlaying) {
      audio.current.play();
    } else audio.current.pause();
  }, [songId, isPlaying]);

  const handleTogglePlaying = () => {
    togglePlaying();
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

  const handleChange = (event) => {
    audio.current.currentTime = Math.floor(event.target.value);
    setCurrentTime(Math.floor(event.target.value));
  };

  const handleVolumeChange = (event) => {
    audio.current.volume = event.target.value / 100;
    setCurrentVolume(Math.floor(event.target.value));
  };

  return (
    <footer className="audio-player">
      <section className="audio-now-playing">
        <h3>{songs[songId].songName}</h3>
        <p>{songs[songId].songAuthor}</p>
      </section>
      <section className="audio-track">
        <audio
          draggable={false}
          onTimeUpdate={setCurrentTimeDuration}
          onLoadedData={HandleDurationTime}
          ref={audio}
          src={songs[songId].songSrc}
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
        <button onClick={handleTogglePlaying} className="audio-play-button">
          {isPlaying ? (
            <FaPause className="pause-icon" />
          ) : (
            <FaPlay className="play-icon" />
          )}
        </button>
      </section>
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
    </footer>
  );
};

const mapStateToProps = (state) => {
  return {
    songId: state.songId,
    isPlaying: state.isPlaying,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    togglePlaying: () => dispatch(togglePlaying()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Player);
