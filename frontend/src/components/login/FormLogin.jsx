import React from 'react'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import {Link, Typography} from '@mui/material'

import '../../styles/ButtonText.css'

const FormLogin = () => {
    return (
        <Form>
            <Form.Group className='mb-3'>
                <Typography variant="h6" align="center" style={{color: '#6B6B6B'}}>Faça login na sua conta</Typography>
            </Form.Group>

            <Form.Group className="mb-3 " controlId="formBasicEmail">
                <Form.Control type="email" placeholder="E-mail" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                {/* <Form.Label>Senha</Form.Label> */}
                <Form.Control type="password" placeholder="Senha" />
            </Form.Group>

            <Typography variant="subtitle2" className="mb-3" align="center" style={{color: '#6B6B6B'}}>
                Não tem uma conta? 
                <Link href="/register" underline="none"> Cadastre-se</Link>
            </Typography>

            <Form.Group align="center">
                <Button className='button mb-3' type="submit">
                    Entrar
                </Button>
            </Form.Group>
        </Form>
    )
}

export default FormLogin
