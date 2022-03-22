import React, { Fragment, useEffect, useState } from 'react'
import decode from 'jwt-decode'
import { listarMascotas } from '../services/mascota.service'
import { Mascota } from '../components/Mascota'
import Barra from '../components/Barra';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const Contacto = () => {

    const token = localStorage.getItem('token')
    const [user, setUser] = useState()
    const [mascotas, setMascotas] = useState([])

    useEffect(() => {
        setUser(decode(token))

        async function traerMascotas() {
            try {
                const { data } = await listarMascotas(user.id, token)
                setMascotas(data)
                console.log(data);
            } catch (e) {
                alert('Error al traer la información')
            }
        }

        traerMascotas()
    }, [user.id, token])


    return (
        <Fragment>
            <Barra />
            <div>
                <div>
                    <h4>
                        Hola, {user?.nombre}
                    </h4>
                </div>
                <div>
                    {/* Pasando los props */}
                    {!mascotas ? mascotas.map((mascota) => (<Mascota key={mascota._id} {...mascota} />)) : "Aun no tienes publicaciones registradas"}
                </div>
                <div>
                    <Link to='/registro-mascota' className='col'>
                        <Button>Realizar una publicación</Button>
                    </Link>
                </div>
            </div>

        </Fragment>
    )
}
