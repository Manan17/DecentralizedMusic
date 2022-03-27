import React, { Component, useEffect, useState } from "react";
import Web3 from "web3";
import "./App.css";
import Music from "../abis/Music.json";
import Main from "./Main";
import {onSnapshot,collection,addDoc} from "firebase/firestore";
import db from "../firebase";
const ipfsClient = require("ipfs-http-client");
const ipfs = ipfsClient({
  host: "ipfs.infura.io",
  port: 5001,
  protocol: "https",
});

const App = () => {
  const [accounts, setAccounts] = useState("");
  const [music, setMusic] = useState(null);
  const [musicCount, setMusicCount] = useState(0);
  const [buffer, setBuffer] = useState(null);
  const [musicData,setMusicData] = useState([]);
  const [imageBuffer,setImageBuffer] = useState(null);
  const [imageHash,setImageHash] = useState("");
  useEffect(() => {
    onSnapshot(collection(db,'musicrecords'), (snapshot) => {
      setMusicData(snapshot.docs.map(doc => doc.data()))
    })
  },[])

  useEffect(() => {
    loadWeb3();
    loadBlockchainData();
  }, []);

  useEffect(() => {
    console.log(musicData);
  }, [musicData]);
  const loadWeb3 = async () => {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      await window.ethereum.enable();
    } else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
    } else {
      window.alert("Non - ethereum browser detected.");
    }
  };

  const uploadOnDatabase = async (musicHash,albumName,artistName,author, genre, lyrics,songLength,songName,imageHash) => {
    const collectionRef = collection(db,"musicrecords");
    const payload = {musicHash,albumName,artistName,author, genre, lyrics,songLength,songName,imageHash}
    await addDoc(collectionRef,payload);
  }

  const loadBlockchainData = async () => {
    const web3 = window.web3;
    const accounts = await web3.eth.getAccounts();
    setAccounts(accounts[0]);
    const networkId = await web3.eth.net.getId();
    const networkData = Music.networks[networkId];
    if (networkData) {
      const music = web3.eth.Contract(Music.abi, networkData.address);
      setMusic(music);
      const musicCount = await music.methods.musicCount().call();
      setMusicCount(musicCount);  
      const musicData = await music.methods.getAllMusicRecords();
      console.log(musicData[0]);
    } else {
      window.alert("Music not uploaded on this network");
    }
  };

  const captureFile = (event) => {
    event.preventDefault();
    const file = event.target.files[0];
    const reader = new window.FileReader();
    reader.readAsArrayBuffer(file);
    reader.onloadend = () => {
      setBuffer(Buffer(reader.result));
    };
  };

  const captureImage = (event) => {
    event.preventDefault();
    const file = event.target.files[0];
    const reader = new window.FileReader();
    reader.readAsArrayBuffer(file);
    reader.onloadend = () => {
      setImageBuffer(Buffer(reader.result));
    };
  }
  const uploadMusic = (
    artistName,
    songName,
    albumName,
    songLength,
    lyrics,
    genre
  ) => {
    console.log("Submitting file to ipfs...");

    ipfs.add(imageBuffer,(error,imageResult) => {
      console.log("Ipfs result", imageResult);
      if (error) {
        console.error(error);
        return;
      }
      setImageHash(imageResult[0].hash);
      ipfs.add(buffer, (error, result) => {
        console.log("Ipfs result", result);
        if (error) {
          console.error(error);
          return;
        }
        music.methods
        .addToBlockchain(
          result[0].hash,
          artistName,
          songName,
          albumName,
          songLength,
          lyrics,          
          genre
          )
          .send({ from: accounts })
          .on("transactionHash", (hash) => {
            uploadOnDatabase(result[0].hash,albumName,artistName,accounts, genre, lyrics,songLength,songName,imageResult[0].hash)
            console.log("Done");          
          });
          
        });
    })

    //adding file to the IPFS
  };

  return (
    <div>
      <Main captureImage={captureImage} captureFile={captureFile} uploadMusic={uploadMusic} />
    </div>
  );
};

export default App;
