import React, { useContext, useEffect, useRef } from 'react'
import '../styles/cart-summary.css'
import { Link } from 'react-router-dom';
import { TOURS } from '../tours';
import { TourContext } from '../context/tour-context'
import { CartContext } from '../context/cart-context';
import { XSquareIcon } from '@phosphor-icons/react';

export const CartSummary = () => {

    const { cartItems, getTotalCartAmount } = useContext(TourContext);
    const { showCartSummary, setShowCartSummary } = useContext(CartContext);
    const totalAmount = getTotalCartAmount();

    let cartSummaryRef = useRef();

    useEffect(() => {
        let handler = (e)=>{
            if(!cartSummaryRef.current.contains(e.target)){
                setShowCartSummary(false);
                console.log(cartSummaryRef.current);
            }      
        };
        document.addEventListener("mousedown", handler);
        return() =>{
            document.removeEventListener("mousedown", handler);
        }
    }, [showCartSummary]);

   
    return (
        <div className={`cartSummary ${showCartSummary? 'active' : 'inactive'}`} ref={cartSummaryRef}>
            <button className='closeCartSummaryBttn' onClick={() => setShowCartSummary(false)}><XSquareIcon size={20} /></button>

            {totalAmount > 0 ? (
            <div className='cartSummaryItems'>
                <h1>Your Basket Summary</h1>
                <div className='cartSummaryItem'>
                    {TOURS.map((tour) => {
                        if (cartItems[tour.id]["pax"] > 0) {
                        return <p>{tour.tourName} X {cartItems[tour.id]["pax"]}</p>;
                        } else { return null; }
                    })}
                </div>
                <p>Total: {totalAmount}€</p>
            </div>) : (
                <h1>Your Basket is Empty</h1>
            )}

            <Link to='/cart'>Checkout</Link>
        </div>
    )
}
