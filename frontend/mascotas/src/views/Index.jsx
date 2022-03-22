import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Barra from '../components/Barra';
// import { Publicacion } from '../components/Publicacion';
// import BarraLateral from '../components/BarraLateral';

export const Index = () => {


    return (
        <Fragment>
            <Barra />
            <div className='container'>
                <div className='row'>
                    <Link to='/login' className='col'>
                        <Button>Ingresar</Button>
                    </Link>
                    <Link to='/registrar' className='col'>
                        <Button>Registro</Button>
                    </Link>
                </div>
            </div>
            {/* <BarraLateral></BarraLateral> */}
            <div>
                {/* mascotas.map((mascota) => (<Mascota key={mascota._id} {...mascota} />)) */}
            </div>
        </Fragment>
    )
}

export default Index