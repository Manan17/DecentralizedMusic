import React from 'react'
import './UserDashboard.css'
import {Navbar,Nav,NavDropdown,Form,FormControl,Container,Button} from 'react-bootstrap' 
import imageT from '../images/trending.png'
// import ChevronRightIcon from "@mui/icons-material";
function UserDashboard() {
  return (
    <div className='body'>
      <Navbar bg="dark" variant="dark" expand="lg" >
  <Container fluid>
    <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link href="#action1">Home</Nav.Link>
        <Nav.Link href="#action2">Link</Nav.Link>
        <NavDropdown title="Link" id="navbarScrollingDropdown">
          <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action5">
            Something else here
          </NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="#" disabled>
          Link
        </Nav.Link>
      </Nav>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>
  

  <div className='trending'>
  
    <img className='trendingimg' src={imageT} alt='Trending'/>
  </div>
    <button className='button_trending_play' type='submit'>Play</button>
    <button className='button_trending_playlist' type='submit'>View Playlist</button>
    
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
                  {/* <ChevronRightIcon /> */}
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
                    {/* <ChevronRightIcon /> */}
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
                    {/* <ChevronRightIcon /> */}
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
                  {/* <ChevronRightIcon /> */}
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
                    {/* <ChevronRightIcon /> */}
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
                    {/* <ChevronRightIcon /> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

  </div>
    
    
  )
}

export default UserDashboard