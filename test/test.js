const { assert } = require('chai')

const Music = artifacts.require('./Music.sol')

require('chai')
  .use(require('chai-as-promised'))
  .should()

contract('Music', ([deployer, author, tipper]) => {
  let music

  before(async () => {
    music = await Music.deployed()
  })
  describe('deployment', async () => {
    it('deploys successfully' ,async () => {
      const address = await music.address
      assert.notEqual(address, 0x0)
      assert.notEqual(address, '')
      assert.notEqual(address, null)
      assert.notEqual(address, undefined)
    })
  })

  describe('musicrecords', async () => {
    let result,musicCount;
    const hash = 'abc123';

    before(async () => {
      //musicHash,artistName,songName,albumName,songLength,lyrics,genre
      result = await music.addToBlockchain(hash,'Manan','Hey YA', 'MananAlbum','2mins','hello','Sufi')
      musicCount = await music.musicCount();
    })

    it('creates music', async() => {
      assert.equal(musicCount,1);
      const event = result.logs[0].args;
      assert.equal(event.id.toNumber(),musicCount.toNumber(),'id is correct');
      assert.equal(event.musicHash,hash,'Hash is correct');
      assert.equal(event.artistName, 'Manan','artist name is correct' );
      assert.equal(event.songName,'Hey YA' ,'songName amount is correct');
      assert.equal(event.albumName, 'MananAlbum', 'albumName is correct');
      assert.equal(event.songLength,'2mins', 'song length is correct');
      assert.equal(event.lyrics, 'hello',' lyrics are correct');
      assert.equal(event.genre, 'Sufi', 'Genre correct');
  })
  it('list music records' , async () => {
      const event = await music.getAllMusicRecords();
      console.log(event)
      assert.equal(event[0][1],hash,'Hash is correct');
      assert.equal(event[0][2], 'Manan','artist name is correct' );
      assert.equal(event[0][3],'Hey YA' ,'songName amount is correct');
      assert.equal(event[0][4], 'MananAlbum', 'albumName is correct');
      assert.equal(event[0][6],'2mins', 'song length is correct');
      assert.equal(event[0][7], 'hello',' lyrics are correct');
      assert.equal(event[0][8], 'Sufi', 'Genre correct');
    })

}) 

})