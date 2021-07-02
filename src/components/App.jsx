import React from "react";
import Header from "./Header/Header.jsx";
import MusicList from "./MusicList/MusicList.jsx";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.scss";
import Player from "./Player/Player.jsx";
import Favorites from "./Favorites/Favorites.jsx";

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={MusicList} />
        <Route exact path="/favorites" component={Favorites} />
      </Switch>
      <Player />
    </Router>
  );
};

export default App;
