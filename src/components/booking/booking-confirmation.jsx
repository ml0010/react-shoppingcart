import './booking-confirmation.css'
import { useContext, useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import { BookingContext } from '../../contexts/booking-context';
import { Faq } from '../faq/faq';
import { GobackButton } from '../buttons/goback-button';
import { XIcon } from '@phosphor-icons/react';
import { LoadingIcon } from '../buttons/loading-icon';
import { PopupContext } from '../../contexts/popup-context';

export const BookingConfirmation = () => {
        
    const [ isLoading, setIsLoading ] = useState(true);
    const [ bookingDataReady, setBookingDataReady ] = useState(false);
    const [ bookingData, setBookingData] = useState(null);
    const [ newPhone, setNewPhone ] = useState(null);
    const [ newComment, setNewComment ] = useState(null);
    const [ isEditPhone, setIsEditPhone ] = useState(false);
    const [ isEditComment, setIsEditComment] = useState(false);

    const { navigate, getBookingDetail, deleteBooking, updatePhone, updateComment } = useContext(BookingContext);
    const { showPopupMessage } = useContext(PopupContext);

    const location = useLocation();
    const bookingReference = location.state.reference;
    const prevPath = location.state.path;

    const getBookingInfo = async() => {
        const data = await getBookingDetail(bookingReference);
        if(data === null) {
            navigate('/mybooking', {state: {fetch: 'failed'}});
        } else {
            console.log(data);
            setBookingData(data);
            setNewPhone(data.phone);
            setNewComment(data.comment);
            setBookingDataReady(true);
        }
    };

    useEffect(() => {
        if(!bookingDataReady) {
            getBookingInfo();
        }
    }, [bookingDataReady]);

    const delay = async (ms) => {
        return new Promise((resolve) => 
            setTimeout(resolve, ms));
    };

    const handleDeleteBooking = async () => {
        if(window.confirm(`Your booking will be permenantly cancelled.\nPlease confirm you are happy to go ahead.`)) {
            setIsLoading(true);
            await delay(600);
            await deleteBooking(bookingReference);
        }
    };

    const handleEditPhone = () => {
        if(isEditPhone && bookingData.phone !== newPhone) {
            console.log("updating the phone number");
            updatePhone(bookingReference, newPhone);
            showPopupMessage('Edited - Contact Number', 'positive');
            setIsLoading(true);
            setBookingDataReady(false);
        }
        setIsEditPhone(!isEditPhone);

    };

    const handleEditComment = () => {
        if(isEditComment && bookingData.comment !== newComment) {
            showPopupMessage('Edited - Comment', 'positive');
            updateComment(bookingReference, newComment);
            setIsLoading(true);
            setBookingDataReady(false);

        }
        setIsEditComment(!isEditComment);
    };

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 600);
    }, [isLoading]);

    const phoneRef = useRef();

    useEffect(() => {
        let handler = (e)=>{
            if(phoneRef.current && !phoneRef.current.contains(e.target)){
                console.log(isEditPhone);
                if(bookingData.phone !== newPhone) {
                    setIsEditPhone(false);
                    setNewPhone(bookingData.phone);
                    return;
                } else {
                    handleEditPhone();
                }
            }
        };
        document.addEventListener("mousedown", handler);
        return() =>{
            document.removeEventListener("mousedown", handler);
        }
    }, [phoneRef]);

    return (
        <div className='confirmation'>
            {prevPath === '/mypage' && <GobackButton />}
            <h1>BOOKING CONFIRMATION</h1>
            <h2 id='reference'>Booking Reference: {bookingReference}</h2>
            {bookingDataReady ?
            <div className='booking-info-wrapper'>
                {isLoading && <LoadingIcon />}
                <div className='booking-info'>
                    <div className='category'>
                        <h3 className='category-name'>Name</h3>
                        <p className='category-content'>{bookingData.name}</p>
                    </div>
                    <hr className='separator' />
                    <div className='category'>
                        <h3 className='category-name'>Email</h3>
                        <p className='category-content'>{bookingData.email}</p>
                    </div>
                    <hr className='separator' />
                    <div className='category phone' ref={phoneRef}>
                        <span className='category-title-wrapper'>
                            <h3 className='category-name'>Contact Number</h3>
                            <button className='edit-button' onClick={handleEditPhone}>{!isEditPhone? 'EDIT' : 'SAVE'}</button>
                            {isEditPhone ? 'true' : 'false'}
                        </span>
                        <span className='edit category-content'>
                            <input className={`phone ${!isEditPhone? 'inactive' : 'active'}`} 
                                    value={newPhone} 
                                    disabled={!isEditPhone} 
                                    onChange={(e)=>setNewPhone(e.target.value)}
                            />
                        </span>
                    </div>
                    <hr className='separator' />
                    <div className='category'>
                        <h3 className='category-name'>Your Tours</h3>
                        <div className='category-content'>
                        {bookingData.tours.map((tour, index) => {
                            return (
                                <span key={index} className='tour-detail'>
                                    <p><b>{tour.tourName}</b></p>
                                    <p>Pax: {tour.pax}</p>
                                    <p>Date: {tour.date}</p>
                                    <hr className='separator' />
                                </span>
                            );
                        })}
                        <span className='payment'>
                            <p className='payment-amount'>Payment: {bookingData.payment} €</p>
                            <p className='payment-id'>({bookingData.payment_id})</p>
                        </span>
                        </div>
                    </div>
                    <hr className='separator' />
                    <div className='category comment'>
                        <span className='category-title-wrapper'>
                            <h3 className='category-name'>Comment</h3>
                            <button className='edit-button' onClick={handleEditComment}>{!isEditComment? 'EDIT' : 'SAVE'}</button>
                        </span>
                        <span className='edit category-content'>
                            <textarea className={`comment ${!isEditComment? 'inactive' : 'active'}`} 
                                        value={newComment} 
                                        disabled={!isEditComment} 
                                        onChange={(e)=>setNewComment(e.target.value)}
                            />
                        </span>
                    </div>
                </div>
            </div>
            : <></>}

            <div className='buttons'>
                <button className='button' onClick={handleDeleteBooking}>CANCEL BOOKING <XIcon size={15}/></button>
                <Link className='button' to='/home'>BACK TO HOME</Link>
            </div>
            <Faq></Faq>
        </div>
    )
}
export default BookingConfirmation;