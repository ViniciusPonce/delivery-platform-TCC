import React, {useState, setState} from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import {Link, Typography} from '@mui/material'

import '../../styles/ButtonText.css'

function FormRegister() {
    const [inputs, setInputs] = useState({});

    function handleChange(event) {
        const name = event.target.name;
        const value = event.target.value

        setInputs(values=> ({...values, [name]: value}))
    }
    
    function handleSubmit(event) {
        event.preventDefault();
        console.log(inputs)
        // alert(inputs);
    }

    function handleSellerCheckbox(event) {
        console.log('aqui')
        var checked = event.target.checked;
        var cnpj = document.getElementById('cnpj')
        var stateInscription = document.getElementById('stateInscription')

        if (!checked) {
            cnpj.hidden = true;
            stateInscription.hidden = true;
        } 
        
        if (checked) {
            cnpj.hidden = false;
            stateInscription.hidden = false;
        }
    }

    const SellerFormGroup = () => {
        return (
        <>
            <Form.Group className="mb-3" controlId="cnpj">
            <Form.Control 
            type="text" 
            placeholder="CNPJ" 
            name="cnpj"
            value={inputs.cnpj || ""}
            onChange={handleChange} hidden
            />
            </Form.Group>

            <Form.Group className="mb-3" controlId="stateInscription">
            <Form.Control 
                type="text" 
                placeholder="Inscrição Estadual" 
                name="stateInscription"
                value={inputs.stateInscription || ""}
                onChange={handleChange} hidden
            />
            </Form.Group>
        </>    
        );
    }

    function teste() {

    }

    return (
        <Form >
            <Form.Group className="mb-3">
                <Typography variant="h5" align="center" style={{color: '#6B6B6B'}}>Falta Pouco!</Typography>
                <Typography variant="subtitle2" align="center" style={{color: '#6B6B6B'}}>Faça seu cadastro</Typography>
            </Form.Group>

            <Form.Group className="mb-3" controlId="name">
            <Form.Control 
                type="text" 
                placeholder="Nome" 
                name="name"
                value={inputs.name || ""}
                onChange={handleChange}
            />
            </Form.Group>
    
            <Form.Group className="mb-3" controlId="email">
            <Form.Control 
                type="text" 
                placeholder="E-mail" 
                name="email"
                value={inputs.email || ""}
                onChange={handleChange}
            />
            </Form.Group>

            <Form.Group className="mb-3" controlId="cpf" >
            <Form.Control 
                type="text" 
                placeholder="CPF" 
                name="cpf"
                value={inputs.cpf || ""}
                onChange={handleChange}
            />
            </Form.Group>

            <SellerFormGroup controlId="sellerForm"/>

            <Form.Group className="mb-3" controlId="birthday">
            <Form.Control 
                type="date" 
                placeholder="Data de Nascimento" 
                name="birthday"
                value={inputs.birthday || ""}
                onChange={handleChange}
            />
            </Form.Group>

            <Form.Group className="mb-3" controlId="phone">
            <Form.Control 
                type="phone" 
                placeholder="Telefone Ex:(16) 99999-9999" 
                name="phone"
                value={inputs.phone || ""}
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

            <Form.Group className="mb-3" controlId="confirmPassword">
            <Form.Control 
                type="password" 
                placeholder="Confirme sua senha" 
                name="confirmPassword"
                value={inputs.confirmPassword || ""}
                onChange={handleChange}
            />
            </Form.Group>

            <Form.Group className="mb-3" controlId="sellerCheckbox">
            <Form.Check type="checkbox" label="Sou lojista" onChange={handleSellerCheckbox}/>
            </Form.Group>

            <Form.Group align="center" className="mb-3">
                <Button className='button' type="submit" onClick={handleSubmit}>
                Cadastrar
                </Button>
            </Form.Group>
            
            <Typography variant="subtitle2" align="center" style={{color: '#6B6B6B'}}>
            Já tem uma conta? 
            <Link href="/login" underline="none"> Faça login</Link>
            </Typography>
        </Form>
        
        
    )
}

export default FormRegister;