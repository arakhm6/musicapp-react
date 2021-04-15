import React from "react";
import Player from "./Components/Player";
import Song from "./Components/Song";
import "./styles/App.scss";

function App() {
  return (
    <div className="App">
      <Song />
      <Player />
    </div>
  );
}

export default App;
