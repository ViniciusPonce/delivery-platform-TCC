import {
  AppBar,Toolbar,Typography,IconButton, Stack 
  } 
  from '@mui/material'
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining'

import Restaurant from './Restaurant'
import Convenience from './Convenience'
import Marketplace from './Marketplace'
import Login from './Login'

import '../styles/ButtonText.css'
import CreateAccount from './CreateAccount'


const  Navbar = ()=> {
  return (
  <AppBar className = "navbar navbar-expand-lg bg-light" position='static' enableColorOnDark>
      <Toolbar className='container-fluid'>
        <IconButton edge = 'start'>
          <DeliveryDiningIcon/>
        </IconButton>
        <Typography className='navbar-brand' style={{background: '#D9D9D9', color: '#6B6B6B'}}>Plataforma de Delivery</Typography>
        <div className='container-fluid'>
          <Stack direction='row' spacing={2}>
            <Restaurant/>
            <Convenience/>
            <Marketplace/>
          </Stack>
        </div>
        <Stack direction='row' spacing={2}>
          <Login/>
          <CreateAccount/>
        </Stack>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar