import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingBagIcon } from '@phosphor-icons/react'
import '../styles/navbar.css'
import { CartContext } from '../context/cart-context'

export const Navbar = () => {

  const { showCartSummary, setShowCartSummary, isButtonActive, setIsButtonActive } = useContext(CartContext);

  const handleShowCartSummary = () => {
    if(isButtonActive === false) {
      setIsButtonActive(true);
      setShowCartSummary(!showCartSummary);
    } else {
      setIsButtonActive(false);
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
