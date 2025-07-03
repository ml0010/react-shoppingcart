import React, { useContext } from 'react'
import '../styles/cart-item.css'
import { XSquareIcon } from '@phosphor-icons/react';
import { CartContext } from '../context/cart-context';

export const CartItem = (props) => {
    const { id, tourName, img, price } = props.data;
    const { cartItems, deleteFromCart } = useContext(CartContext);

    const subtotal = () => {
        //console.log(cartItems[id].pax * price);
        return cartItems[id].pax * price;
    };

    return (
        <div className='cartItem' key={id}>
            <img src={img[0]} alt={tourName} />
            <div className='description'>
                <button className='deleteBttn' onClick={()=>deleteFromCart(id)}><XSquareIcon size={20} /></button>
                <p className='name'><b>{tourName}</b></p>
                <hr />
                <div className='detail'>
                    <p>Date: {cartItems[id].date}</p>
                    <p>Pax: {price}€{cartItems[id].pax > 1 && <> x {cartItems[id].pax} people</>}{cartItems[id].pax === 1 && <> x {cartItems[id].pax} person</>}</p>
                </div>                
                <hr />
                <p><b>Subtotal: {subtotal()} €</b></p>
            </div>
        </div>
    )
}
