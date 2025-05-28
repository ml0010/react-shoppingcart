import React, { useContext } from 'react'
import { useNavigate } from "react-router-dom";
import { TOURS } from '../tours'
import { TourContext } from '../context/tour-context'
import { CartItem } from './cart-item';
import '../styles/cart.css'

export const Cart = () => {

  const { cartItems, getTotalCartAmount } = useContext (TourContext);
  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();

  return (
    <div className='cart'>
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
              <button className='checkoutBttn' onClick={() => navigate('/checkout')}>CHECKOUT</button>
            </div>
          </div>
        </>
      ) : (
        <>
          <h1>Your Basket is Empty.</h1>
          <h2>No plans yet?</h2>
          <p>Click MORE TOURS button below to see available tours.</p>
          <div className='bttns'>
            <button className='moerTourBttn' onClick={() => navigate('/tours')}>MORE TOURS</button>
            <button className='checkoutBttn' onClick={() => navigate('/home')}>GO TO HOME</button>
          </div>
        </>
      )}
    </div>
  )
}
