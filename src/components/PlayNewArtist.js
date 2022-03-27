import React, { useState, useEffect } from "react";
import "./PlayNewArtist.css";
import { db } from "../firebase";
import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";
import PauseIcon from "@mui/icons-material/Pause";
function PlayNewArtist({ musicHash, imageHash, songName }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio, setAudio] = useState(null);

  const playMusic = (musicHash) => {
    const audio = new Audio(`https://ipfs.infura.io/ipfs/${musicHash}`);
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
    <div className="playnewartist">
      <div className="audioCard">
        <img
          className="audioImage"
          src={`https://ipfs.infura.io/ipfs/${imageHash}`}
        />
        <h4 className="songNameText">{songName}</h4>
        {!isPlaying ? (
          <PlayCircleFilledWhiteIcon onClick={() => playMusic(musicHash)} />
        ) : (
          <PauseIcon onClick={() => stopMusic(audio)} />
        )}
        <button className="tipButton">Tip 0.1ETH</button>
      </div>
    </div>
  );
}

export default PlayNewArtist;
