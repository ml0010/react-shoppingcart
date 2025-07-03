import React, { useContext } from 'react'
import { useNavigate } from "react-router-dom";
import { TOURS } from '../tourlist'
import { CartItem } from '../components/cart-item';
import '../styles/cart.css';
import Logo from '../assets/map.webp';
import { Faq } from '../components/faq';
import { GobackButton } from '../components/goback-button';
import { CartContext } from '../context/cart-context';

export const Cart = () => {

    const { cartItems, getTotalCartAmount } = useContext (CartContext);
    const totalAmount = getTotalCartAmount();

    const navigate = useNavigate();

    return (
        <div className='cart'>
            <GobackButton />
            {totalAmount > 0 ? (
                <>
                <h1>Your basket</h1>
                <div className='cartItems'>
                    {TOURS.map((tour) => {
                    if (cartItems[tour.id]["pax"] > 0) {
                        return <CartItem data={tour} key={tour.id} />;
                    } else { return null; }
                    })}
                </div>
                <div className='checkout'>
                    <p className='totalAmount'>Total Amount: {totalAmount} €</p>
                    <div className='bttns'>
                        <button className='moerTourBttn' onClick={() => navigate('/tours')}>MORE TOURS</button>
                        <button className='checkoutBttn' onClick={() => navigate('/booking')}>CHECKOUT</button>
                    </div>
                </div>
                </>
            ) : (
                <>
                <h1>Your Basket is Empty.</h1>
                <img className='logo' src={Logo} alt='map' />
                <p>Click MORE TOURS button below to see available tours.</p>
                <div className='bttns'>
                    <button className='moerTourBttn' onClick={() => navigate('/tours')}>MORE TOURS</button>
                    <button className='checkoutBttn' onClick={() => navigate('/home')}>GO TO HOME</button>
                </div>
                </>
            )}
            <Faq />
        </div>
    )
}
