import React, {useState, useEffect} from "react";
import Title from "./Title";
import ItemCount from "./ItemCount";
import ItemList from "./itemList";
import { useParams } from "react-router-dom";

const drinks = [
    {
    id: 1,
    title: "Trago #1",
    image: "https://www.thecocktaildb.com/images/media/drink/xvwusr1472669302.jpg",
    price: "$16108",
    category:"frutas"
    },
    {
    id: 2,
    title: "Trago #2",
    image: "https://www.thecocktaildb.com/images/media/drink/l74qo91582480316.jpg",
    price: "$17833",
    category:"chocolate"
    },
    {
    id: 3,
    title: "Trago #3",
    image: "https://www.thecocktaildb.com/images/media/drink/2x8thr1504816928.jpg",
    price: "$17222",
    category:"frutas"
    },
]
    


const ItemListContainer = (props) =>{

    const [data, setData] = useState([]);

    const {categoriaID} = useParams();

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(drinks);
            }, 1000)
        });
        if(categoriaID){
            getData.then(res => setData(res.filter(drink => drink.category === categoriaID)));
        }else{
            getData.then(res => setData(res));
        }

    }, [categoriaID])

    const onAdd = (quantity) =>{
        alert(`Compraste ${quantity} unidades`);
    }
 
    return (
        <>
            <Title greeting={props.texto} />
            <ItemCount initial={1} stock={5} onAdd={onAdd} />
            <ItemList data={data}/>
        </>
            
    )
}

export default ItemListContainer