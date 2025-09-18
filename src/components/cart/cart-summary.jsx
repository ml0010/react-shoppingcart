import { useCallback, useContext, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom';
import { TOURS } from '../../tourlist';
import { CartContext } from '../../contexts/cart-context';
import { XIcon } from '@phosphor-icons/react';
import './cart-summary.css'

export const CartSummary = () => {

    const { showCartSummary, setShowCartSummary, setIsButtonActive, cartItems, getTotalCartAmount } = useContext(CartContext);
    
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
                    //console.log(cartSummaryRef.current);
                }
            };
            document.addEventListener("mousedown", handler);
            return() =>{
                document.removeEventListener("mousedown", handler);
            }
        }
    }, [showCartSummary, handleShowCartSummary]);
   
    useEffect(() => {
        setTimeout(() => {
            handleShowCartSummary();
        }, 15000);
    }, [showCartSummary]);


    return (
        <div className={`cartSummary ${showCartSummary? 'active' : 'inactive'}`} ref={cartSummaryRef}>
            <div className='header'>
                <h1>Your Basket</h1>
                <button className='closeCartSummaryBttn' onClick={handleShowCartSummary}><XIcon size={15} /></button>
            </div>
            {totalAmount > 0 ? (
            <div className='cartSummaryItems'>
                <hr className='separator'/>
                <div className='cartSummaryItem'>
                    {TOURS.map((tour, index) => {
                        if (cartItems[tour.id]["pax"] > 0) {
                            //console.log(cartItems[tour.id]);
                            return (
                                <div key={index}>
                                    <p><b>{tour.tourName}</b> X {cartItems[tour.id]["pax"]}</p>
                                    <p>Date: {cartItems[tour.id].date}</p>
                                    <hr className='separator' />
                                </div>
                            );
                        } else { return null; }
                    })}
                </div>
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
