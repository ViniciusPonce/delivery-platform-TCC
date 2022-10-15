import React, {useState} from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import {Link, Typography} from '@mui/material'
import api from '../../services/api'
import { useNavigate } from 'react-router-dom'

import '../../styles/ButtonText.css'

const FormLogin = () => {
    const navigate = useNavigate();
    const [inputs, setInputs] = useState({});

    function handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;

        setInputs(values=> ({...values, [name]: value}));
    }

    function handleSubmit(event) {
        event.preventDefault();

        loginUser(inputs);
    }

    const loginUser = async (payload) => {
        var url = '/login'

        api.post(url, payload)
        .then(function (response) {
                const token = response.data.authorization;

                localStorage.setItem('authorization', token);
                window.location.reload();
            })
        .catch(function(error) {
                alert(error.response.data.error);
        })
    }

    return (
        <Form>
            <Form.Group className='mb-3'>
                <Typography variant="h6" align="center" style={{color: '#6B6B6B'}}>Faça login na sua conta</Typography>
            </Form.Group>

            <Form.Group className="mb-3 " controlId="email">
                <Form.Control 
                type="email" 
                placeholder="E-mail" 
                name="email"
                value={inputs.email || ""}
                onChange={handleChange}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="password">
                <Form.Control 
                type="password" 
                placeholder="Senha" 
                name="password"
                value={inputs.password || ""}
                onChange={handleChange}
                />
            </Form.Group>

            <Form.Group>
            <Typography variant="subtitle2" className="mb-3" align="center" style={{color: '#6B6B6B'}}>
                Não tem uma conta? 
                <Link href="/register" underline="none"> Cadastre-se</Link>
            </Typography>
            </Form.Group>

            <Form.Group align="center">
                <Button className='button mb-3' type="submit" onClick={handleSubmit}>
                    Entrar
                </Button>
            </Form.Group>
        </Form>
    )
}

export default FormLogin
