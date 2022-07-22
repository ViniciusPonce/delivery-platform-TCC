// import Button from '@mui/material/Button'
// import Modal from '@mui/material/Modal'
// import Box from '@mui/material/Box'
// import Typography from '@mui/material/Typography'
import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react'
import RegistrationData from './RegistrationData'

import '../styles/ButtonText.css'

const CreateAccount = () => {

    // const [open, setOpen] = useState(false)
    const [show, setShow] = useState(false);
    // const handleOpen = () => setOpen(true)
    // const handleClose = () => setOpen(false)

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
      <>
        <Button variant="light" onClick={handleShow}>
            Criar Conta      
        </Button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Falta pouco</Modal.Title>
            {/* <Modal.Subtitle>Preencha com seus dados para criar uma conta</Modal.Subtitle> */}
          </Modal.Header>

          <RegistrationData/>        
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cancelar
            </Button>

            <Button variant="primary" onClick={handleClose}>
              Continuar
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    )
}

export default CreateAccount