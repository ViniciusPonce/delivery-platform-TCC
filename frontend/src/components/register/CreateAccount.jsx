import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FormRegister from './FormRegister.jsx'
// import RegistrationData from './RegistrationData'
import Password from '../Password';
import { useNavigate } from 'react-router-dom'

function CreateAccount() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const navigate = useNavigate();

    return(

        <Button 
          variant="link" 
           
          style={{boxShadow: 'none', textDecoration: 'none', color: 'rgb(107, 107, 107)'}}
          onClick={() => navigate('/register')}>
            Criar Conta      
        </Button>


    )
}

export default CreateAccount;
