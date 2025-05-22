import React from 'react'
import Cuber from '../assets/cuber.jpg'
import '../styles/home.css'

export const Home = () => {
  return (
    <div className='home'>
        <h1>Home page</h1>
        <img src={Cuber} alt='cuber' />
    </div>
  )
}
