pragma solidity ^0.5.0;
pragma experimental ABIEncoderV2;
contract Music {
    uint256 public musicCount = 0;

    MusicRecord[] musicRecords;

    struct MusicRecord {
        uint256 id;        
        string musicHash;
        string artistName;
        string songName;
        string albumName;
        uint256 releaseDate;
        string songLength;
        string lyrics;
        string genre;
        uint256 tipAmount;
        address payable author;

    }

    event UploadMusic(
        uint256 id,
        string musicHash,
        string artistName,
        string songName,
        string albumName,
        uint256 releaseDate,
        string songLength,
        string lyrics,
        string genre,
        uint256 tipAmount,
        address payable author
        
    );

    function addToBlockchain(string memory musicHash,string memory artistName,string memory songName,string memory albumName,string memory songLength,string memory lyrics,string memory genre) public{
        musicCount = musicCount + 1;
        musicRecords.push(MusicRecord(musicCount,musicHash,artistName,songName,albumName,block.timestamp,songLength,lyrics,genre,0,msg.sender));
        emit UploadMusic(musicCount,musicHash,artistName,songName,albumName,block.timestamp,songLength,lyrics,genre,0,msg.sender);
    }

    function getAllMusicRecords() public view returns(MusicRecord[] memory){
        //returns music records
        return musicRecords;
    }

    function getMusicCount() public view returns(uint256) {
        return musicCount;
    }


}