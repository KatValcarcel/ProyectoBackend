import React, { Fragment, useEffect, useState } from 'react'
import decode from 'jwt-decode'
import { listarMascotas } from '../services/mascota.service'
import { Mascota } from '../components/Mascota'

export const Contacto = () => {

    const token = localStorage.getItem('token')
    const [user, setUser] = useState()
    const [mascotas, setMascotas] = useState([])

    useEffect(() => {
        setUser(decode(token))

        async function traerMascotas() {
            try {
                const { data } = await listarMascotas(token)
                console.log(data);
                setMascotas(data)
            } catch (e) {
                alert('Error al traer la información')
            }
        }

        traerMascotas()
    }, [token])


    return (
        <Fragment>
            <div>
                <div>
                    {
                        user && <h1> Hola {user.nombre} {user.apellido} </h1>
                    }
                    <h1>
                        Hola {user?.nombre} {user?.apellido}
                    </h1>
                </div>
                <div>
                    {/* Pasando los props */}
                    {mascotas.map((mascota) => (<Mascota key={mascota._id} {...mascota} />))}
                </div>

            </div>
        </Fragment>
    )
}
