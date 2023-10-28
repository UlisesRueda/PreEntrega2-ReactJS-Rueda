import React from "react";
import "./style.css"
import "./CartWidget"
import CartWidget from "./CartWidget";

function NavBar(){
    return (
        <div className="container-fluid contenedor">
            <h1><a href="#">Virre Shop</a></h1>

            <nav>
                <ul className="links">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Productos</a></li>
                    <li><a href="#">Nosotros</a></li>
                    <li className="carrito"><a href="#"> <CartWidget/></a></li>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar