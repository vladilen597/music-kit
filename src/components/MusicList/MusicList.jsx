import React, { useEffect, useRef, useState } from "react";

import "./MusicList.scss";
import songs from "../../constants/resourses/songsObject.jsx";
import { FaPause, FaPlay } from "react-icons/fa";
import setSongId from "../../store/actionCreators/setSongId.jsx";
import { connect } from "react-redux";
import setPlaying from "../../store/actionCreators/setPlaying.jsx";
import togglePlaying from "../../store/actionCreators/togglePlaying.jsx";
import setHoveredId from "../../store/actionCreators/setHoveredId.jsx";

const MusicList = ({
  setSongId,
  setPlaying,
  setHoveredId,
  isPlaying,
  songId,
  hoveredId,
  togglePlaying,
}) => {
  const [xAxis, setXAxis] = useState(0);
  const [yAxis, setYAxis] = useState(0);
  const [zAxis, setZAxis] = useState(0);
  const [transition, setTransition] = useState("0.5s");

  const cardRef = useRef();

  useEffect(() => {
    cardRef.current.offsetWidth;
  }, []);

  const handleMouseEnter = (id) => {
    setHoveredId(id);
    setZAxis("50px");
    setTransition("none");
  };

  const handleMouseMove = (event) => {
    setXAxis((event.nativeEvent.offsetX - event.target.offsetWidth / 2) / 25);
    setYAxis((event.nativeEvent.offsetY - event.target.offsetHeight / 2) / 25);
  };

  const handleMouseLeave = () => {
    setYAxis(0);
    setXAxis(0);
    setTransition("0.5s");
    setZAxis("0px");
  };

  return (
    <main className="music-list">
      <div className="absolute"></div>
      <ul className="music-list__cards">
        {songs.map((song) => {
          return (
            <li key={song.id} className="music-list-item">
              <div
                className="music-card"
                ref={cardRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                onMouseEnter={() => {
                  handleMouseEnter(song.id);
                }}
                style={
                  hoveredId === song.id
                    ? {
                        transform: `rotateX(${yAxis}deg) rotateY(${xAxis}deg)`,
                        transition: transition,
                      }
                    : { transform: `rotateX(0deg) rotateY(0deg)` }
                }
              >
                <img src={song.albumCover} />
                <h3
                  style={
                    hoveredId === song.id
                      ? { transform: `translateZ(${zAxis})` }
                      : { transform: `translateZ(0px)` }
                  }
                >
                  {song.songName}
                </h3>
                <p
                  style={
                    hoveredId === song.id
                      ? { transform: `translateZ(${zAxis})` }
                      : { transform: `translateZ(0px)` }
                  }
                >
                  {song.songAuthor}
                </p>
                <div className="hover">
                  {isPlaying && songId === song.id ? (
                    <button
                      className="play-button"
                      onClick={togglePlaying}
                      style={{ transform: `translateZ(${zAxis})` }}
                    >
                      <FaPause className="stop" />
                    </button>
                  ) : (
                    <button
                      className="play-button"
                      onClick={() => {
                        setSongId(song.id);
                        setPlaying();
                      }}
                      style={{ transform: `translateZ(${zAxis})` }}
                    >
                      <FaPlay className="play" />
                    </button>
                  )}
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </main>
  );
};

const mapStateToProps = (state) => {
  return {
    isPlaying: state.isPlaying,
    songId: state.songId,
    hoveredId: state.hoveredId,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setSongId: (id) => dispatch(setSongId(id)),
    setPlaying: () => dispatch(setPlaying()),
    togglePlaying: () => dispatch(togglePlaying()),
    setHoveredId: (id) => dispatch(setHoveredId(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MusicList);
