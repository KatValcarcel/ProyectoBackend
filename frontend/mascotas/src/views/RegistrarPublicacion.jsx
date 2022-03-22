import React, { Fragment, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { registrarPublicacion } from '../services/publicacion.service'

export const RegistrarPublicacion = () => {
    const estados = ["PERDIDO",
        "ENCONTRADO"]

    const navigate = useNavigate();
    const [form, setForm] = useState({
        estado: '',
        descripcion: '',
        fechaAprox: '',
        lugar: '',
        mascotaId: '',
    })
    const editarValor = (e) => {
        setForm((preValue) => ({ ...preValue, [e.target.id]: e.target.value }));
    }

    const publicar = async (e) => {
        e.preventDefault();
        try {
            const { data, status } = await registrarPublicacion(form);
            localStorage.setItem('token', data.token)
            console.log(data, status);
            navigate(`/publicacion/${data._id}`);
        } catch (e) {
            alert(e.response.data.message);
        }
    }
    return (
        // TODO: DEBE SELECCIONAR UNA MASCOTA, SI NO HAY, REDIRIGE A REGISTRO DE MASCOTA
        <Fragment>
            <h2>Datos del Anuncio</h2>
            <Form onSubmit={publicar} className='container'>
                <Form.Group className="mb-3" >
                    <Form.Label htmlFor='estado'>¿Cuál es el estado de la mascota?</Form.Label>
                    <Form.Select onChange={editarValor} id='estado'>
                        {
                            estados.map(estado => <option key={estado}> {estado} </option>)
                        }
                    </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label htmlFor='descripcion'>Descríbenos, ¿Qué pasó?</Form.Label>
                    <Form.Control as="textarea" rows={3} id='descripcion' onChange={editarValor} />

                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label htmlFor='fechaAprox'>Fecha aproximada</Form.Label>
                    <Form.Control id='fechaAprox' type="date" onChange={editarValor} />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label htmlFor='lugar'>¿En qué lugar fue?</Form.Label>
                    <Form.Control id="lugar" type="text" onChange={editarValor} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Publicar
                </Button>
            </Form>
        </Fragment>
    )
}
