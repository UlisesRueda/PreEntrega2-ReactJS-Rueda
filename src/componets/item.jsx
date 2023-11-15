import React from "react";
import "./style.css"
import { Link } from "react-router-dom";

const Item = ({info}) => {
    return (
        <div className="container-item">
            <Link to={`/detalle/${info.id}`} className="drinks">
                <img src={info.image} alt={info.title} /> 
                <p>{info.title}</p>
                <p>{info.price}</p>
            </Link>
        </div>
        
    )
}

export default Item