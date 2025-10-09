import { useCallback, useContext, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom';
import { TOURS } from '../../tourlist';
import { CartContext } from '../../contexts/cart-context';
import { XIcon } from '@phosphor-icons/react';
import './cart-summary.css'

export const CartSummary = () => {

    const { showCartSummary, setShowCartSummary, cartItems, getTotalCartAmount } = useContext(CartContext);
    
    const totalAmount = getTotalCartAmount();

    const handleShowCartSummary = useCallback(() => {
        setShowCartSummary(false);
    }, [setShowCartSummary]);

    return (
        <div className={`cart-summary ${showCartSummary? 'active' : 'inactive'}`} >
            <div className='header'>
                <h1>Your Basket</h1>
                <button className='closeCartSummaryBttn' onClick={handleShowCartSummary}><XIcon size={15} /></button>
            </div>
            <hr className='separator'/>
            {totalAmount > 0 ? (
            <div className='cart-summary-items'>
                {TOURS.map((tour, index) => {
                    if (cartItems[tour.id]["pax"] > 0) {
                        //console.log(cartItems[tour.id]);
                        return (
                            <>
                                <div className='cart-summary-item' key={index}>
                                    <span className='name'>{tour.tourName}</span>
                                    <span className='date'>Date: {cartItems[tour.id].date}</span>
                                    <span className='pax'>{cartItems[tour.id]["pax"]}{cartItems[tour.id]["pax"] > 1 ? ' people' : ' person'}</span>
                                </div>
                                <hr className='separator' />
                            </>
                        );
                    } else { return null; }
                })}
                <p className='total'>Total: {totalAmount} €</p>
            </div>) : (
            <>
                <p className='emptyBasket p-6 flex justify-center'>Your Basket is Empty.</p>
                <Link to='/tours' onClick={handleShowCartSummary}><div className='button highlight'>MORE TOURS</div></Link>
            </>
            )}
            <Link to='/cart' onClick={handleShowCartSummary}><div className='button'>GO TO BASKET</div></Link>
        </div>
    )
}
