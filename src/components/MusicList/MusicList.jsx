import React, { useRef, useState } from "react";

import "./MusicList.scss";
import songs from "../../constants/resourses/songsObject.jsx";
import { FaPlay } from "react-icons/fa";

const MusicList = () => {
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
                {
                  <button className="play-button">
                    <FaPlay className="play" />
                  </button>
                }
              </div>
            </li>
          );
        })}
      </ul>
    </main>
  );
};

export default MusicList;
