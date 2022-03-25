import React, { Component, useEffect, useState } from 'react';
import Web3 from 'web3';
import Identicon from 'identicon.js';
import './App.css';
import Decentragram from '../abis/Decentragram.json'
import Main from './Main'
const ipfsClient = require('ipfs-http-client');
const ipfs = ipfsClient({host : 'ipfs.infura.io', port : 5001,  protocol : 'https'})

const App = () => {
  const [accounts,setAccounts] = useState("");
  const [decentragram,setDecentragram] = useState(null);
  const [imageCount,setImageCount] = useState(0);
  const [buffer,setBuffer] = useState(null);
  const [images,setImages] = useState([]);
  useEffect(() => {
    loadWeb3();
    loadBlockchainData();
    
  },[])

  useEffect(() => {
    console.log(images)
  },[images])
  const loadWeb3 = async () => {
    if(window.ethereum){
      window.web3 = new Web3(window.ethereum);
      await window.ethereum.enable();
    }
    else if(window.web3){
      window.web3 = new Web3(window.web3.currentProvider);
    }
    else{
      window.alert("Non - ethereum browser detected.")
    }
  }

  const loadBlockchainData = async () => {
    const web3 = window.web3;
    const accounts = await web3.eth.getAccounts();
    setAccounts(accounts[0]);
    const networkId = await web3.eth.net.getId();
    const networkData = Decentragram.networks[networkId];
    if(networkData){
      const decentragram = web3.eth.Contract(Decentragram.abi,networkData.address)
      setDecentragram(decentragram);
      const imageCount = await decentragram.methods.imageCount().call()
      setImageCount(imageCount);

      for(var i=1; i<=imageCount ; i++){
        const image = await decentragram.methods.images(i).call();        
        setImages([...images,image])
      }


    }else{
      window.alert("Decentragram not uploaded on this network");
    }
  }


  const captureFile = (event) => {

    event.preventDefault()
    const file = event.target.files[0]
    const reader = new window.FileReader()
    reader.readAsArrayBuffer(file)

    reader.onloadend = () => {
      
      setBuffer(Buffer(reader.result));      
    }
  }

  const uploadImage = description => {
    console.log("Submitting file to ipfs...")

    //adding file to the IPFS
    ipfs.add(buffer, (error, result) => {
      console.log('Ipfs result', result)
      if(error) {
        console.error(error)
        return
      }      
      decentragram.methods.uploadImage(result[0].hash, description).send({ from: accounts }).on('transactionHash', (hash) => {
        console.log("Done");
      })
    })
  }

  return(
    <div>      
      <Main images={images} captureFile={captureFile} uploadImage={uploadImage} />
    </div>
  )
}

export default App;