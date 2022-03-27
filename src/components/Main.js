import React, { Component, useState } from "react";
import Identicon from "identicon.js";
import "./Main.css";

const Main = ({captureImage, captureFile, uploadMusic }) => {
  const [artistName, setArtistName] = useState("");
  const [songName, setSongName] = useState("");
  const [albumName, setAlbumName] = useState("");
  const [songLength, setSongLength] = useState("");
  const [lyrics, setLyrics] = useState("");
  const [genre, setGenre] = useState("");

  return (
    <div className="uploadImageContainer">
      <p>&nbsp;</p>
      <h2>Share Music</h2>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          uploadMusic(
            artistName,
            songName,
            albumName,
            songLength,
            lyrics,
            genre
          );
        }}
      >
        <input type="file" accept=".mp3" onChange={(e) => captureFile(e)} />
        <input
          type="file"
          accept=".jpg"          
          onChange={(event) => captureImage(event)}
          className="inputField"
        />
        <div className="form-group mr-sm-2">
          <br></br>
          {/* musicHash,artistName,songName,albumName,songLength,lyrics,genre */}
          <input
            id="artistName"
            type="text"
            onChange={(e) => setArtistName(e.target.value)}
            className="form-control inputField"
            placeholder="Artist Name"
            required
            
          />
          <input
            id="songName"
            type="text"
            onChange={(e) => setSongName(e.target.value)}
            className="form-control inputField"
            placeholder="Song Name..."
            required
          />
          <input
            id="songLength"
            type="text"
            onChange={(e) => setAlbumName(e.target.value)}
            className="form-control inputField"
            placeholder="Album Name"
            required
          />
          <input
            id="imageDescription"
            type="text"
            onChange={(e) => setSongLength(e.target.value)}
            className="form-control inputField"
            placeholder="Song Length"
            required
          />
          <input
            id="lyrics"
            type="text"
            onChange={(e) => setLyrics(e.target.value)}
            className="form-control inputField"
            placeholder="Lyrics"
            required
          />
          <input
            id="genre"
            type="text"
            onChange={(e) => setGenre(e.target.value)}
            className="form-control inputField"
            placeholder="Genre"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary btn-block btn-lg">
          Upload!
        </button>
      </form>
      <p>&nbsp;</p>
    </div>
  );
};

export default Main;
