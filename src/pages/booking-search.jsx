import { useContext, useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import '../styles/booking-search.css';
import { MagnifyingGlassIcon, SirenIcon } from '@phosphor-icons/react';
import { BookingContext } from '../contexts/booking-context';
import { LoadingIcon } from '../components/buttons/loading-icon';
import { PopupContext } from '../contexts/popup-context';

export const BookingSearch = () => {
    const { searchFailed, setSearchFailed, navigate, checkBookingReference } = useContext(BookingContext);
    const { showPopupMessage } = useContext(PopupContext);

    const [ bookingReference, setBookingReference ] = useState("");
    const [ isSubmit, setIsSubmit ] = useState(false);

    const location = useLocation();

    /*
    useEffect(()=>{
        if (location.state === null) {
            setSearchFailed(false);
        }
    },[]);
    */

    const handleOnSubmit = async (e) => {
        e.preventDefault();
        setIsSubmit(true);
        const searchResult = await checkBookingReference(bookingReference);
        if(searchResult) {
            navigate('/confirmation', {state: {reference: bookingReference}});
        } else {
            //setSearchFailed(true);
            showPopupMessage('Incorrect booking reference', 'nagative');

        }
        setIsSubmit(false);
    }
   
    return (
        <div className='booking-search'>
            <div>
                <div className='search-handler'>
                    <h2 className='search-title'>YOUR RESERVATION</h2>
                    <form className='form' onSubmit={handleOnSubmit}>
                        <input 
                            className='input' 
                            type='text' 
                            name='reference' 
                            placeholder='Booking Reference' 
                            value={bookingReference} 
                            onChange={(e)=>setBookingReference(e.target.value)} 
                            required
                        ></input>
                        <button className='button highlight' type='submit'>SEARCH<MagnifyingGlassIcon size={15} /></button>
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