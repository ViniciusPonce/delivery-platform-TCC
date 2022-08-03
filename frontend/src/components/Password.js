import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


const Password = () => {

    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Formulário Enviado')
        console.log(`password:${password},\nconfirmPassWord: ${confirmPassword}`)
    }

    return (
        <>
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Crie sua senha</Form.Label>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Text 
                    className="text-muted">
                    Sua senha deve conter um tamanho máximo de 16 entre letras e números 1 Letra maiúscula 1 Letra minúscula números 
                    entre 0 a 9 Não deve conter caracteres !*@#
                </Form.Text>
            </Form.Group>
            <Form.Group 
                className="mb-3" 
                controlId="formBasicPassword">
                <Form.Control 
                    type="password" 
                    value={password}
                    onChange ={(e) => setPassword(e.target.value)}
                    autoComplete="off"
                    placeholder="Digite sua Senha:" />
            </Form.Group>
            <Form.Group 
                className="mb-3" 
                controlId="formBasicPasswordConfirm">
                <Form.Control 
                    type="password" 
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    autoComplete="off"
                    placeholder="Confirme sua senha:" />
            </Form.Group>
            <Button 
                variant="primary" 
                type="submit">
                Submit
            </Button>
        </Form>
        </>
    )
}

export default Password
