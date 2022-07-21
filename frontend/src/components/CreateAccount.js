// import Button from '@mui/material/Button'
// import Modal from '@mui/material/Modal'
// import Box from '@mui/material/Box'
// import Typography from '@mui/material/Typography'
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
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <RegistrationData/>        
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
            {/* <Button 
            className = 'button' 
            variant = 'Text'
            style = {{color:'#347B98'}}
            onClick={handleOpen}>
                Criar Conta
            </Button>
            
            <Modal
            className = ''
            open = {open}
            onClose = {handleClose}
            >
                <Box sx = {style.Box}>
                    <Typography  style={style.Label}>
                        Falta pouco
                    </Typography>
                    <Typography sx = {{mt:2}}>
                        Preencha com seus dados para criar uma conta                    
                    </Typography>
                    <RegistrationData/>
                </Box>
            </Modal> */}
        </>
    )
}

// const style = {
//     Box : {
//     position: 'absolute',
//     top: '50%',
//     left: '50%',
//     transform: 'translate(-50%, -50%)',
//     width: 400,
//     bgcolor: 'background.paper',
//     border: '2px solid #000',
//     boxShadow: 24,
//     p: 4,
//     }, 
//   }

export default CreateAccount