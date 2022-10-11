import React, {useState} from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from '@mui/material/Button'
import FormLogin from './FormLogin.jsx'

import '../../styles/ButtonText.css'

function Login() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button 
                className = 'button'
                variant = 'contained' 
                style={{background: '#347B98', fontSize: '12px'}}
                onClick = {handleShow}>
                Entrar
            </Button>

            <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Login</Modal.Title>
            </Modal.Header>
            <Modal.Body>

                <FormLogin/>
            </Modal.Body>  
            <Modal.Footer>
            </Modal.Footer> 
            </Modal>
        </>
    )
}

export default Login