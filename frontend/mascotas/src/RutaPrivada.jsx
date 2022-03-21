import React, { useState, useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import decode from 'jwt-decode'

export const RutaPrivada = ({ children }) => {
    const [token, setToken] = useState()

    useEffect = (() => {
        if (localStorage.getItem('token')) {
            try {
                const result = decode(token)
                setToken(localStorage.getItem('token'))
                console.log(result)
            } catch (error) {
                alert('Información de usuario incorrecta')
                localStorage.removeItem('token')
            }
        }
    }, [])

    return token ? children : <Navigate to={'/'} />
}
