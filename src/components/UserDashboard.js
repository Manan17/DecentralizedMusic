import React, { useState, useEffect } from "react";
import "./UserDashboard.css";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Container,
  Button,
} from "react-bootstrap";
import imageT from "../images/trending.png";
import artist from "../images/justin.jpg";
import albumImg from "../images/cover.jpg";
import PlayNewArtist from "./PlayNewArtist";
import { db } from "../firebase";
// import ChevronRightIcon from "@material-ui/icons/ChevronRightIcon";
function UserDashboard() {
  const [musicData, setMusicData] = useState([]);

  const [search, setSearch] = useState("");
  useEffect(() => {
    db.collection("musicrecords").onSnapshot((snapshot) => {
      setMusicData(snapshot.docs.map((doc) => doc.data()));
    });
  }, []);

  useEffect(() => {
    console.log(musicData);
  }, [musicData]);
  return (
    <>
      <div className="main">
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container fluid>
            <Navbar.Brand href="#">Nirvana</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Nav.Link href="http://localhost:3000/">Spotify</Nav.Link>
                <Nav.Link href="http://localhost:3001/Login">Logout</Nav.Link>
              </Nav>
              <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <div className="body">
          <div className="left">
            <div className="trending">
              <div className="subH">Top</div>
              <div className="head">Trending</div>
              <img className="trendingimg" src={imageT} alt="Trending" />
            </div>

            <button className="button_trending_play" type="submit">
              Play
            </button>
            <button className="button_trending_playlist" type="submit">
              View Playlist
            </button>
          </div>
          <div className="right">
            <div className="subH">Top</div>
            <div className="head">Artist</div>

            <div className="Artistcontain">
              <div className="artist-img">
                <img className="artistImg" src={artist} />
              </div>

              <div className="artist-details">
                <div className="head">Justin Beiber</div>
                <div className="subh">Peaches</div>
              </div>

              <div className="rank">#1</div>
            </div>

            <div className="Artistcontain">
              <div className="artist-img">
                <img
                  className="artistImg"
                  src="https://dpwhatsapp.xyz/wp-content/uploads/2021/07/Drake-Instagram-Profile-Pic.jpg"
                />
              </div>

              <div className="artist-details">
                <div className="head">Drake</div>
                <div className="subh">Gods Plan</div>
              </div>

              <div className="rank">#2</div>
            </div>

            <div className="Artistcontain">
              <div className="artist-img">
                <img
                  className="artistImg"
                  src="https://media.allure.com/photos/5cdb2dea350dae2155a6579d/3:4/w_1982,h_2643,c_limit/selena%20gomez.jpg"
                />
              </div>

              <div className="artist-details">
                <div className="head">Selena Gomez</div>
                <div className="subh">Wolves</div>
              </div>

              <div className="rank">#3</div>
            </div>
            <div className="Artistcontain">
              <div className="artist-img">
                <img
                  className="artistImg"
                  src="https://i0.wp.com/insiderion.com/wp-content/uploads/2020/10/Arijit-Singh-picture.jpg?resize=447%2C296&ssl=1"
                />
              </div>

              <div className="artist-details">
                <div className="head">Arijit Singh</div>
                <div className="subh">Tum hi ho</div>
              </div>

              <div className="rank">#4</div>
            </div>
          </div>
        </div>
        <h1 className="newartiststext">New Artists</h1>
        <div className="Topreleasescontain">
          {search === ""
            ? musicData.map((music) => (
                <PlayNewArtist
                  musicHash={music.musicHash}
                  imageHash={music.imageHash}
                  songName={music.songName}
                />
              ))
            : musicData.map((music) => {
                if (
                  music.songName.toLowerCase().includes(search.toLowerCase())
                ) {
                  return (
                    <PlayNewArtist
                      musicHash={music.musicHash}
                      imageHash={music.imageHash}
                      songName={music.songName}
                    />
                  );
                }
              })}
        </div>
      </div>
    </>
  );
}

export default UserDashboard;
