import React from 'react'
import {Form }from 'react-bootstrap'
import {Button} from 'react-bootstrap'
import axios from 'axios'
import { useState } from 'react'

const Formulario = () => {

  //api de mi db 
const URL = "https://backfinal-production.up.railway.app/crear"


//inicializamos variables vacias para el useSatate
const [inputs, setInputs] = useState({
  nombre: '',
  apellido: '',
  dni: ''
})

//funcion para setear las variables
const handleInputChange = (e) => {
  setInputs({
    ...inputs,
    [e.target.name]: e.target.value,
    
  })
}


//funcion del post
const handleClick = async (e) => {
      e.preventDefault()
      if (inputs.nombre === '' || inputs.apellido === '' || inputs.dni === '') {
        alert('No se puede enviar un campo vacio')
      } else {
        await axios.post(URL, inputs) //enviamos datos
      setInputs({ //limpiamos los inputs
      nombre: '',
      apellido: '',
      dni: ''
      })}
}
  return (

      <div className='section m-5 text-center'>
          <h2>Formulario Page</h2>
      
        <Form className=' text-start'>

        { Object.keys(inputs).map((key, index)=> (
          <Form.Group className="mb-3" key={index}>
            <Form.Label id="form">
              {key}
            </Form.Label>
            <Form.Control 
              name={key}
              value={inputs[key]}
              onChange={handleInputChange}
            />
          </Form.Group>

        ))}
      
          <div className="text-center w-100">
              <Button variant="primary" type="submit" onClick={handleClick} >
                  Enviar Datos
              </Button>
          </div>
        </Form>
      </div>
      
    
  )
}

export default Formulario;
