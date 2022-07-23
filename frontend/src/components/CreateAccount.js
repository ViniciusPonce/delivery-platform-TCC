import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react'

import RegistrationData from './RegistrationData'

import '../styles/ButtonText.css'

const CreateAccount = ({email, nameLastName, cpf, birthDate, phone}) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
        <Button variant="link" onClick={handleShow} style={{boxShadow: 'none'}}>
            Criar Conta      
        </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Falta pouco</Modal.Title>
        </Modal.Header>
        <RegistrationData/>        
        <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
            Cancelar
          </Button>
          <Button variant="primary">
            Continuar
          </Button>
        </Modal.Footer>
      </Modal>
        </>
    )
}

export default CreateAccount