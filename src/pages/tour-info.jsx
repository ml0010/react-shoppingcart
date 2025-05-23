import React, { useContext } from 'react'
import { TourContext } from '../context/tour-context';

export const TourInfo = ({props, showTourInfo, closeTourInfo}) => {
  const {cartItems, addToCart} = useContext(TourContext);
  const {id, tourName, img, description, duration, languages, meetingPoint, price} = props.data;
  
  const addTourToCart = () => {
    addToCart(id);
    closeTourInfo();
  }

  if (!showTourInfo) {return null}
  return (
    <div className='tourInfo'>
      <h1>tour-info</h1>
      <button onClick={closeTourInfo}>Close</button>
      <button onClick={addTourToCart}>Add To Cart</button>
    </div>
  )
}
