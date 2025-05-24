import React, { useEffect, useState } from 'react'
import { CartSummary } from '../pages/cart-summary'
import { Link } from 'react-router-dom'
import { ArrowCircleUpIcon, ShoppingBagIcon } from '@phosphor-icons/react'
import '../styles/navbar.css'

export const Navbar = () => {

  const [ showScrollBttn, setShowScrollBttn ] = useState(false);
  const [ showCartSummary, setShowCartSummary ] = useState(false);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth'});
  };

  useEffect(() => {
    const handleScrollBttnVisibility = () => {
      window.pageYOffset > 300 ? setShowScrollBttn(true) : setShowScrollBttn(false);
    };

    window.addEventListener('scroll', handleScrollBttnVisibility);

    return () => {
     window.addEventListener('scroll', handleScrollBttnVisibility);
    };
  });

  return (
    <div className='navbar'>
      <div className='links'>
        <Link to='/'> About </Link>
        <Link to='/tours'> Tours </Link>
        <Link to='/contact'> Contact </Link>
        <button className='cartSummaryBttn' onClick={()=> setShowCartSummary(!showCartSummary)}><ShoppingBagIcon size={28} /></button>
      </div>
      {showScrollBttn && (
        <div className='scrollToTop'>
          <button className='scrollBttn' onClick={handleScrollToTop}><ArrowCircleUpIcon size={50} /></button>
        </div>
      )}
      {showCartSummary && (
        <CartSummary closeCartSummary={()=>setShowCartSummary(false)} />
      )}
    </div>
  )
}
