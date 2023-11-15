import React from "react";
import Item from "./item";

const ItemList = ({data = []}) => {
    return (
        data.map(drink => <Item key={drink.id} info={drink}/> )
    )
}

export default ItemList;