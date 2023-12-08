import React, {useState, useEffect} from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { getFirestore, doc, getDoc } from 'firebase/firestore'



const ItemDetailContainer = () => {
    const [data, setData] = useState(null);
    const {id} = useParams();


    useEffect(()=> {
        const querydb = getFirestore();
        const queryDoc = doc(querydb, 'products', id)
        getDoc(queryDoc)
        .then(res => setData({id: res.id, ...res.data()}));
        }, [id]);


    return (
    <div >
        {data ? <ItemDetail data = {data}/> : <>Loading ...</>}
    </div>
    )
}

export default ItemDetailContainer;