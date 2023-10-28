import React from "react";
import Title from "./Title";
import ItemCount from "./ItemCount";

const ItemListContainer = (props) =>{

    const onAdd = (quantity) =>{
        alert(`Compraste ${quantity} unidades`);
    }
 
    return (
        <>
            <Title greeting={props.texto} />
            <ItemCount initial={1} stock={5} onAdd={onAdd} />
        </>
            
    )
}

export default ItemListContainer