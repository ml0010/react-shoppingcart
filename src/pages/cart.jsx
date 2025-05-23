import React, { useContext } from 'react'
import { TOURS } from '../tours'
import { TourContext } from '../context/tour-context'
import { CartItem } from './cart-item';
import '../styles/cart.css'

export const Cart = () => {

  const { cartItems } = useContext (TourContext);

  return (
    <div className='cart'>
      <div>
        <h1>Your basket</h1>
      </div>
      <div className='cartItems'>
        {TOURS.map((tour)=>{
          if (cartItems[tour.id] > 0) {
            return <CartItem data={tour} key={tour.id} />;
          }
        })}
      </div>
    </div>
  )
}
