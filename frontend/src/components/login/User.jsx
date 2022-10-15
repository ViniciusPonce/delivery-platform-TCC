import React from 'react'
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button'
import api from '../../services/api'
import { useNavigate } from 'react-router-dom'
import Static from '../../services/staticVar'


function User() {

    const navigate = useNavigate();

    const logout = async () => {
    var url = '/logout'

        api.post(url, Static.tokenApi)
        .then(function (response) {
                localStorage.clear();
                window.location.reload()
            })
        .catch((response) => {
                console.log(response)
        })
    }

    return (
        // <Nav>
        <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">
            Another action
          </NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item onClick={logout}>
                {/* <Button onClick={logout}>
                    Entrar
                </Button> */}
                Sair
          </NavDropdown.Item>
        </NavDropdown>
    //   </Nav>
    );
}

export default User;