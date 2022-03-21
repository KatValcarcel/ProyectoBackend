import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button, Container } from 'react-bootstrap';

export const Login = () => {
    const iniciarSesion = (e) => {
        e.preventDefault();
        console.log("hello there I am working");
    }
    return (
        <Fragment>
            <Container>
                <Form onSubmit={iniciarSesion}>
                    <Form.Group className="mb-3">
                        <Form.Label htmlFor='correoLogin'>Correo</Form.Label>
                        <Form.Control id="correoLogin" type="email" placeholder="usuario@mascotasperdidas.com" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label htmlFor='passwordLogin'>Password</Form.Label>
                        <Form.Control id="passwordLogin" type="password" placeholder="Password" />
                    </Form.Group>
                    <Button variant="primary" type="submit" >
                        Ingresar
                    </Button>
                </Form>
                <div>
                    ¿Eres nuevo? <Link to='/register'>Registrar</Link>
                </div>
            </Container>
        </Fragment>
    )
}
