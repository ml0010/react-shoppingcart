import React from 'react'
import '../styles/contact.css'

import MainPhoto from '../assets/2.jpg'

export const Contact = () => {
  return (
    <div className='contact'>
      <div className='pageMain' style={{ backgroundImage: `url(${MainPhoto})` }}>
        <div>
          <h1 className='pageTitle'>CONTACT PAGE</h1>
          <p className='pageDescription'>contact description</p>
        </div>
      </div>
      <h1>Contact page contents</h1>
    </div>
  )
}
