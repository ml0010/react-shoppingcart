import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowCircleUpIcon, ShoppingBagIcon } from '@phosphor-icons/react'
import '../styles/navbar.css'

export const Navbar = () => {

  const [ showBttn, setShowBttn ] = useState(false);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth'});
  };

  useEffect(() => {
    const handleScrollBttnVisibility = () => {
      window.pageYOffset > 300 ? setShowBttn(true) : setShowBttn(false);
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
        <Link to='/cart'><ShoppingBagIcon size={28} /></Link>
      </div>
      {showBttn && (
        <div className='scrollToTop'>
          <button className='scrollBttn' onClick={handleScrollToTop}><ArrowCircleUpIcon size={50} /></button>
        </div>
      )}
    </div>
  )
}
