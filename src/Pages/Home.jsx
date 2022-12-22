import React from 'react'
import { useState , useEffect } from 'react'
import axios from 'axios'

import Table from 'react-bootstrap/Table';

const Home = () => {

  const [personas, setPersonas] = useState([])


  //api de mi db
  const URL = "https://backfinal-production.up.railway.app/"

  //funcion para usar el  useEffect

  const getPersonas = async () => {
    try {
      const {data} = await axios.get(URL)
      setPersonas(data.personas)
      console.log(data.personas);
    }
    catch (error) {
      console.log(error)
    }
  }

  //useEffect
  useEffect(() => {
    getPersonas()
  }, [])


  return (
    <div className='section m-5'>
      
        <h2>Home Page</h2>
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>Id</th>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>DNI</th>
        </tr>
      </thead>
      <tbody>
        {personas.map((p) => (
          <tr key={p._id}>
            <td>{p._id}</td>
            <td>{p.nombre}</td>
            <td>{p.apellido}</td>
            <td>{p.dni}</td>
          </tr>
        ))}
      </tbody>
      
    </Table>

    </div>
  )
}

export default Home

