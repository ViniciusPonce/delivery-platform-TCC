import React, { useState } from 'react';
import { IMaskInput } from 'react-imask';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const RegistrationData = ({}) => {
  
  const [email, setEmail] = useState('')
  const [nameLastName, setNameLastName] = useState('')
  const [cpf, setCpf] = useState('')
  const [birthDate, setBirthDate] = useState('')
  const [phone, setPhone] = useState('')

  const handleSubmit = (e) => {
    console.log('estou aqui kk')
  }

    return (
      <Form onSubmit={handleSubmit}>
        <Form.Label>Preencha com seus dados para criar uma conta</Form.Label>
        <Form.Group 
          className="mb-3"
          controlId="formBasicEmail" 
          >
            <Form.Control 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="off"
              placeholder="Informe seu E-mail"
              as={IMaskInput}
              mask={/^\S*@?\S*$/} 
              />
        </Form.Group>
        <Form.Group 
          className="mb-3" 
          controlId="formBasicNameLastName" 
          >
            <Form.Control 
              type="nameLastName"
              onChange={(e) => setNameLastName(e.target.value)}
              value={nameLastName}
              autoComplete="off"  
              placeholder="Nome e Sobrenome" 
              />
        </Form.Group>
        <Form.Group 
          className="mb-3" 
          controlId="formBasicCpf" 
          >
            <Form.Control 
              type="cpf" 
              value={cpf}
              onChange={(e) => setCpf(e.target.value)}
              autoComplete="off"
              placeholder="Informe seu CPF" 
              as={IMaskInput} 
              mask="000.000.000-00"
              />
        </Form.Group>
        <Form.Group 
          className="mb-3" 
          controlId="formBasicBirthDate" 
          >
            <Form.Control 
              type="birthDate" 
              value={birthDate}
              onChange={(e) => setBirthDate(e.target.value)}
              placeholder="Data de Nascimento" 
              autoComplete="off" 
              as={IMaskInput} 
              mask="00/00/0000"
              />
        </Form.Group>
        <Form.Group 
          className="mb-3" 
          controlId="formBasicPhone" 
          >
            <Form.Control 
              type="phone" 
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              autoComplete="off"
              placeholder="Telefone Ex: 99999-9999" 
              as={IMaskInput} 
              mask={"(00) 0 0000-0000"}
              />
        </Form.Group>
          <Button variant="primary">
            Continuar
          </Button>
      </Form>
    )
}

export default RegistrationData
