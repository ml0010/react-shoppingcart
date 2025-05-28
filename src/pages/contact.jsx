import React from 'react'
import '../styles/contact.css'

import MainPhoto from '../assets/2.jpg'
import { EnvelopeSimpleIcon, MapPinLineIcon, WhatsappLogoIcon } from '@phosphor-icons/react'

export const Contact = () => {
  return (
    <div className='contact'>
      <div className='pageMain' style={{ backgroundImage: `url(${MainPhoto})` }}>
        <div>
          <h1 className='pageTitle'>CONTACT PAGE</h1>
          <p className='pageDescription'>GET IN TOUCH WITH US</p>
        </div>
      </div>
      <div className='pageContent'>
        <h2>GET IN TOUCH WITH US</h2>
        <p>We operate from 9am to 6pm everyday.</p>
        <p>If tou have any enquiries do not hesitate to contact us!</p>
        <div className='pageDevider'>

          <div className='pageLeft'>
            <div className='contactMethods'>
              <div className='icons'>
                <MapPinLineIcon size={40} />
              </div>
              <div>
                <h3>Location</h3>
                <p>Palma de Mallorca, Illes Balears</p>
              </div>

              <div className='icons'>
                <WhatsappLogoIcon size={40} />
              </div>
              <div>
                <h3>Whattsapp</h3>
                <p>+(34) 666-000-000</p>
              </div>

              <div className='icons'>
                <EnvelopeSimpleIcon size={40} />
              </div>
              <div>
                <h3>Email</h3>
                <p>abc@gmail.com</p>
              </div>
            </div>
          </div>

          <div className='pageRight'>
            <h3>Contact form</h3>
            <form>
              <input className='nameInput' name='name' placeholder='Your Name' type='text'></input>
              <input className='emailInput' name='email' placeholder='Your Email' type='email'></input>
              <input className='phoneInput' name='phone' placeholder='Your Contact Number' type='text'></input>
              <textarea className='commentInput' name='comment' placeholder='Your Message'></textarea>
            </form>
            <button className='sendMsgBttn' type='submit'>SEND MESSAGE</button>
          </div>
        </div>
      </div>
    </div>
  )
}
