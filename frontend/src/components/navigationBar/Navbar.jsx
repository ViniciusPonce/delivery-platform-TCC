import React from 'react'
import {IconButton, Typography} from '@mui/material'
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Restaurant from '../Restaurant'
import Convenience from '../Convenience'
import Marketplace from '../Marketplace'
import Login from '../login/ButtonLogin.jsx'
import CreateAccount from '../register/CreateAccount.jsx'
import DelivexIcon from './delivEX.png'
import { useNavigate } from 'react-router-dom'


function NavigationBar() {

  const navigate = useNavigate();

  const BottonActions = () => {
    var notRenderingPaths = [
      '/register',
      '/login'
    ]

    var pathname = window.location.pathname;
    var matchPath = notRenderingPaths.indexOf(pathname) != -1;

    if (!matchPath) {
      return  (
            <Nav.Link>
              <Login/>
              <CreateAccount/>
            </Nav.Link> 
      )
    }
  }

  return (
    <Navbar bg="light" variant="light" expand="lg">
      <Container>
        <Navbar.Brand href="#" style={{flexDirection:'row'}}>
          <img src={DelivexIcon} alt="Logo" height={'30px'} onClick={() => navigate('/')}/>
          {/* <Typography className='navbar-brand' style={{background: '#D9D9D9', color: '#6B6B6B'}}>Plataforma de Delivery</Typography> */}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
          >
            <Nav.Link>
              <Restaurant/>
            </Nav.Link>
            <Nav.Link>
              <Convenience/>
            </Nav.Link>
            <Nav.Link >
              <Marketplace/>
            </Nav.Link>
          </Nav>
          <Nav>
            <BottonActions/>
            {/* <Nav.Link>
              <Login/>
              <CreateAccount/>
            </Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavigationBar