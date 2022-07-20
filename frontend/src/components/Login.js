import Button from '@mui/material/Button'

import '../styles/ButtonText.css'

const Login = () => {
    return (
        <>
            <Button 
            className = 'button'
            variant = 'contained' 
            style={{background: '#347B98'}}
            onClick = {() => {console.log('Usuário entrou')}}>
                Entrar
            </Button>
        </>
    )
}

export default Login