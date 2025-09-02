import { useContext } from 'react'
import { XSquareIcon } from '@phosphor-icons/react';
import { CartContext } from '../../contexts/cart-context';
import './cart-item.css'

export const CartItem = (props) => {
    const { id, tourName, img, price } = props.data;
    const { cartItems, deleteFromCart } = useContext(CartContext);

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
                    <p>Date: {cartItems[id].date}</p>
                    <p>Pax: 
                        {
                            cartItems[id].pax > 1 ? 
                            <>{cartItems[id].pax} people</> : 
                            <>{cartItems[id].pax} person</>
                        }
                        ({price}€ per person)
                    </p>
                </div>                
                <hr className='separator'/>
                <p className='subtotal'>Amount: {subtotal()} €</p>
            </div>
        </div>
    )
}
