import "./App.css";
import react, { useState, useEffect, useRef } from "react";
import video from "./earth.mp4";

function App() {
  const videoRef = useRef();

  const handlePlay = () => {
    videoRef.current.play();
  };
  const handlePause = () => {
    videoRef.current.pause();
  };

  return (
    <div className="App">
      <video src={video} ref={videoRef} />
      <button onClick={handlePlay}>play</button>
      <button onClick={handlePause}>pause</button>
    </div>
  );
}

export default App;
