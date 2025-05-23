import React, { useContext } from 'react'
import { TourContext } from '../context/tour-context';
import '../styles/cart-item.css'

export const CartItem = (props) => {
    const { id, tourName, img, description, duration, languages, meetingPoint, price } = props.data;
    const { cartItems, deleteFromCart } = useContext(TourContext);

    return (
        <div className='cartItem'>
            <img src={img} alt={tourName} />
            <div className='description'>
                <p><b>{tourName}</b></p>
                <p>{price}€{cartItems[id] > 1 && <> X {cartItems[id]} people</>}</p>
                <div className='deleteBttn'>
                    <button onClick={()=>deleteFromCart(id)}>Delete</button>
                </div>
            </div>
        </div>
    )
}
