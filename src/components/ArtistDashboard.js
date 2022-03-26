import React from "react";
import "./ArtistDashboard.css";
import globe from "../assets/globe.png";
import hoopr from "../assets/hoopr.png";
import lineChart from "../assets/linechart.png";
import barChart from "../assets/barchart.png";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import RightNavbar from "./RightNavbar";
export default function ArtistDashboard() {
  return (
    <div className="artistdashboard">
      <div className="rightNavBar">
        <RightNavbar />
      </div>
      <h1 className="headerText">Overview</h1>
      <div className="topContainer">
        <div className="chartContainer">
          <div className="headerIcons">
            <div>
              <p>Streams</p>
              <h1>540,123</h1>
            </div>
            <div className="musicIcons">
              <div className="iconContainer">
                <img className="icons" src={hoopr} />
                <p className="smallText">Hoopr Music</p>
              </div>
              <div className="iconContainer">
                <img className="icons" src={globe} />
                <p className="smallText">All</p>
              </div>
              <div className="iconContainer">
                <img
                  className="icons"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/2048px-Spotify_logo_without_text.svg.png"
                />
                <p className="smallText">Spotify</p>
              </div>
              <div className="iconContainer">
                <img
                  className="icons"
                  src="https://upload.wikimedia.org/wikipedia/commons/d/d8/YouTubeMusic_Logo.png"
                />
                <p className="smallText">Youtube Music</p>
              </div>
            </div>
          </div>
          <div>
            <img className="chartImage" src={lineChart} />
          </div>
        </div>
        <div className="earningsContainer">
          <div className="earningsHeader">
            <p>Earnings</p>
            <p>Show More</p>
          </div>
          <h1>$7,809</h1>
          <h6>Ad Revenue</h6>
          <progress id="file" value="44" max="100">
            {" "}
            44%{" "}
          </progress>
          <h6>Tip Revenue</h6>
          <progress id="file" value="60" max="100">
            {" "}
            60%{" "}
          </progress>
          <h6>Selling Nfts</h6>
          <progress id="file" value="100" max="100">
            {" "}
            100%{" "}
          </progress>
        </div>
      </div>
      <div className="bottomContainer">
        <div className="targetAudienceContainer">
          <div className="earningsHeader">
            <p>Target Audience</p>
            <p>Show More</p>
          </div>
          <img src={barChart} className="barChartImage" />
        </div>
        <div className="topreleasesContainer">
          <div className="topHeader">
            <h6>Top Releases</h6>
            <div>
              <h7>All Releases</h7>
              <button className="newreleasesButton">+New Releases</button>
            </div>
          </div>
          <div className="songImageMain">
            <div>
              <div className="songImageContainer">
                <img
                  className="songImage"
                  src="https://express-images.franklymedia.com/5829/sites/13/2019/05/10101601/ed-idc1.jpg"
                />
                <div className="songInfo">
                  <p className="songTitle">I Don't Care</p>
                  <p className="songPlays">92k Plays</p>
                </div>
                <div className="arrowIcon">
                  <ChevronRightIcon />
                </div>
              </div>
              <div>
                <div className="songImageContainer">
                  <img
                    className="songImage"
                    src="https://express-images.franklymedia.com/5829/sites/13/2019/05/10101601/ed-idc1.jpg"
                  />
                  <div className="songInfo">
                    <p className="songTitle">I Don't Care</p>
                    <p className="songPlays">92k Plays</p>
                  </div>
                  <div className="arrowIcon">
                    <ChevronRightIcon />
                  </div>
                </div>
                <div className="songImageContainer">
                  <img
                    className="songImage"
                    src="https://express-images.franklymedia.com/5829/sites/13/2019/05/10101601/ed-idc1.jpg"
                  />
                  <div className="songInfo">
                    <p className="songTitle">I Don't Care</p>
                    <p className="songPlays">92k Plays</p>
                  </div>
                  <div className="arrowIcon">
                    <ChevronRightIcon />
                  </div>
                </div>
              </div>
            </div>
            <div className="songListContainer">
              <div className="songImageContainer">
                <img
                  className="songImage"
                  src="https://express-images.franklymedia.com/5829/sites/13/2019/05/10101601/ed-idc1.jpg"
                />
                <div className="songInfo">
                  <p className="songTitle">I Don't Care</p>
                  <p className="songPlays">92k Plays</p>
                </div>
                <div className="arrowIcon">
                  <ChevronRightIcon />
                </div>
              </div>
              <div>
                <div className="songImageContainer">
                  <img
                    className="songImage"
                    src="https://express-images.franklymedia.com/5829/sites/13/2019/05/10101601/ed-idc1.jpg"
                  />
                  <div className="songInfo">
                    <p className="songTitle">I Don't Care</p>
                    <p className="songPlays">92k Plays</p>
                  </div>
                  <div className="arrowIcon">
                    <ChevronRightIcon />
                  </div>
                </div>
                <div className="songImageContainer">
                  <img
                    className="songImage"
                    src="https://express-images.franklymedia.com/5829/sites/13/2019/05/10101601/ed-idc1.jpg"
                  />
                  <div className="songInfo">
                    <p className="songTitle">I Don't Care</p>
                    <p className="songPlays">92k Plays</p>
                  </div>
                  <div className="arrowIcon">
                    <ChevronRightIcon />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
