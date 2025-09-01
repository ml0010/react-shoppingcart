import { useContext, useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import '../styles/booking-search.css';
import { MagnifyingGlassIcon } from '@phosphor-icons/react';
import { BookingContext } from '../contexts/booking-context';

export const BookingSearch = () => {

    const [ bookingReference, setBookingReference ] = useState("");

    const { searchFailed, setSearchFailed, navigate} = useContext(BookingContext);

    const location = useLocation();

    useEffect(()=>{
        if (location.state === null) {
            setSearchFailed(false);
        }
    },[]);

    const handleOnSubmit = async (e) => {
        e.preventDefault();
        navigate('/confirmation', {state: {reference: bookingReference}});
    }
   
    return (
        <div className='bookingSearch'>
            <div>
                <div className='searchHandler'>
                    <div className='searchTitle'>
                        <MagnifyingGlassIcon size={35} weight='bold' />
                        <h1>SEARCH RESERVATION</h1>
                    </div>                    
                    <form onSubmit={handleOnSubmit}>
                        <input className='bookingReferenceInput' type='text' name='reference' placeholder='Your Booking Reference' value={bookingReference} onChange={(e)=>setBookingReference(e.target.value)} required></input>
                        <button className='button' type='submit'>FIND</button>
                    </form>
                </div>
                <div className='searchInfo'>
                    {searchFailed && <p className='errorMsg'>BOOKING REFERENCE IS NOT CORRECT</p>}
                    <p>Please find the booking reference at our booking confirmation email.</p>
                    <p>If you cannot locate the reference please <Link to='/contact'>contact us</Link>.</p>
                </div>
            </div>
        </div>
    )
}
export default BookingSearch;