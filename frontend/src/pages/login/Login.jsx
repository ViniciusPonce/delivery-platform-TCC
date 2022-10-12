import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ContainerNav from '../container/Container.jsx'
import FormLogin from '../../components/login/FormLogin.jsx'


function Login() {

    return (
        <ContainerNav>
            <Container className="flex-column p-4 justify-content-center">
                <Row >
                    <Col/>
                    <Col><FormLogin/></Col>
                    <Col/>
                </Row>
            </Container>
        </ContainerNav>
    )
}

export default Login