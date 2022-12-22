import React from 'react'
import {useState, useEffect} from 'react'
import {Button} from 'react-bootstrap'
import {Row, Col } from 'react-bootstrap'
import Tarjetas from '../Componentes/Tarjetas'




URL = "https://rickandmortyapi.com/api/character/"



let nombre = "Moro";
// nombre = "Hemma";


const Api = () => {

  const [traerDatos, setTraerDatos] = useState([])

  useEffect(() => {
    fetch(URL)
    .then(response => response.json())
    .then(json => setTraerDatos(json))
    // .then(json => setTraerDatos(json.results))
  }, [])

  const handleImprimir = () => {
    console.log(traerDatos);
    // console.log(import.meta.env.VITE_REACT_APP_API_URL);
    
  }
  
  return (
    
    <div className='section m-5'>
      <hr></hr>
        <h2 className='text-center'>
          Api Page - {nombre}
        </h2>
      <hr></hr>
      <div className="text-center m-4">
        <Button className="bg-warning text-black fw-bold" onClick={handleImprimir}>Imprimir </Button>
      </div>

      <div >
        <Row>
                {traerDatos.results && traerDatos.results.map((personaje) =>
            <Col key= {personaje.id}>
                    <Tarjetas traerDatos={personaje} />
            </Col>
                )}
        </Row>
      </div>
      
        {/* otra forma de hacerlo ---> para hacerlo hacer este debo llamar a json.results arriba */}
        {/* <div >
        <Row>
          {traerDatos.map((c) => 
            <Col key={c.id} >
              <Tarjetas traerDatos={c} />
            </Col>
          )}
        </Row>
      </div> */}


    </div>
    
  )
}


export default Api