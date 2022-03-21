import React, { useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import decode from 'jwt-decode'
import { useState } from 'react'

export const RutaPrivada = ({ children }) => {
    const [token, setToken] = useState(localStorage.getItem('token'))

    useEffect(() => {
        if (localStorage.getItem('token')) {
            try {
                const result = decode(localStorage.getItem('token'))
                console.log(result);
                setToken(localStorage.getItem('token'))
                // usar useContext para setear un contexto del usuario dentro de la aplicacion con el resultado de la decodificacion
            } catch (error) {
                alert('No se puede registrar a este usuario')
                localStorage.removeItem('token')
                setToken(null)
            }
        }
    }, [])

    return token ? children : <Navigate to={'/'} />
}
