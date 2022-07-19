import {
  AppBar, Toolbar, Typography, IconButton
} from '@mui/material'
import DeliveyDinigIcon from '@mui/icons-material/DeliveryDining'


const Navbar = () => {
  return (
    <>
      <AppBar position = 'statistic' enableColorOnDark>
        <Toolbar>
          <IconButton color='inherid' edge='start'>
            <DeliveyDinigIcon/>
          </IconButton> 
          <Typography variant='h6'>Plataforma de delivery</Typography>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Navbar