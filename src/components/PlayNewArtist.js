import React, { useState, useEffect } from "react";
import "./PlayNewArtist.css";
import { db } from "../firebase";
import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";
import PauseIcon from "@mui/icons-material/Pause";
function PlayNewArtist() {
  const [musicData, setMusicData] = useState([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio, setAudio] = useState(null);
  useEffect(() => {
    db.collection("musicrecords").onSnapshot((snapshot) => {
      setMusicData(snapshot.docs.map((doc) => doc.data()));
    });
  }, []);

  useEffect(() => {
    console.log(musicData);
  }, [musicData]);

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
          src="https://ipfs.infura.io/ipfs/QmXikU7u6JE59iSMTsUmCBVbTn3eTsxJM4e6oDuEFc8tig"
        />
        {!isPlaying ? (
          <PlayCircleFilledWhiteIcon
            onClick={() =>
              playMusic("QmcAqfE8V6WGT5fqNMWG9hprbm8etgsm7ZCL2zeZ7gtohx")
            }
          />
        ) : (
          <PauseIcon onClick={() => stopMusic(audio)} />
        )}
      </div>
    </div>
  );
}

export default PlayNewArtist;
