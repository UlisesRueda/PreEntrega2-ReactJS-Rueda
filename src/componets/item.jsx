import React from "react";
import "./style.css"
import { Link } from "react-router-dom";

const Item = ({info}) => {
    return (
        <div className="container-item">
            <div className="drinks">
                <img src={info.image} alt={info.title} /> 
                <p>{info.title}</p>
                <p>${info.price}</p>
                <Link to = {`/items/${info.id}`}>
                <div >Seleccionar</div>
            </Link>
            </div>
        </div>
        
    )
}

export default Item