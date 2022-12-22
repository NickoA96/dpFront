import {Link} from "react-router-dom";

import React from 'react'

const NavBar = () => {
    return (
        <div className="navbar m-5">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/productos">Productos</Link>
            <Link to="/api">Api</Link>
            <Link to="/formulario">Formulario</Link>
            
        </div>
    )
}

export default NavBar
