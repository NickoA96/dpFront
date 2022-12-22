import React from 'react'
import {Card } from 'react-bootstrap'

const Imagenes = ({products}) => {
  return (
    <Card  className='m-3' style={{ width: '18rem' }}>
        <Card.Img variant="top" src={products.image} />
        <Card.Body>
            <Card.Title>{products.name}</Card.Title>
        </Card.Body>
    </Card>
  )
}

export default Imagenes