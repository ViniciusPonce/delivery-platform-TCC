import Button from '@mui/material/Button'

import '../styles/ButtonText.css'

const CreateAccount = () => {
    return (
        <>
            <Button 
            className = 'button' 
            variant = 'Text'
            style = {{color:'#347B98'}}
            onClick={() => {console.log('Criando Conta')}}>
                Criar Conta
            </Button>
        </>
    )
}

export default CreateAccount