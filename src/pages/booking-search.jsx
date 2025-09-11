import { useContext, useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import '../styles/booking-search.css';
import { MagnifyingGlassIcon, SirenIcon } from '@phosphor-icons/react';
import { BookingContext } from '../contexts/booking-context';
import { LoadingIcon } from '../components/buttons/loading-icon';

export const BookingSearch = () => {

    const [ bookingReference, setBookingReference ] = useState("");
    const [ isSubmit, setIsSubmit ] = useState(false);

    const { searchFailed, setSearchFailed, navigate} = useContext(BookingContext);

    const location = useLocation();

    useEffect(()=>{
        if (location.state === null) {
            setSearchFailed(false);
        }
    },[]);

    const handleOnSubmit = async (e) => {
        e.preventDefault();
        setIsSubmit(true);
        navigate('/confirmation', {state: {reference: bookingReference}});
        setIsSubmit(false);
    }
   
    return (
        <div className='booking-search'>
            <div>
                <div className='search-handler'>
                    <div className='search-title'>
                        <MagnifyingGlassIcon size={35} weight='bold' />
                        <h2>SEARCH RESERVATION</h2>
                    </div>                    
                    <form className='form' onSubmit={handleOnSubmit}>
                        <input className='input' type='text' name='reference' placeholder='Your Booking Reference' value={bookingReference} onChange={(e)=>setBookingReference(e.target.value)} required></input>
                        <button className='button highlight' type='submit'>FIND</button>
                        {isSubmit && <LoadingIcon />}
                    </form>
                </div>
                <div className='message'>
                    {searchFailed && <p className='errorMsg'><SirenIcon size={15} />BOOKING REFERENCE IS NOT CORRECT</p>}
                    <p>Please find the booking reference at our booking confirmation email.</p>
                    <p>If you cannot locate the reference please <Link to='/contact'>contact us</Link>.</p>
                </div>
            </div>
        </div>
    )
}
export default BookingSearch;