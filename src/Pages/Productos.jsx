import React from 'react'
import products from '../data'
import {Row, Col } from 'react-bootstrap'
import Imagenes from '../Componentes/Imagenes'

// const Productos = () => {
//   return (
//     <div className='section m-5'>
//         <h2>Productos Page</h2>
//         <div className="products">
//             {products.map (product => {
//               return (
//                 <article className='text-center ' key = {product.id}>
//                   <h5>{product.name}</h5>
//                   <img src={product.image} alt={product.name} />
//                 </article>
//               )
//             })}
//         </div>
//     </div>
//   )
// }

const Productos = () => {
  return (
    <div className='section m-5 text-center ' >
        <h2>Productos Page</h2>
        <div >
        <Row>
          {products.map((p) => 
            <Col key={p.id} >
              <Imagenes products={p} />
            </Col>
          )}
        </Row>
      </div>
    </div>
  )
}






export default Productos