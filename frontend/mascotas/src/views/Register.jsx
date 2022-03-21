import React, { Fragment, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { createUser } from '../services/user.service';

export const Register = () => {
    const navigate = useNavigate();
    const [form, setForm] = useState({
        nombre: '',
        usuario: '',
        telefono: '',
        email: '',
        password: '',

    })
    const editarValor = (e) => {
        setForm((preValue) => ({ ...preValue, [e.target.id]: e.target.value }));
    }

    const crearContacto = async (e) => {
        e.preventDefault();
        try {
            const { data, status } = await createUser(form);
            localStorage.setItem('token', data.token)
            console.log(data, status);
            navigate('/contacto');
        } catch (e) {
            alert(e.response.data.message);
        }
    }
    return (
        <Fragment>
            <Form onSubmit={crearContacto} className='container'>
                <Form.Group className="mb-3" >
                    <Form.Label htmlFor='nombre'>Nombre y Apellido*</Form.Label>
                    <Form.Control id="nombre" type="text" placeholder="Lucho/Karen" onChange={editarValor} />
                </Form.Group>
                <Form.Group className="mb-3"  >
                    <Form.Label htmlFor='usuario'>Usuario*</Form.Label>
                    <Form.Control id='usuario' type="text" placeholder="karen73" onChange={editarValor} />
                </Form.Group>
                <Form.Group className="mb-3"  >
                    <Form.Label htmlFor='telefono'>Teléfono de contacto*</Form.Label>
                    <Form.Control id='telefono' type="tel" placeholder="123 456 789" onChange={editarValor} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label htmlFor='email'>Correo*</Form.Label>
                    <Form.Control id='email' type="email" placeholder="usuario@mascotasperdidas.com" onChange={editarValor} />
                    <Form.Text className="text-muted">
                        No compartiremos tu email con nadie ;)
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label htmlFor='password'>Password*</Form.Label>
                    <Form.Control id='password' type="password" placeholder="Password" onChange={editarValor} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Registrar
                </Button>
            </Form>
        </Fragment>
    )
}
