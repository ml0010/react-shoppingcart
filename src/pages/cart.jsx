import React, { useState } from 'react'
import { TOURS } from '../tours'
import { TourContext } from '../context/tour-context'

export const Cart = () => {

  const { cartItem } = useState(TourContext);
  return (
    <div className='cart'>
      <h1>Cart page</h1>
    </div>
  )
}
