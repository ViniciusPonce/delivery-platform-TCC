import React, {useState} from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import FormLogin from './FormLogin.jsx'
import { Navigate, useNavigate } from 'react-router-dom'

import '../../styles/ButtonText.css'

function Login() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const navigate = useNavigate();

    return (
        <>
            <Button 
                className = 'button'
                // variant = 'outline-light' 
                size='sm'
                onClick = {() => navigate('/login')}>
                Fazer login
            </Button>

        </>
    )
}

export default Login