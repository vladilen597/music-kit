import React from "react";

import "./MusicList.scss";
import songs from "../../constants/resourses/songsObject.jsx";
import { FaPause, FaPlay } from "react-icons/fa";
import setSongId from "../../store/actionCreators/setSongId.jsx";
import { connect } from "react-redux";
import setPlaying from "../../store/actionCreators/setPlaying.jsx";
import togglePlaying from "../../store/actionCreators/togglePlaying.jsx";

const MusicList = ({
  setSongId,
  setPlaying,
  isPlaying,
  songId,
  togglePlaying,
}) => {
  return (
    <main className="music-list">
      <ul className="music-list__cards">
        {songs.map((song) => {
          return (
            <li className="music-card" key={song.id}>
              <img src={song.albumCover} />
              <h3>{song.songName}</h3>
              <p>{song.songAuthor}</p>
              <div className="hover">
                {isPlaying && songId === song.id ? (
                  <button className="play-button" onClick={togglePlaying}>
                    <FaPause className="stop" />
                  </button>
                ) : (
                  <button
                    className="play-button"
                    onClick={() => {
                      setSongId(song.id);
                      setPlaying();
                    }}
                  >
                    <FaPlay className="play" />
                  </button>
                )}
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
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setSongId: (id) => dispatch(setSongId(id)),
    setPlaying: () => dispatch(setPlaying()),
    togglePlaying: () => dispatch(togglePlaying()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MusicList);
