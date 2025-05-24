import React, { useContext } from 'react'
import { TOURS } from '../tours';
import { TourContext } from '../context/tour-context'
import '../styles/cart-summary.css'
import { Link } from 'react-router-dom';
import { XSquareIcon } from '@phosphor-icons/react';

export const CartSummary = ({closeCartSummary}) => {


    const { cartItems, getTotalCartAmount } = useContext(TourContext);
    const totalAmount = getTotalCartAmount();

    return (
        <div className='cartSummary'>
            <button className='closeCartSummaryBttn' onClick={closeCartSummary}><XSquareIcon size={20} /></button>
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
            <Link to='/cart'>Go to basket</Link>
        </div>
    )
}
