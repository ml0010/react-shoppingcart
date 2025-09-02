import { useContext, useEffect, useState } from 'react'
import '../styles/booking.css';
import { TOURS } from '../tourlist';
import { Link, Navigate } from 'react-router-dom';
import { CardholderIcon, CaretDownIcon, CaretRightIcon } from '@phosphor-icons/react';
import { Faq } from '../components/faq/faq';
import { AuthenticationContext } from '../contexts/authentication-context';
import LoginForm from '../components/login/login-form';
import { BookingContext } from '../contexts/booking-context';
import Payment from '../components/payment/payment';
import { PaymentContext } from '../contexts/payment-context';
import { CartContext } from '../contexts/cart-context';
import { MotionRoute } from '../components/motions';
import { GobackButton } from '../components/buttons/goback-button';

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
        setIsGuestInfoCompleted(!isGuestInfoCompleted);
    };

    return (
        <MotionRoute>
            <div className='booking'>
                <GobackButton />
                <div className='booking-info'>
                    <div className='tour-summary'>
                        <Link className='edit-basket-button' to='/cart'>EDIT BASKET</Link>
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
                                <h4 onClick={()=>setIsLoginOpen(!isLoginOpen)}>
                                    {isLoginOpen? 
                                        <CaretDownIcon size={15} weight='fill' /> : 
                                        <CaretRightIcon size={15} weight='fill' />
                                    }
                                    Do you have an account?
                                </h4>
                                {isLoginOpen? 
                                    <LoginForm /> : 
                                    <button className='button' onClick={()=>setIsLoginOpen(!isLoginOpen)}>LOGIN</button>
                                }
                                <h4>Alternatively, enter your information below</h4>
                            </div> 
                            : <></>}
                            <form className='form' id='guestInfo' onSubmit={handleGuestInfo}>
                                <label>Name </label><input className='nameInput' type='text' name='name' placeholder='Main Guest' value={name} onChange={(e)=>setName(e.target.value)} required></input>
                                <label>Email </label><input className='emailInput' type='email' name='email' placeholder='Contact Email Address' value={email} onChange={(e)=>setEmail(e.target.value)} required></input>
                                <label>Mobile Number </label><input className='phoneInput' type='text' name='phone' placeholder='Contact Number' value={phone} onChange={(e)=>setPhone(e.target.value)} required></input>
                                <label>Comments </label><textarea className='commentInput' name='comment' placeholder='Comments... ex. dietary requirements' value={comment} onChange={(e)=>setComment(e.target.value)}></textarea>
                            </form>
                            <div className='payment-button-wrapper'>
                                {(name && email && phone) && 
                                    <button className='button' form='guestInfo' type='submit'>NEXT - PAYMENT<CardholderIcon size={18} /></button>
                                }
                            </div>
                        </> : 
                        <div className='payment-wrapper'>
                            <Payment />
                            <div className='back-button'>
                                <button className='button' onClick={handleGuestInfo}>BACK TO GUEST INFO</button>
                            </div>
                        </div>
                        }
                    </div>
                </div>
                <Faq />
            </div>
        </MotionRoute>
    )
}
export default Booking;