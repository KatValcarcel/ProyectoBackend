import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap';
import { enviarMail } from '../services/password.service';
import { useNavigate } from 'react-router-dom';

export const OlvidoContraseña = () => {

    const restaurar = async (e) => {
        e.preventDefault();
        try {
            const { data, status } = await enviarMail(form);
            console.log(data, status);
            navigate('/')

        } catch (e) {
            alert(e.response.data.message);
        }
    }
    const [form, setForm] = useState({
        email: '',
    })
    const editarValor = (e) => {
        setForm((preValue) => ({ ...preValue, [e.target.id]: e.target.value }));
    }
    const navigate = useNavigate();
    return (
        <div>
            <h2>Restaurar Contraseña</h2>
            <Form onSubmit={restaurar} className='container'>
                <Form.Group className="mb-3">
                    <Form.Label htmlFor='email'>Correo*</Form.Label>
                    <Form.Control id='email' type="email" placeholder="usuario@mascotasperdidas.com" onChange={editarValor} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Restaurar
                </Button>
            </Form>
        </div>
    )
}
