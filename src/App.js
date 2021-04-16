import React, { useState } from "react";
import Player from "./Components/Player";
import Song from "./Components/Song";
import "./styles/App.scss";
import data from "./util";

function App() {
  //State
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  return (
    <div className="App">
      <Song currentSong={currentSong} />
      <Player />
    </div>
  );
}

export default App;
