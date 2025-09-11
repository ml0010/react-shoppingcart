import { useContext, useEffect, useState } from 'react'
import '../styles/booking.css';
import { Link, useLocation } from 'react-router-dom';
import { CaretDownIcon, CaretRightIcon, SignInIcon } from '@phosphor-icons/react';
import { Faq } from '../components/faq/faq';
import { AuthenticationContext } from '../contexts/authentication-context';
import LoginForm from '../components/login/login-form';
import { BookingContext } from '../contexts/booking-context';
import Payment from '../components/payment/payment';
import { PaymentContext } from '../contexts/payment-context';
import { CartContext } from '../contexts/cart-context';
import { MotionRoute } from '../components/motions';
import { GobackButton } from '../components/buttons/goback-button';
import { Checkout } from '../components/cart/checkout';

export const Booking = () => {
    const { getTotalCartAmount, isGuestInfoCompleted, setIsGuestInfoCompleted } = useContext(CartContext);
    const { user, isLoggedIn } = useContext(AuthenticationContext);
    const { name, setName, email, setEmail, phone, setPhone, comment, setComment } = useContext(BookingContext);
    const { setAmount, setReference } = useContext(PaymentContext);
    
    const [ isLoginOpen, setIsLoginOpen ] = useState(false);

    const location = useLocation();

    useEffect(() => {
        setIsGuestInfoCompleted(false);
    }, []);

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
                <div className='section'>
                    <div className='info'>
                        {!isGuestInfoCompleted ? 
                            <>
                                <h3>Main Guest's Information</h3>
                                {!isLoggedIn &&
                                    <div className='booking-login'>
                                        <h4 onClick={()=>setIsLoginOpen(!isLoginOpen)}>
                                            {isLoginOpen? <CaretDownIcon size={13} weight='fill' /> : <CaretRightIcon size={13} weight='fill' />}
                                            Do you have an account?
                                        </h4>
                                        <div className='login-wrapper'>
                                            {isLoginOpen? 
                                                <LoginForm /> : 
                                                <div className='buttons'>
                                                    <button className='button highlight' onClick={()=>setIsLoginOpen(!isLoginOpen)}>LOGIN<SignInIcon size={15} /></button>
                                                    <Link className='button' to={'/join'}>CREATE ACCOUNT</Link>
                                                </div>
                                            }
                                        </div>
                                        <h4>Alternatively, enter your information below</h4>
                                    </div>
                                }
                                <form className='guest-form' id='guestInfo' onSubmit={handleGuestInfo}>
                                    <label>Name </label>
                                    <input 
                                        className='input' 
                                        type='text' 
                                        name='name' 
                                        placeholder='Main Guest' 
                                        value={name} 
                                        onChange={(e)=>setName(e.target.value)} 
                                        required
                                    />
                                    <label>Email </label>
                                    <input 
                                        className='input' 
                                        type='email' 
                                        name='email' 
                                        placeholder='Contact Email Address' 
                                        value={email} 
                                        onChange={(e)=>setEmail(e.target.value)} 
                                        required 
                                    />
                                    <label>Mobile Number </label>
                                    <input 
                                        className='input' 
                                        type='text' 
                                        name='phone' 
                                        placeholder='Contact Number' 
                                        value={phone} 
                                        onChange={(e)=>setPhone(e.target.value)} 
                                        required 
                                    />
                                    <label>Comments </label>
                                    <textarea 
                                        className='input comment' 
                                        name='comment' 
                                        placeholder='Comments... ex. dietary requirements' 
                                        value={comment} 
                                        onChange={(e)=>setComment(e.target.value)}
                                    />
                                </form>
                            </> : 
                            <div className='payment-wrapper'>
                                <Payment />
                            </div>
                        }
                    </div>
                    <div className='summary-display'>
                        <Checkout path={location.pathname}/>
                    </div>
                </div>
                <Faq />
            </div>
        </MotionRoute>
    )
}
export default Booking;

/*
    <div className='payment-button-wrapper'>
        {(name && email && phone) && 
            <button className='button' form='guestInfo' type='submit'>NEXT - PAYMENT<CardholderIcon size={18} /></button>
        }
    </div>
 */