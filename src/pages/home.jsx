import React from 'react'
import MainPhoto from '../assets/4.jpg'
import '../styles/home.css'

export const Home = () => {
  return (
    <div className='home'>
        <div className='pageMain' style={{ backgroundImage: `url(${MainPhoto})` }}>
          <div>
            <h1 className='pageTitle'>HOME PAGE</h1>
            <p className='pageDescription'>home description</p>
          </div>
        </div>
        <div>HOME PAGE CONTENTS</div>
    </div>
  )
}
