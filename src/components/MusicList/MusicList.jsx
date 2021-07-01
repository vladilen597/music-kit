import React, { useRef, useState } from "react";

import "./MusicList.scss";
import signalFireThumbnail from "../../resourses/DevilSoldHisSoul/signalFireThumb.jpg";

const MusicList = () => {
  return (
    <main className="music-list">
      <ul className="music-list__cards">
        <li className="music-card">
          <img src={signalFireThumbnail} />
          <h3>Signal Fire</h3>
        </li>
      </ul>

      <section></section>
    </main>
  );
};

export default MusicList;
