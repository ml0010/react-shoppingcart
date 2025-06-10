import React, { useContext, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import '../styles/booking-confirmation.css'
import { BookingContext } from '../context/booking-context';

export const BookingConfirmation = () => {
    
    const [ bookingDataReady, setBookingDataReady ] = useState(false);
    const [ bookingData, setBookingData] = useState(null);
    

    const { setSearchFailed } = useContext(BookingContext);

    const navigate = useNavigate();
    const location = useLocation();
    const bookingReference = location.state.reference;

    const getBookingInfo = async () => {
        console.log("Getting booking information.")
        try {
            const response = await fetch(`http://localhost:4000/confirmation/${bookingReference}`, {mode:'cors'});
            const data = await response.json();
            if(data === null) { 
                console.log("Booking reference not found");
                setSearchFailed(true);
                navigate('/mybooking');
            } else {
                console.log(data);
                setSearchFailed(false);
                setBookingData(data);
                setBookingDataReady(true);
            }
        }
        catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        if(!bookingDataReady) {
            getBookingInfo();
        }
    });

    return (
        <div className='confirmation'>
            <h1>BOOKING CONFIRMATION</h1>
            <h2 id='reference'>Booking Reference: {bookingReference}</h2>
            {bookingDataReady ?
            <div className='bookingInfo'>
                <div className='category name'>
                    <h3 className='categoryTitle'>Name</h3>
                    <p>{bookingData.name}</p>
                </div>
                <hr className='separator' />
                <div className='category email'>
                    <h3 className='categoryTitle'>Email</h3>
                    <p>{bookingData.email}</p>
                </div>
                <hr className='separator' />
                <div className='category number'>
                    <h3 className='categoryTitle'>Contact Number</h3>
                    <p>{bookingData.phone}</p>
                </div>
                <hr className='separator' />
                <div className='category tours'>
                    <h3 className='categoryTitle'>Your Tours</h3>
                    <div>
                    {bookingData.tours.map((tour, index) => {
                        return (<span key={index} className='tourDetail'>
                            <p><b>{tour.tourName}</b></p>
                            <p>Pax: {tour.pax}</p>
                            <p>Date: {tour.date}</p>
                            <br />
                        </span>);
                    })}
                    </div>
                </div>
                <hr className='separator' />
                <div className='category comment'>
                    <h3 className='categoryTitle'>Comment</h3>
                    <p>{bookingData.comment}</p>
                </div>
            </div>
            : <></>}
        </div>
    )
}
