import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingBagIcon } from '@phosphor-icons/react'
import '../styles/navbar.css'
import { CartContext } from '../context/cart-context'

export const Navbar = () => {

  const { showCartSummary, setShowCartSummary } = useContext(CartContext);
  const [ buttonAvtive, setButtonActive ] = useState(false);
  
  const handleShowCartSummary = () => {
    if(buttonAvtive === false) {
      setButtonActive(true);
      setShowCartSummary(!showCartSummary);
    } else {
      setButtonActive(false);
    }
  };

  return (
    <div className='navbar'>
      <div className='links'>
        <Link to='/'> About </Link>
        <Link to='/tours'> Tours </Link>
        <Link to='/contact'> Contact </Link>
        <button className='cartSummaryBttn' onClick={handleShowCartSummary}><ShoppingBagIcon size={28} /></button>
      </div>
    </div>
  )
}
