import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FormRegister from './FormRegister.jsx'
// import RegistrationData from './RegistrationData'
import Password from '../Password';

function CreateAccount() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
      <>
        <Button 
          variant="link" 
          onClick={handleShow} 
          style={{boxShadow: 'none', textDecoration: 'none', color: 'rgb(107, 107, 107)'}}>
            Criar Conta      
        </Button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Falta pouco</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {/* <FormTest /> */}
            <FormRegister/>
            {/* <Password/> */}
          </Modal.Body>  
          <Modal.Footer>
          </Modal.Footer> 
        </Modal>
      </>
    )
}

export default CreateAccount;
