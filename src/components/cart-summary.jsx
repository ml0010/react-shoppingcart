import React, { useCallback, useContext, useEffect, useRef } from 'react'
import '../styles/cart-summary.css'
import { Link } from 'react-router-dom';
import { TOURS } from '../tourlist';
import { TourContext } from '../context/tour-context'
import { CartContext } from '../context/cart-context';
import { XSquareIcon } from '@phosphor-icons/react';

export const CartSummary = () => {

    const { cartItems, getTotalCartAmount } = useContext(TourContext);
    const { showCartSummary, setShowCartSummary, setIsButtonActive } = useContext(CartContext);
    
    const totalAmount = getTotalCartAmount();

    const handleShowCartSummary = useCallback(() => {
        setShowCartSummary(false);
        setIsButtonActive(true);
    }, [setIsButtonActive, setShowCartSummary]);

    let cartSummaryRef = useRef();

    useEffect(() => {
        if(showCartSummary === true) {
            let handler = (e)=>{
                if(!cartSummaryRef.current.contains(e.target)){
                    handleShowCartSummary();
                    console.log(cartSummaryRef.current);
                }
            };
            document.addEventListener("mousedown", handler);
            return() =>{
                document.removeEventListener("mousedown", handler);
            }
        }
    }, [showCartSummary, handleShowCartSummary]);
   
    return (
        <div className={`cartSummary ${showCartSummary? 'active' : 'inactive'}`} ref={cartSummaryRef}>

            <button className='closeCartSummaryBttn' onClick={handleShowCartSummary}><XSquareIcon size={20} /></button>

            {totalAmount > 0 ? (
            <div className='cartSummaryItems'>
                <h1>Your Basket</h1>
                <hr />
                <div className='cartSummaryItem'>
                    {TOURS.map((tour) => {
                        if (cartItems[tour.id]["pax"] > 0) {
                            console.log(cartItems[tour.id]);
                            return (
                                <>
                                    <p>{tour.tourName} X {cartItems[tour.id]["pax"]}</p>
                                    <p>Date: {cartItems[tour.id].date}</p>
                                    <hr />
                                </>
                            );
                        } else { return null; }
                    })}
                </div>
                <p className='cartSummaryTotal'>Total Amount: {totalAmount}€</p>
            </div>) : (
                <>
                    <h1 className='emptyBasket'>Your Basket is Empty</h1>
                    <hr />
                </>
            )}
            <Link to='/cart' onClick={handleShowCartSummary}><div className='goToBasketBttn'>GO TO BASKET</div></Link>
        </div>
    )
}
