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
  <AppBar position='static' enableColorOnDark>
      <Toolbar style={{background: '#F2F2F2'}}>
        <IconButton edge = 'start'>
          <DeliveryDiningIcon/>
        </IconButton>
        <Typography variant="h6" style={{background: '#D9D9D9', color: '#6B6B6B'}}>Plataforma de delivery</Typography>
        <div className='space'>
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