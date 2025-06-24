import React, { useContext, useState } from 'react'
import '../styles/booking.css';
import { TOURS } from '../tourlist';
import { TourContext } from '../context/tour-context';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowCounterClockwiseIcon } from '@phosphor-icons/react';
import { Faq } from '../components/faq';

export const Booking = () => {
    const { cartItems, setCartItems, getCartDefault } = useContext(TourContext);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [comment, setComment] = useState("");

    const resetState = () => {
        setName("");
        setEmail("");
        setPhone("");
        setComment("");
        setCartItems(getCartDefault);
    };

    const getCartList = () => {
        const cartItemList = [];
        TOURS.map((tour) => {
            if (cartItems[tour.id]["pax"] > 0) {
                return cartItemList.push({
                    "tourId": tour.id,
                    "tourName": tour.tourName,
                    "pax": cartItems[tour.id]["pax"],
                    "date": cartItems[tour.id]["date"]
                });
            } else { return null; }
        });
        return cartItemList;
    };
    const generateBookingReference = (digits) => {
        let str = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVXZ';
        let uuid = [];
        for (let i = 0; i < digits; i++) {
            uuid.push(str[Math.floor(Math.random() * str.length)]);
        }
        return uuid.join('');
    }
    const tours = getCartList();
    const reference = generateBookingReference(5);
    const navigate = useNavigate();

    const handleOnSubmit = async (e) => {
        e.preventDefault();
        let result = await fetch('http://localhost:4000/booking', {
            method: "post",
            body: JSON.stringify({ reference, name, email, phone, comment, tours }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        result = await result.json();
        localStorage.setItem("booking", JSON.stringify(result));

        console.log('BOOKING FORM SUBMITTED');
        console.log(result);
        resetState();
        navigate('/confirmation', {state: {reference: reference}});
    }
    
    return (
        <div className='booking'>
            <div className='bookingInfo'>
                <div className='tourSummary'>
                    <Link to='/cart'><ArrowCounterClockwiseIcon size={20} />BACK TO BASKET</Link>
                    <h3>Your Tours</h3>
                    {TOURS.map((tour) => {
                        if (cartItems[tour.id]["pax"] > 0) {
                            return (
                            <div className='tour-in-basket'>
                                <hr className='separator' />
                                <p><b>{tour.tourName}</b> x {cartItems[tour.id]["pax"]}</p>
                                <p>Date: {cartItems[tour.id]["date"]}</p>
                            </div>
                            );
                        } else { return null; }
                    })}
                </div>
                <div className='info'>
                    <h3>Booking Information</h3>
                    <form className='infoInput' id='guestInfo' onSubmit={handleOnSubmit}>
                        <label>Name </label><input className='nameInput' type='text' name='name' placeholder='Main Guest' value={name} onChange={(e)=>setName(e.target.value)} required></input>
                        <label>Email </label><input className='emailInput' type='email' name='email' placeholder='Contact Email Address' value={email} onChange={(e)=>setEmail(e.target.value)} required></input>
                        <label>Mobile Number </label><input className='phoneInput' type='text' name='phone' placeholder='Contact Number' value={phone} onChange={(e)=>setPhone(e.target.value)} required></input>
                        <label>Comments </label><textarea className='commentInput' name='comment' placeholder='If you have any comments...(ex. dietary requirements)' value={comment} onChange={(e)=>setComment(e.target.value)}></textarea>
                    </form>
                    <button className='bookBttn' form='guestInfo' type='submit'>SUBMIT BOOKING</button>
                </div>
            </div>
            <Faq />
        </div>
    )
}


