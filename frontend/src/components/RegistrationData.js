import React from 'react';
import { IMaskInput } from 'react-imask';
import Form from 'react-bootstrap/Form';

const RegistrationData = () => {


    return (
      <Form>
        <Form.Group 
          className="mb-3"
          controlId="formBasicEmail" 
          >
            <Form.Control 
              type="email" 
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
              autoComplete="off"
              placeholder="Telefone Ex: 99999-9999" 
              as={IMaskInput} 
              mask={"(00) 0 0000-0000"}
              />
        </Form.Group>
      </Form>
    )
}

export default RegistrationData
