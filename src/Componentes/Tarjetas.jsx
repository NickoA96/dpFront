import React from 'react'
import {Card , Button } from 'react-bootstrap'

const Tarjetas = ({traerDatos}) => {
  return (
    <Card  className='m-3' style={{ width: '18rem' }}>
        <Card.Img variant="top" src={traerDatos.image} />
        <Card.Body>
            <Card.Title>{traerDatos.nombre}</Card.Title>
            <Card.Text>
                <span>ID: {traerDatos.id}</span> <br/>
                <span>Gender: {traerDatos.gender}</span> <br/>
                <span>Status: {traerDatos.status}</span> <br/>
                <span>Species: {traerDatos.species}</span> <br/>
            </Card.Text>
            <div className='row'>
            <Button variant="primary fw-bold " href='/'>Tarjetas</Button>
            </div>
        </Card.Body>
    </Card>
  )
}

export default Tarjetas


