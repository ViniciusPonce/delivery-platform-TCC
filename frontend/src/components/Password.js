import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


const Password = () => {

    const handleSubmit = (e) => {
        console.log(e)
        console.log('clicou')
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
                    autoComplete="off"
                    placeholder="Digite sua Senha:" />
            </Form.Group>
            <Form.Group 
                className="mb-3" 
                controlId="formBasicPasswordConfirm">
                <Form.Control 
                    type="passwordConfirm" 
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
