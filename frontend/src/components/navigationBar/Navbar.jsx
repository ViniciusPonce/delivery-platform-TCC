import React from 'react'
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
import User from '../login/User.jsx'

function NavigationBar() {
  const navigate = useNavigate();

  const ActionButtons = () => {

    if (isLogged()) {
      return <User/>;
    }

    return renderConditions();
  }

  const renderConditions = () => {
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

  const isLogged = () => {
    var userToken = localStorage.getItem('authorization');

    return userToken !== null;
  }

  return (
    <Navbar bg="light" variant="light" expand="lg">
      <Container>
        <Navbar.Brand href="#" style={{flexDirection:'row'}}>
          <img src={DelivexIcon} alt="Logo" height={'30px'} onClick={() => navigate('/')}/>
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
          <ActionButtons/>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavigationBar