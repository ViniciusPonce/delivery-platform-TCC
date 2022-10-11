import React, {useState, setState} from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

function FormRegister() {
    
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value

        setInputs(values=> ({...values, [name]: value}))
    }
    
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(inputs)
        // alert(inputs);
    }

    return (
        <Form >
            <p>Faça seu cadastro</p>
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

            <Form.Group className="mb-3" controlId="cpf">
            <Form.Control 
                type="text" 
                placeholder="CPF" 
                name="cpf"
                value={inputs.cpf || ""}
                onChange={handleChange}
            />
            </Form.Group>

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

            {/* <Form.Group className="mb-3" controlId="sellerCheckbox">
            <Form.Check type="checkbox" label="Sou lojista" />
            </Form.Group> */}

            <Button variant="primary" type="submit" onClick={handleSubmit}>
            Cadastrar
            </Button>
        </Form>
    )
}

export default FormRegister;