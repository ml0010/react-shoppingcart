import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingBagIcon } from '@phosphor-icons/react'
import '../styles/navbar.css'
import { CartContext } from '../context/cart-context'

export const Navbar = () => {

  const { showCartSummary, setShowCartSummary, isButtonActive, setIsButtonActive } = useContext(CartContext);

  const handleShowCartSummary = () => {
    if(isButtonActive === true && showCartSummary === false) {
      setIsButtonActive(false);
      setShowCartSummary(true);
    } else {
      setIsButtonActive(true);
    }
    console.log("button clicked :" + isButtonActive);
    console.log("cart show :" + showCartSummary);
  };

  const handleScreenToTop = () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className='navbar'>
      <div className='navbarWrapper'></div>
        <div className='links'>
          <Link to='/home' onClick={handleScreenToTop}> ABOUT </Link>
          <Link to='/tours' onClick={handleScreenToTop}> OUR TOURS </Link>
          <Link to='/contact' onClick={handleScreenToTop}> CONTACT US </Link>
          <button className='cartSummaryBttn' disabled={!isButtonActive} onClick={handleShowCartSummary}><ShoppingBagIcon size={28} /></button>
        </div>
    </div>
  )
}
