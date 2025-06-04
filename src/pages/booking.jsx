import React, { useContext, useState } from 'react'
import '../styles/booking.css';
import { TOURS } from '../tourlist';
import { TourContext } from '../context/tour-context';
import { CartItem } from './cart-item';

export const Booking = () => {


    const { cartItems, deleteFromCart } = useContext(TourContext);

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
    const handleOnSubmit = () => {};

    return (
        <div className='booking'>
            <div className='tourSummary'>
                <h3>Tour Summary</h3>
                {TOURS.map((tour) => {
                    if (cartItems[tour.id]["pax"] > 0) {
                        return (
                        <div className='tours'>
                            <p>{tour.tourName} x {cartItems[tour.id]["pax"]}</p>
                            <p>Date: {cartItems[tour.id]["date"]}</p>
                        </div>
                        );
                    } else { return null; }
                })}
            </div>
            <div className='info'>
                <h3>Booking Information</h3>
                <form onSubmit={handleOnSubmit} className='infoInput'>
                    <input className='nameInput' type='text' name='name' placeholder='Your Name' value={name} onChange={(e)=>setName(e.target.value)}></input>
                    <input className='emailInput' type='email' name='email' placeholder='Your Email' value={email} onChange={(e)=>setEmail(e.target.value)}></input>
                    <input className='phoneInput' type='text' name='phone' placeholder='Your Contact Number' value={phone} onChange={(e)=>setPhone(e.target.value)}></input>
                    <textarea className='commentInput' name='comment' placeholder='Your Message' value={comment} onChange={(e)=>setComment(e.target.value)}></textarea>
                    <button className='bookBttn' type='submit'>SUBMIT BOOKING</button>
                </form>
            </div>
        </div>
    )
}
