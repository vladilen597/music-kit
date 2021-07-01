import React from "react";
import Header from "./Header/Header.jsx";
import MusicList from "./MusicList/MusicList.jsx";

import "./App.scss";
import Player from "./Player/Player.jsx";

const App = () => {
  return (
    <>
      <Header />
      <MusicList />
      <Player />
    </>
  );
};

export default App;
