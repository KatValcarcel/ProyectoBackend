import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';

export const Login = () => {
    return (
        <Fragment>
            <div className='container'>
                <Form >
                    <Form.Group className="mb-3">
                        <Form.Label>Correo</Form.Label>
                        <Form.Control type="email" placeholder="usuario@mascotasperdidas.com" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Ingresar
                    </Button>
                </Form>
                <div>
                    ¿Eres nuevo? <Link to='/register'>Registrar</Link>
                </div>
            </div>
        </Fragment>
    )
}
