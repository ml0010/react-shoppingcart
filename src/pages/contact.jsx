import { useState } from 'react'
import '../styles/contact.css'
import MainPhoto from '../assets/door.png'
import { EnvelopeSimpleIcon, MapPinLineIcon, WhatsappLogoIcon } from '@phosphor-icons/react'
import { SkipPage } from '../components/buttons/skip-page'
import { MotionRoute } from '../components/motions'

export const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [comment, setComment] = useState("");
    const [showSubmitMsg, setShowSubmitMsg ] = useState(false);

    const resetState = () => {
        setName("");
        setEmail("");
        setPhone("");
        setComment("");
        setShowSubmitMsg(true);
    };

    const handleOnSubmit = async (e) => {
        e.preventDefault();
        let result = await fetch('https://react-shoppingcart-q31i.onrender.com/contact', {
            method: "post",
            body: JSON.stringify({ name, email, phone, comment }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        result = await result.json();
        localStorage.setItem("contact", JSON.stringify(result));

        console.log("CONTACT FORM SUBMITTED");
        console.log(result);
        resetState();
    }    

    return (
        <MotionRoute>
            <div className='contact'>
                <div className='pageFront'>
                    <div className='pageBackground' style={{ backgroundImage: `url(${MainPhoto})` }}></div>
                    <div className='pageMain'>
                        <p className='pageTitle'>GET IN TOUCH WITH US</p>
                        <p className='pageDescription'>We would love to hear from you</p>
                    </div>
                    <SkipPage />
                </div>
                <div className='pageContent'>
                    <div className='title'>
                        <h1>CONTACT US</h1>
                    </div>
                    <div className='pageContent'>
                        <p>Our office agents operate from Monday to Friday between 9am and 6pm.</p>
                        <p>If you contact after our operation days/hours we will get back to you the next working day.</p>
                        <div className='pageDevider'>
                            <div className='pageLeft'>
                                <div className='contactMethods'>
                                    <span className='icons'>
                                        <MapPinLineIcon size={40} />
                                    </span>
                                    <span className='contacts'>
                                        <h3>Location</h3>
                                        <a href='https://maps.app.goo.gl/id588dXKnyucx9ai7' target='_blank' rel='noreferrer'>Palma de Mallorca, Illes Balears</a>
                                    </span>
                                    
                                    <span className='icons'>
                                        <WhatsappLogoIcon size={40} />
                                    </span>
                                    <span className='contacts'>
                                        <h3>Whatsapp</h3>
                                        <a href='https://wa.me/0034666000000' target='_blank' rel='noreferrer'>+(34) 666-000-000</a>
                                    </span>
                                    <span className='icons'>
                                        <EnvelopeSimpleIcon size={40} />
                                    </span>
                                    <span className='contacts'>
                                        <h3>Email</h3>
                                        <a href='mailto:contact@exploremallorca.com'>contact@exploremallorca.com</a>
                                    </span>
                                </div>
                            </div>

                            <div className='pageRight'>
                                <div>
                                    <h3>Conctact Form</h3>                        
                                    {showSubmitMsg?
                                        <div className='sent-msg'>
                                            <p>We have successfully received your message.</p>
                                            <p>We will get back to you as soon as possible.</p>
                                        </div>: 
                                        <form className='contact-form' onSubmit={handleOnSubmit}>
                                            <input className='nameInput' type='text' name='name' placeholder='Your Name' value={name} onChange={(e)=>setName(e.target.value)} required></input>
                                            <input className='emailInput' type='email' name='email' placeholder='Your Email' value={email} onChange={(e)=>setEmail(e.target.value)} required></input>
                                            <input className='phoneInput' type='text' name='phone' placeholder='Your Contact Number' value={phone} onChange={(e)=>setPhone(e.target.value)} required></input>
                                            <textarea className='commentInput' name='comment' placeholder='Your Message' value={comment} onChange={(e)=>setComment(e.target.value)} required></textarea>
                                            <button className='button' type='submit'>SEND MESSAGE</button>
                                        </form>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </MotionRoute>
    )
}
export default Contact;