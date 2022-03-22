import React from 'react'

export const Mascota = (nombre, especie, razaId, color, sexo, edad_aprox, mascotaImagen, descripcion) => {
    return (
        <div className='card'>
            <img src={mascotaImagen} alt="mascota-imagen" />
            <div className='card-body'>
                <h4 className='card-title'>Nombre: {nombre}</h4>
                <h4 className='card-title'>Especie: {especie}</h4>
                <h4 className='card-title'>Raza: {razaId.nombre}</h4>
                <h4 className='card-title'>Color: {color}</h4>
                <h4 className='card-title'>Sexo: {sexo}</h4>
                <h4 className='card-title'>Edad Aproximada: {edad_aprox}</h4>
                <h4 className='card-title'>Características: {descripcion}</h4>
            </div>
        </div>
    )
}
