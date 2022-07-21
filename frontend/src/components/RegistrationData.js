import Form from 'react-bootstrap/Form';

const RegistrationData = () => {


    return (
        <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail" autoComplete="off">
          <Form.Control type="email" placeholder="Informe seu E-mail" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword" autoComplete="off">
          <Form.Control type="nameLastName" placeholder="Nome e Sobrenome" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword" autoComplete="off">
          <Form.Control type="cpf" placeholder="Informe seu CPF" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword" autoComplete="off">
          <Form.Control type="birthDate" placeholder="Data de Nascimento" autoComplete="off"/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword" autoComplete="off">
          <Form.Control type="phone" placeholder="Telefone Ex: 99999-9999" />
        </Form.Group>
      </Form>
    )
}

export default RegistrationData
