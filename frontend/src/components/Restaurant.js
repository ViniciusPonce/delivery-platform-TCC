import Button from '@mui/material/Button'

import '../styles/ButtonText.css'



const Restaurant = () => {
  return (
    <>
        <Button 
        className= 'button'
        variant = 'Text' 
        style={{color: '#6B6B6B'}}
        onClick={() => console.log('Aqui é o Restaurante')}>
          Restaurante
        </Button>
    </>
  )
}

export default Restaurant