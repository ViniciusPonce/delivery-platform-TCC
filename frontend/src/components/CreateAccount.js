import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import RegistrationData from './RegistrationData'

const CreateAccount = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
        <Button 
          variant="link" 
          onClick={handleShow} 
          style={{boxShadow: 'none'}}>
            Criar Conta      
        </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Falta pouco</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <RegistrationData/> 
        </Modal.Body>  
        <Modal.Footer>
        </Modal.Footer> 
      </Modal>
        </>
    )
}

export default CreateAccount