import React, {useState, useEffect} from "react";
import ItemDetail from "./ItemDetail";
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

const ItemDetailContainer = () => {
    const [data, setData] = useState([]);

    const [ detalleId ] = useParams();

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(drinks);
            }, 3000);
        });

        getData.then(res => setData(res.find(trago => trago.id === parseInt(detalleId))));
    }, []);


    return (
        <ItemDetail data={data} />
    );
}

export default ItemDetailContainer;