import React, { useState, useContext } from 'react'
import { TourContext } from '../context/tour-context';

export const TourInfo = ({props, showTourInfo, closeTourInfo}) => {
  const [ pax, setPax ] = useState(1);
  const {cartItems, addToCart, removeFromCart} = useContext(TourContext);
  const {id, tourName, img, description, duration, languages, meetingPoint, price} = props.data;

  const addTourToCart = () => {
    addToCart(id);
    closeTourInfo();
  }

  if (!showTourInfo) {return null}
  return (
    <div className='tourInfo'>
      <div className='detail'>
        <h1>{tourName}</h1>
        <p>{description}</p>
        <p>{meetingPoint}</p>
      </div>
      <div className='countHandler'>
        <p>Number of People: </p>
        <div><button onClick={()=>setPax(pax-1)}> - </button> {pax} <button onClick={()=>setPax(pax+1)}> + </button></div>
        
      </div>
      <div className='dateHandler'>
        <label>Date: </label>
      </div>
      <div className='bttns'>
        <button onClick={closeTourInfo}>Close</button>
        <button onClick={addTourToCart}>Add To Cart</button>
      </div>
    </div>
  )
}
