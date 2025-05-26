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
      <div>
        <h1>Your basket</h1>
      </div>
      <div className='cartItems'>
        {TOURS.map((tour) => {
          if (cartItems[tour.id]["pax"] > 0) {
            return <CartItem data={tour} key={tour.id} />;
          } else { return null; }
        })}
      </div>
      <div className='checkout'>
        {totalAmount > 0 ? (
          <>
            <p>Total: {totalAmount} €</p>
            <div className='bttns'>
              <button className='moerTourBttn' onClick={() => navigate('/tours')}>More tours</button>
              <button className='checkoutBttn' onClick={() => navigate('/checkout')}>Checkout</button>
            </div>
          </>
        ) : (
          <>
            <h1>No plans yet?</h1>
          </>
        )}
      </div>
    </div>
  )
}
