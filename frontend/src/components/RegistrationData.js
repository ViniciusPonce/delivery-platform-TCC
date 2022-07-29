import React, { useState } from 'react';
import { IMaskInput } from 'react-imask';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal'

const RegistrationData = () => {

  const [email, setEmail] = useState('')
  const [nameLastName, setNameLastName] = useState('')
  const [cpf, setCpf] = useState('')
  const [birthDate, setBirthDate] = useState('')
  const [phone, setPhone] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Formulário enviado')
    console.log(`email: ${email},\nnameLastName: ${nameLastName},\ncpf: ${cpf},\nbirthDate: ${birthDate},\nphone: ${phone}`)

    setEmail('')
    setNameLastName('')
    setCpf('')
    setBirthDate('')
    setPhone('')
  }

    return (
      <div>
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
                placeholder="Informe seu E-mail: "
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
                placeholder="Nome e Sobrenome: " 
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
                placeholder="Informe seu CPF: " 
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
                placeholder="Data de Nascimento: " 
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
                placeholder="Telefone: " 
                as={IMaskInput} 
                mask={"(00) 0 0000-0000"}
                />
          </Form.Group>
            <Button 
              type='submit'
              variant="primary" 
              >
              Continuar
            </Button>
        </Form>
      </div>
    )
}

export default RegistrationData
