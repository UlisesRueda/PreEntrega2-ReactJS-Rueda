import React, {useState} from "react";
import { Link } from 'react-router-dom';
import ItemCount from "./ItemCount";
import { useCartContext } from "./CartContext";

import "./style.css"

const ItemDetail = ({data}) => {
    const [goToCart, setGoToCart] = useState(false);
    const { addProduct } = useCartContext();

    const onAdd = (quantity) =>{
        setGoToCart(true)
        addProduct(data, quantity)
    }

    return (
    <div className="container-item">
    <div  className="drinks">
    <img src={data.image} alt={data.title} />
    <p>{data.title}</p>
    <p>{data.price}</p> 
    {
        goToCart
            ? <Link to='/cart'>Terminar de comprar</Link>
            : <ItemCount initial={1} stock={5} onAdd={onAdd} />
    }
    
  <Link to = {`/category/${data.category}`}>
      <div>Main Category</div>
  </Link>
  </div>
</div>

    );
}

export default ItemDetail;