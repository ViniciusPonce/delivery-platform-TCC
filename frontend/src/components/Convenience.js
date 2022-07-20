import Button from '@mui/material/Button'

import '../styles/ButtonText.css'

const Convenience = () => {


    return (
        <>
            <Button 
            className= 'button'
            variant = 'Text' 
            style={{color: '#6B6B6B'}}
            onClick={() => {console.log('Aqui é a Conveniência')}}>
                Conveniência
            </Button>
        </>
    )

}

export default Convenience