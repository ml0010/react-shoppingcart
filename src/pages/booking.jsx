import React, { useContext, useEffect, useState } from 'react'
import '../styles/booking.css';
import { TOURS } from '../tourlist';
import { Link } from 'react-router-dom';
import { ArrowCounterClockwiseIcon, CardholderIcon, CaretDownIcon, CaretRightIcon } from '@phosphor-icons/react';
import { Faq } from '../components/faq';
import { AuthenticationContext } from '../context/authentication-context';
import LoginForm from '../components/login-form';
import { BookingContext } from '../context/booking-context';
import Payment from '../components/payment';
import { PaymentContext } from '../context/payment-context';
import { CartContext } from '../context/cart-context';

export const Booking = () => {
    const { cartItems, getTotalCartAmount } = useContext(CartContext);
    const { user, isLoggedIn } = useContext(AuthenticationContext);
    const { name, setName, email, setEmail, phone, setPhone, comment, setComment } = useContext(BookingContext);
    const { setAmount, setReference } = useContext(PaymentContext);
    
    const [ isLoginOpen, setIsLoginOpen ] = useState(false);
    const [ isGuestInfoCompleted , setIsGuestInfoCompleted ] = useState(false);

    useEffect(() => {
        setName(user.name);
        setEmail(user.email);
        setPhone(user.telephone);
    }, [user]);

    const generateBookingReference = (digits) => {
        let str = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVXZ';
        let uuid = [];
        for (let i = 0; i < digits; i++) {
            uuid.push(str[Math.floor(Math.random() * str.length)]);
        }
        return uuid.join('');
    }

    const reference = generateBookingReference(5);

    const handleGuestInfo = () => {
        setAmount(getTotalCartAmount());
        setReference(reference);
        setIsGuestInfoCompleted(true);
    };

    return (
        <div className='booking'>
            <div className='bookingInfo'>
                <div className='tourSummary'>
                    <Link to='/cart'><ArrowCounterClockwiseIcon size={20} />BACK TO BASKET</Link>
                    <h3>Your Tours</h3>
                    {TOURS.map((tour, index) => {
                        if (cartItems[tour.id]["pax"] > 0) {
                            return (
                            <div className='tour-in-basket' key={index}>
                                <hr className='separator' />
                                <p><b>{tour.tourName}</b> x {cartItems[tour.id]["pax"]}</p>
                                <p>Date: {cartItems[tour.id]["date"]}</p>
                                <p></p>
                            </div>
                            );
                        } else { return null; }
                    })}
                </div>
                <div className='info'>
                    {!isGuestInfoCompleted ? 
                    <>
                        <h3>Main Guest's Information</h3>
                        {!isLoggedIn?
                        <div className='booking-login'>
                            <h4 onClick={()=>setIsLoginOpen(!isLoginOpen)}>{isLoginOpen? <CaretDownIcon size={15} weight='fill' /> : <CaretRightIcon size={15} weight='fill' />}Do you have an account?</h4>
                            {isLoginOpen? <LoginForm /> : <button className='loginBttn' onClick={()=>setIsLoginOpen(!isLoginOpen)}>LOGIN</button>}
                            <h4>Alternatively, enter your information below</h4>
                        </div> 
                        : <></>}
                        <form className='infoInput' id='guestInfo' onSubmit={handleGuestInfo}>
                            <label>Name </label><input className='nameInput' type='text' name='name' placeholder='Main Guest' value={name} onChange={(e)=>setName(e.target.value)} required></input>
                            <label>Email </label><input className='emailInput' type='email' name='email' placeholder='Contact Email Address' value={email} onChange={(e)=>setEmail(e.target.value)} required></input>
                            <label>Mobile Number </label><input className='phoneInput' type='text' name='phone' placeholder='Contact Number' value={phone} onChange={(e)=>setPhone(e.target.value)} required></input>
                            <label>Comments </label><textarea className='commentInput' name='comment' placeholder='If you have any comments...(ex. dietary requirements)' value={comment} onChange={(e)=>setComment(e.target.value)}></textarea>
                        </form>
                        <button className='bookBttn' form='guestInfo' type='submit'>PAYMENT<CardholderIcon size={18} /></button>
                    </> : 
                    <div className='payment-wrapper'>
                        <Payment />
                    </div>
                    }
                </div>
            </div>
            <Faq />
        </div>
    )
}


