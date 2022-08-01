import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


const Password = () => {

    const handleSubmit = () => {
        console.log('clicou')
    }

    return (
        <>
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Crie sua senha</Form.Label>
                <Form.Text 
                    className="text-muted">
                    Sua senha deve conter um
                    tamanho máximo de 16 entre letras e números
                    1 Letra maiúscula
                    1 Letra minúscula
                    Numeros entre 0 a 9
                    Não deve conter caracteres !*@#
                </Form.Text>
            </Form.Group>
            <Form.Group 
                className="mb-3" 
                controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control 
                    type="password" 
                    placeholder="Password" />
            </Form.Group>
            <Form.Group 
                className="mb-3" 
                controlId="formBasicCheckbox">
                <Form.Check 
                    type="checkbox" 
                    label="Check me out" />
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
