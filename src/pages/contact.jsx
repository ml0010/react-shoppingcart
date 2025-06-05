import React, { useState } from 'react'
import '../styles/contact.css'
import MainPhoto from '../assets/tree.jpg'
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
        let result = await fetch('http://localhost:4000/contact', {
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
                    <h1 className='pageTitle'>GET IN TOUCH WITH US</h1>
                    <p className='pageDescription'>We would love to hear from you</p>
                </div>
            </div>
            <div className='title'>
                <h1>CONTACT US</h1>
            </div>
                <div className='pageContent'>
                <p>If you have any enquiries do not hesitate to contact us.</p>
                <div className='pageDevider'>

                    <div className='pageLeft'>
                        <div className='contactMethods'>
                            <span className='icons'>
                                <MapPinLineIcon size={40} />
                            </span>
                            <span className='contacts'>
                                <h3>Location</h3>
                                <p>Palma de Mallorca, Illes Balears</p>
                            </span>
                            
                            <span className='icons'>
                                <WhatsappLogoIcon size={40} />
                            </span>
                            <span className='contacts'>
                                <h3>Whattsapp</h3>
                                <p>+(34) 666-000-000</p>
                            </span>
                            <span className='icons'>
                                <EnvelopeSimpleIcon size={40} />
                            </span>
                            <span className='contacts'>
                                <h3>Email</h3>
                                <p>contact@exploremallorca.com</p>
                            </span>
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
                <p>Our office agents operate from Monday to Friday between 9am and 6pm.</p>
                <p>If you contact after our operation days/hours we will get back to you the next working day.</p>
            </div>
        </div>
    )
}
