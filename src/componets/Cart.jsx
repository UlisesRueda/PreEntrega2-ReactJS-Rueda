import React from "react";
import { useCartContext } from "./CartContext";
import { Link } from 'react-router-dom'
import ItemCart from './ItemCart'
import { addDoc, collection, getFirestore } from "firebase/firestore";

const Cart = () => {
    const {cart, totalPrice} = useCartContext();

    const order = {
        buyer: {
            name: 'Pablo',
            email: 'Pablo@gmail.com',
            phone: '123123',
            address: 'asd',
        },
        items: cart.map(product => ({ id: product.id, title: product.title, price: product.price, quantity: product.quantity })),
        total: totalPrice(),
    }

    const handleClick = () =>{
        const db = getFirestore();
        const ordersCollection = collection(db, 'orders');
        addDoc(ordersCollection, order)
        .then(({ id }) => console.log(id));
    }


    if(cart.length === 0){
        return(
            <>
                <p>No hay elementos en el carrito</p>
                <Link to='/'>Hacer compras</Link>
            </>
        );
    }

    return(
        <>
        {
            cart.map(product => <ItemCart key={product.id} product={product} />)
        }
        <p className="total">
            total: {totalPrice()}
        </p>
        <button className="checkOut" onClick={handleClick}>Check Out</button>
        </>
    )
}

export default Cart;