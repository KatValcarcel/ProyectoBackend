import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { resetPassword } from '../services/password.service';
import Barra from '../components/Barra';

export const ResetPassword = () => {
    const navigate = useNavigate();
    const [form, setForm] = useState({
        password: '',
    })
    const editarValor = (e) => {
        setForm((preValue) => ({ ...preValue, [e.target.id]: e.target.value }));
    }

    const cambiarPassword = async (e) => {
        e.preventDefault();
        try {
            const { data, status } = await resetPassword(form);
            console.log(data, status);
            navigate('/');
        } catch (e) {
            alert(e.response.data.message);
        }
    }
    return (
        <div>
            <Barra />
            <Form onSubmit={cambiarPassword} className='container'>

                <Form.Group className="mb-3">
                    <Form.Label htmlFor='password'>Nuevo Password*</Form.Label>
                    <Form.Control id='password' type="password" placeholder="*********" onChange={editarValor} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Registrar
                </Button>
            </Form></div>
    )
}
