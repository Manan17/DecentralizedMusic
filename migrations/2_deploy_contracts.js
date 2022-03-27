const Decentragram = artifacts.require("Decentragram");
const Music = artifacts.require("Music");
module.exports = function(deployer) {
  // Code goes here...  
  deployer.deploy(Music);
};