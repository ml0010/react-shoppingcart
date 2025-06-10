import React from 'react'
import { useLocation } from 'react-router-dom';

export const BookingConfirmation = () => {

    const location = useLocation();

    return (
        <div className='confirmation'>
            <h1>booking-confirmation</h1>
            <p>{location.state.reference}</p>
        </div>
    )
}
