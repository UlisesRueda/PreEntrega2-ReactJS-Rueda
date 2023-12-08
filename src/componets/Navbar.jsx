import React from "react";
import "./style.css"
import "./CartWidget"
import CartWidget from "./CartWidget";
import { NavLink } from "react-router-dom";

function NavBar(){
    return (
        <div className="container-fluid contenedor">
            <h1><NavLink to='/'>Virre Shop</NavLink></h1>

            <nav>
                <ul className="links">
                    <li><NavLink to='/'>Home</NavLink></li>

                    <li><NavLink to='/category/frutas'>Trago Fruta</NavLink></li>

                    <li><NavLink to='/category/chocolate'>Trago Chocolate</NavLink></li>

                    <li className="carrito"><NavLink to='/cart'> <CartWidget/></NavLink></li>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar