import React, { useState } from "react";
import "./RightNavbar.css";
import linegraph from "../assets/smallgraph.png";
import PauseIcon from "@mui/icons-material/Pause";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
function RightNavbar() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio, setAudio] = useState(null);
  const playMusic = (musicHash) => {
    const audio = new Audio(
      `https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3`
    );
    setAudio(audio);
    if (!isPlaying) {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };
  const stopMusic = (audio) => {
    audio.pause();
    setIsPlaying(!isPlaying);
  };
  return (
    <div className="mainContainer">
      <div className="topProfile">
        <img
          src="https://media.gq.com/photos/56bcb218cdf2db6945d2ef93/4:3/w_2000,h_1500,c_limit/bieber-coverstory-square.jpg"
          className="profileImage"
        />
        <h5 className="artistName">Justin Bieber</h5>
      </div>
      <div className="listnersNow">
        <div>
          <h5>Listeners Now</h5>
          <h2>1289</h2>
        </div>
        <img className="smallGraph" src={linegraph} />
      </div>
      <div>
        <div className="countryContainer">
          <img
            className="flagIcon"
            src="https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png"
          />
          <h6>India</h6>
          <h6>60%</h6>
        </div>
        <div className="countryContainer">
          <img
            className="flagIcon"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Flag_of_the_United_States_%28Pantone%29.svg/800px-Flag_of_the_United_States_%28Pantone%29.svg.png"
          />
          <h6>USA</h6>
          <h6>20%</h6>
        </div>
        <div className="countryContainer">
          <img
            className="flagIcon"
            src="https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/Flag_of_Russia.svg/800px-Flag_of_Russia.svg.png"
          />
          <h6>Russia</h6>
          <h6>10%</h6>
        </div>
        <div className="countryContainer">
          <img
            className="flagIcon"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Flag_of_Ukraine.svg/800px-Flag_of_Ukraine.svg.png"
          />
          <h6>Ukraine</h6>
          <h6>10%</h6>
        </div>
      </div>
      <div className="bottomPlayer">
        <progress id="file" value="44" max="100">
          {" "}
          44%{" "}
        </progress>
        <div className="playContainer">
          <SkipPreviousIcon />
          {!isPlaying ? (
            <PlayCircleOutlineIcon
              onClick={() =>
                playMusic("QmcAqfE8V6WGT5fqNMWG9hprbm8etgsm7ZCL2zeZ7gtohx")
              }
            />
          ) : (
            <PauseIcon onClick={() => stopMusic(audio)} />
          )}
          <SkipNextIcon />
        </div>
      </div>
    </div>
  );
}

export default RightNavbar;
