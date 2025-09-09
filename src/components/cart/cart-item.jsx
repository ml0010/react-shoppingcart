import { useContext } from 'react'
import { MinusCircleIcon, PlusCircleIcon, XSquareIcon } from '@phosphor-icons/react';
import { CartContext } from '../../contexts/cart-context';
import './cart-item.css'

export const CartItem = (props) => {
    const { id, tourName, img, price } = props.data;
    const { cartItems, deleteFromCart, handlePaxChange } = useContext(CartContext);

    const subtotal = () => {
        //console.log(cartItems[id].pax * price);
        return cartItems[id].pax * price;
    };

    return (
        <div className='cart-item' key={id}>
            <img src={img[0]} alt={tourName} />
            <div className='tour-detail'>
                <button className='delete-button' onClick={()=>deleteFromCart(id)}><XSquareIcon size={20} /></button>
                <p className='name'><b>{tourName}</b></p>
                <div className='detail'>
                    <span>Date: {cartItems[id].date}</span>
                    <span>Pax: 
                        <MinusCircleIcon size={15} onClick={() => handlePaxChange(id, 'minus')} />
                        {cartItems[id].pax}
                        <PlusCircleIcon size={15} onClick={() => handlePaxChange(id, 'plus')} />
                        {cartItems[id].pax > 1 ? ` people ` : ` person `}
                        ({price}€ per person)
                    </span>
                </div>                
                <hr className='separator'/>
                <p className='subtotal'>Amount: {subtotal()} €</p>
            </div>
        </div>
    )
}
