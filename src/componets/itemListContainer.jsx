import React, {useState, useEffect} from "react";
import Title from "./Title";
import ItemList from "./itemList";
import { useParams } from "react-router-dom";
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore'


const ItemListContainer = (props) =>{

    const [data, setData] = useState([]);

    const {id} = useParams();

    useEffect(() => {
        const querydb = getFirestore();
        const queryCollection = collection(querydb, 'products');
        if(id){
            const queryFilter = query(queryCollection, where('category', '==', id))
            getDocs(queryFilter)
                .then(res => setData(res.docs.map(product => ({ id: product.id, ...product.data() }))));
        }else{
            getDocs(queryCollection)
                .then(res => setData(res.docs.map(product => ({ id: product.id, ...product.data() }))));
        }

    }, [id])
 
    return (
        <>
            <Title greeting={props.texto} />
            <ItemList data={data}/>
        </>
            
    )
}

export default ItemListContainer;