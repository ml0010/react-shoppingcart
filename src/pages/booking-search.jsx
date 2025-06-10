import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import '../styles/booking-search.css';
import { MagnifyingGlassIcon } from '@phosphor-icons/react';
import { BookingContext } from '../context/booking-context';

export const BookingSearch = () => {

    const [ bookingReference, setBookingReference ] = useState("");

    const { searchFailed } = useContext(BookingContext);

    const navigate = useNavigate();

    const handleOnSubmit = async (e) => {
        console.log(searchFailed);
        e.preventDefault();
        navigate('/confirmation', {state: {reference: bookingReference}});
    }
    
    return (
        <div className='bookingSearch'>
            <div>
                <div className='searchHandler'>
                    <h1><MagnifyingGlassIcon size={40} />SEARCH RESERVATION</h1>
                    <form onSubmit={handleOnSubmit}>
                        <input className='bookingReferenceInput' type='text' name='reference' placeholder='Your Booking Reference' value={bookingReference} onChange={(e)=>setBookingReference(e.target.value)} required></input>
                        <button className='findBttn' type='submit'>FIND</button>
                    </form>
                </div>
                <div className='searchInfo'>
                    {searchFailed? <p className='errorMsg'>YOUR BOOKING REFERENCE IS NOT CORRECT</p> : <></>}
                    <p>Please find the booking reference at our booking confirmation email.</p>
                    <p>If you cannot locate the reference please <Link to='contact'>contact us</Link>.</p>
                </div>
            </div>
       </div>
    )
}
