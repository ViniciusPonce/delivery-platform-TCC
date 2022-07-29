import React from 'react'
import {IconButton, Typography} from '@mui/material'
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Restaurant from './Restaurant'
import Convenience from './Convenience'
import Marketplace from './Marketplace'
import Login from './Login'
import CreateAccount from './CreateAccount'

const Navbar1 = ()=> {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#" style={{flexDirection:'row'}}>
          <IconButton edge = 'start'>
            <DeliveryDiningIcon/>
          </IconButton>
          <Typography className='navbar-brand' style={{background: '#D9D9D9', color: '#6B6B6B'}}>Plataforma de Delivery</Typography>
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
            <Nav.Link>
              <Login/>
              <CreateAccount/>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navbar1