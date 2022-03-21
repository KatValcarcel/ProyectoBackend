import React, { Fragment } from 'react';
import { Form, Button } from 'react-bootstrap';

export const RegistrarMascota = () => {
    const crearMascota = (e) => {
        e.preventDefault();
        console.log("hello there I am working");
    }
    return (
        <Fragment>
            <Form onSubmit={crearMascota} className='container'>
                <Form.Group className="mb-3" >
                    <Form.Label>Nombre y Apellido*</Form.Label>
                    <Form.Control type="text" placeholder="Lucho/Karen" />
                </Form.Group>
                <Form.Group className="mb-3"  >
                    <Form.Label>Usuario*</Form.Label>
                    <Form.Control type="text" placeholder="karen73" />
                </Form.Group>
                <Form.Group className="mb-3"  >
                    <Form.Label>Teléfono de contacto*</Form.Label>
                    <Form.Control type="tel" placeholder="999 999 999" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Correo*</Form.Label>
                    <Form.Control type="email" placeholder="usuario@mascotasperdidas.com" />
                    <Form.Text className="text-muted">
                        No compartiremos tu email con nadie ;)
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Password*</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Registrar
                </Button>
            </Form>
        </Fragment>
    )
}
