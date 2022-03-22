import React, { Fragment, useState, useEffect } from 'react';
import decode from 'jwt-decode'
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { registrarMascota } from '../services/mascota.service';
import { getRazas } from '../services/raza.service';


export const RegistrarMascota = () => {

    const token = localStorage.getItem('token')
    const [user, setUser] = useState()
    const [razas, setRazas] = useState([]);

    const sexos = ["HEMBRA",
        "MACHO"]
    const especies = ["PERRO",
        "GATO", "OTROS"]

    useEffect(() => {
        setUser(decode(token))

        async function traerMascotas() {
            try {
                const { data } = await getRazas(token)
                setRazas(data)
            } catch (e) {
                alert('Error al traer la información')
            }
        }

        traerMascotas()
    }, [token])

    const navigate = useNavigate();
    const [form, setForm] = useState({
        nombre: '',
        especie: '',
        razaId: '',
        color: '',
        sexo: '',
        edad_aprox: '',
        contactoId: '',
    })
    const editarValor = (e) => {
        setForm({ contactoId: user.id });
        setForm((preValue) => ({ ...preValue, [e.target.id]: e.target.value }));
    }

    const crearMascota = async (e) => {
        e.preventDefault();
        try {
            const { data, status } = await registrarMascota(form);
            localStorage.setItem('token', data.token)
            console.log(data, status);
            navigate('/contacto');
        } catch (e) {
            alert(e.response.data.message);
        }
    }
    return (
        <Fragment>
            <h2>Ingresa los datos de la mascota 😸🐶</h2>
            <Form onSubmit={crearMascota} className='container'>
                <Form.Group className="mb-3" >
                    <Form.Label htmlFor='nombre'>Nombre*</Form.Label>
                    <Form.Control id="nombre" type="text" placeholder="Firulais - No sé" onChange={editarValor} />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label htmlFor='especie'>¿Cuál es su especie?</Form.Label>
                    <Form.Select onChange={editarValor} id='especie'>
                        <option>Seleccione</option>
                        {
                            especies.map(especie => <option key={especie}> {especie} </option>)
                        }
                    </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3"  >
                    <Form.Label htmlFor='sexo'>Sexo</Form.Label>
                    <Form.Select onChange={editarValor} id='sexo'>
                        <option>Seleccione</option>
                        {
                            sexos.map(sexo => <option key={sexo}> {sexo} </option>)
                        }
                    </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3"  >
                    <Form.Label htmlFor='razaId'>Raza</Form.Label>
                    <Form.Select onChange={editarValor} id='razaId'>
                        <option>Seleccione</option>
                        {razas.map(({ nombreRaza }, i) => (
                            <option> {nombreRaza}</option>
                        ))}
                    </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label htmlFor='color'>Color</Form.Label>
                    <Form.Control id='color' type="text" placeholder="Marrón con manchitas blancas" onChange={editarValor} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label htmlFor='edad_aprox'>Edad Aproximada</Form.Label>
                    <Form.Control id='edad_aprox' type="text" placeholder="2 años" onChange={editarValor} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label htmlFor='descripcion'>Descripción</Form.Label>
                    <Form.Control id='descripcion' type="text" placeholder="Llevaba un traje de Batman" onChange={editarValor} />
                </Form.Group>
                <Form.Group controlId="formFile" className="mb-3">
                    <Form.Label id='mascotaImagen'>Sube una foto de tu mascota</Form.Label>
                    <Form.Control type="file" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Registrar
                </Button>
            </Form>
        </Fragment>
    )
}
