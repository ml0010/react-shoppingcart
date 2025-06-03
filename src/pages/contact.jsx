import React, { useState } from 'react'
import '../styles/contact.css'
import MainPhoto from '../assets/orange.jpg'
import { EnvelopeSimpleIcon, MapPinLineIcon, WhatsappLogoIcon } from '@phosphor-icons/react'

export const Contact = () => {
   const [name, setName] = useState("");
   const [email, setEmail] = useState("");
   const [phone, setPhone] = useState("");
   const [comment, setComment] = useState("");

   const resetState = () => {
      setName("");
      setEmail("");
      setPhone("");
      setComment("");
   };

   const handleOnSubmit = async (e) => {
      e.preventDefault();
      let result = await fetch('http://localhost:4000/', {
         method: "post",
         body: JSON.stringify({ name, email, phone, comment }),
         headers: {
            'Content-Type': 'application/json'
         }
      })
      result = await result.json();
      localStorage.setItem("contact", JSON.stringify(result));

      console.log("CONTACT FORM SUBMIT");
      console.log(result);
      resetState();
   }    

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
               <form onSubmit={handleOnSubmit}>
               <input className='nameInput' type='text' name='name' placeholder='Your Name' value={name} onChange={(e)=>setName(e.target.value)}></input>
               <input className='emailInput' type='email' name='email' placeholder='Your Email' value={email} onChange={(e)=>setEmail(e.target.value)}></input>
               <input className='phoneInput' type='text' name='phone' placeholder='Your Contact Number' value={phone} onChange={(e)=>setPhone(e.target.value)}></input>
               <textarea className='commentInput' name='comment' placeholder='Your Message' value={comment} onChange={(e)=>setComment(e.target.value)}></textarea>
               <button className='sendMsgBttn' type='submit'>SEND MESSAGE</button>
               </form>
            </div>
         </div>
      </div>
   </div>
  )
}
