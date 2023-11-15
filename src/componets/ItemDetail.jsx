import React from "react";
import "./style.css"

const ItemDetail = ({data}) => {
    return (
        <div className="container-item">
            <a href="" className="drinks">
                <img src={data.image} alt={data.title} /> 
                <p>{data.title}</p>
                <p>{data.price}</p>
            </a>
        </div>
    );
}

export default ItemDetail;