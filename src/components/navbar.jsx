import React from 'react'
import { Link } from 'react-router-dom'
import { ShoppingBagIcon } from '@phosphor-icons/react'
import '../styles/navbar.css'

export const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='links'>
        <Link to='/'> About </Link>
        <Link to='/tours'> Tours </Link>
        <Link to='/contact'> Contact </Link>
        <Link to='/cart'><ShoppingBagIcon size={28} /></Link>
      </div>
    </div>
  )
}
