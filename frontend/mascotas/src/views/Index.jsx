import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import logo from "../images/logo.png";
import { Button } from 'react-bootstrap';

export const Index = () => {


    return (
        <Fragment>
            <div className='container'>
                <div className='row'>
                    <img src={logo} alt="logo" className="logo" />
                </div>
                <div className='row'>
                    Redes Sociales
                </div>
                <div className='row'>
                    <Link to='/login' className='col'>
                        <Button>Ingresar</Button>
                    </Link>
                    <Link to='/registrar' className='col'>
                        <Button>Registro</Button>
                    </Link>
                </div>
            </div>
        </Fragment>
    )
}

export default Index