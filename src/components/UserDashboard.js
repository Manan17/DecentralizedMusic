import React from 'react'
import './UserDashboard.css'
import { Navbar, Nav, NavDropdown, Form, FormControl, Container, Button } from 'react-bootstrap'
import imageT from '../images/trending.png'
import artist from '../images/justin.jpg'
import albumImg from '../images/cover.jpg'

// import ChevronRightIcon from "@material-ui/icons/ChevronRightIcon";
function UserDashboard() {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg" >
        <Container fluid>
          <Navbar.Brand href="#">Nirvana</Navbar.Brand>
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
      <div className='body'>
        <div className='left'>




          <div className='trending'>
            <div className='subH'>
              Top
            </div>
            <div className='head'>
              Trending
            </div>
            <img className='trendingimg' src={imageT} alt='Trending' />
          </div>

          <button className='button_trending_play' type='submit'>Play</button>
          <button className='button_trending_playlist' type='submit'>View Playlist</button>


          <div className='Topreleasescontain'>
            <div className='subH'>Top</div>
            <div className='head'>Releases</div>


            <div className='topreleases'>
              <div className='artistImg'>
                <img className='albumImage' src={albumImg} />
              </div>
              <div className='artist-details'>
                <div className='head'>justin bhai</div>
              </div>
              <div className='songName'>
                <div className='head'>Purpose</div>
              </div>
            </div>

            <div className='topreleases'>
              <div className='artistImg'>
                <img className='albumImage' src={albumImg} />
              </div>
              <div className='artist-details'>
                <div className='head'>justin bhai</div>
              </div>
              <div className='songName'>
                <div className='head'>Purpose</div>
              </div>
            </div>

            <div className='topreleases'>
              <div className='artistImg'>
                <img className='albumImage' src={albumImg} />
              </div>
              <div className='artist-details'>
                <div className='head'>justin bhai</div>
              </div>
              <div className='songName'>
                <div className='head'>Purpose</div>
              </div>
            </div>
          </div>
        </div>
        <div className='right'>

          <div className='subH'>Top</div>
          <div className='head'>Artist</div>

          <div className='Artistcontain'>
            <div className='artist-img'>
              <img className='artistImg' src={artist} />
            </div>

            <div className='artist-details'>
              <div className='head'>justin bhai</div>
              <div className='subh'>Rinkiya ke Papa</div>
            </div>

            <div className='rank'>
              #1
            </div>



          </div>

          <div className='Artistcontain'>
            <div className='artist-img'>
              <img className='artistImg' src={artist} />
            </div>

            <div className='artist-details'>
              <div className='head'>justin bhai</div>
              <div className='subh'>Rinkiya ke Papa</div>
            </div>

            <div className='rank'>
              #1
            </div>



          </div>

          <div className='Artistcontain'>
            <div className='artist-img'>
              <img className='artistImg' src={artist} />
            </div>

            <div className='artist-details'>
              <div className='head'>justin bhai</div>
              <div className='subh'>Rinkiya ke Papa</div>
            </div>

            <div className='rank'>
              #1
            </div>



          </div>
        </div>


      </div>
    </>

  )
}

export default UserDashboard