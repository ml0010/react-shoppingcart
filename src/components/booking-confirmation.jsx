import React, { useContext, useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import '../styles/booking-confirmation.css'
import { BookingContext } from '../context/booking-context';

export const BookingConfirmation = () => {
    
    const [ bookingDataReady, setBookingDataReady ] = useState(false);
    const [ bookingData, setBookingData] = useState(null);
    const [ phone, setPhone ] = useState(null);
    const [ comment, setComment ] = useState(null);
    const [ isEditPhoneDisabled, setIsEditPhoneDisabled ] = useState(true);
    const [ isEditCommentDisabled, setIsEditCommentDisabled] = useState(true);
    
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
                setSearchFailed(false);
                setBookingData(data);
                setPhone(data.phone);
                setComment(data.comment);
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

    const deleteBooking = async () => {
        console.log("Delete booking record.")
        try {
            const response = await fetch(`http://localhost:4000/confirmation/${bookingReference}/delete`, {mode:'cors'});
            console.log(response);
            setSearchFailed(false);
            navigate('/mybooking');
        }
        catch (err) {
            console.log(err);
        }
    }
/*
    const updateBooking = async () => {
        console.log("Update booking record.")
        try {
            const response = await fetch(`http://localhost:4000/confirmation/${bookingReference}/edit`, {mode:'cors'});
            window.location.reload();
        }
        catch (err) {
            console.log(err);
        }
    }
*/

    const updatePhone = async () => {
        console.log("Phone number update.")
        try {
            const response = await fetch(`http://localhost:4000/confirmation/${bookingReference}/editphone/${phone}`, {mode:'cors'});
            console.log(response);
        }
        catch (err) {
            console.log(err);
        }
    }

    const handleEditPhone = () => {
        if(!isEditPhoneDisabled) {
            updatePhone();
        }
        setIsEditPhoneDisabled(!isEditPhoneDisabled);
        return null;
    };

    const updateComment = async () => {
        console.log("Comment update.")
        try {
            const response = await fetch(`http://localhost:4000/confirmation/${bookingReference}/editcomment/${comment}`, {mode:'cors'});
            console.log(response);
        }
        catch (err) {
            console.log(err);
        }
    }

    const handleEditComment = () => {
        if(!isEditCommentDisabled) {
            updateComment();
        }
        setIsEditCommentDisabled(!isEditCommentDisabled);
        return null;
    };


    return (
        <div className='confirmation'>
            <h1>BOOKING CONFIRMATION</h1>
            <h2 id='reference'>Booking Reference: {bookingReference}</h2>
            {bookingDataReady ?
            <div className='bookingInfo'>
                <div className='category'>
                    <h3 className='categoryTitle'>Name</h3>
                    <p>{bookingData.name}</p>
                </div>
                <hr className='separator' />
                <div className='category'>
                    <h3 className='categoryTitle'>Email</h3>
                    <p>{bookingData.email}</p>
                </div>
                <hr className='separator' />
                <div className='category'>
                    <h3 className='categoryTitle'>Contact Number</h3>
                    <span>
                        <input className={`phone ${isEditPhoneDisabled? 'inactive' : 'active'}`} value={phone} disabled={isEditPhoneDisabled} onChange={(e)=>setPhone(e.target.value)}></input><button onClick={handleEditPhone}>{isEditPhoneDisabled? 'EDIT' : 'SAVE'}</button>
                    </span>
                </div>
                <hr className='separator' />
                <div className='category'>
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
                    <span>
                        <textarea className={`comment ${isEditCommentDisabled? 'inactive' : 'active'}`} value={comment} disabled={isEditCommentDisabled} onChange={(e)=>setComment(e.target.value)}></textarea><button onClick={handleEditComment}>{isEditCommentDisabled? 'EDIT' : 'SAVE'}</button>
                    </span>
                </div>
            </div>
            : <></>}

            <div className='bttns'>
                <button className='cancelBttn' onClick={deleteBooking}>CANCEL BOOKING</button>
                <button className='homeBttn'><Link to='/home'>BACK TO HOME</Link></button>
            </div>
        </div>
    )
}
