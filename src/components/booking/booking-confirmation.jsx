import './booking-confirmation.css'
import { useContext, useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import { BookingContext } from '../../contexts/booking-context';
import { Faq } from '../faq/faq';
import { GobackButton } from '../buttons/goback-button';
import { XIcon } from '@phosphor-icons/react';
import { LoadingIcon } from '../buttons/loading-icon';

export const BookingConfirmation = () => {
        
    const [ isLoading, setIsLoading ] = useState(true);
    const [ bookingDataReady, setBookingDataReady ] = useState(false);
    const [ bookingData, setBookingData] = useState(null);
    const [ newPhone, setNewPhone ] = useState(null);
    const [ newComment, setNewComment ] = useState(null);
    const [ isEditPhoneDisabled, setIsEditPhoneDisabled ] = useState(true);
    const [ isEditCommentDisabled, setIsEditCommentDisabled] = useState(true);

    const { navigate, getBookingDetail, deleteBooking, updatePhone, updateComment } = useContext(BookingContext);
    
    const location = useLocation();
    const bookingReference = location.state.reference;
    const prevPath = location.state.path;

    const getBookingInfo = async() => {
        const data = await getBookingDetail(bookingReference);
        if(data === null) {
            navigate('/mybooking', {state: {fetch: 'failed'}});
        } else {
            //console.log(data);
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
    }, []);

    const handleDeleteBooking = async () => {
        if(window.confirm(`Your booking will be permenantly cancelled.\nPlease confirm you are happy to go ahead.`)) {
            await deleteBooking(bookingReference);
        }
    };

    const handleEditPhone = () => {
        if(!isEditPhoneDisabled) {
            updatePhone(bookingReference, newPhone);
            setIsLoading(true);
        }
        setIsEditPhoneDisabled(!isEditPhoneDisabled);
    };

    const handleEditComment = () => {
        if(!isEditCommentDisabled) {
            updateComment(bookingReference, newComment);
            setIsLoading(true);
        }
        setIsEditCommentDisabled(!isEditCommentDisabled);
    };

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 600);
    }, [isLoading]);

    return (
        <div className='confirmation'>
            {prevPath === '/mypage' && <GobackButton />}
            <h1>BOOKING CONFIRMATION</h1>
            <h2 id='reference'>Booking Reference: {bookingReference}</h2>
            {bookingDataReady ?
            <div className='booking-info'>
                {isLoading && <LoadingIcon />}
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
                <div className='category'>
                    <span className='category-title-wrapper'>
                        <h3 className='category-name'>Contact Number</h3>
                        <button className='edit-button' onClick={handleEditPhone}>{isEditPhoneDisabled? 'EDIT' : 'SAVE'}</button>
                    </span>
                    <span className='edit category-content'>
                        <input className={`phone ${isEditPhoneDisabled? 'inactive' : 'active'}`} 
                                value={newPhone} 
                                disabled={isEditPhoneDisabled} 
                                onChange={(e)=>setNewPhone(e.target.value)}></input>
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
                                <br />
                            </span>
                        );
                    })}
                    </div>
                </div>
                <hr className='separator' />
                <div className='category comment'>
                    <span className='category-title-wrapper'>
                        <h3 className='category-name'>Comment</h3>
                        <button className='edit-button' onClick={handleEditComment}>{isEditCommentDisabled? 'EDIT' : 'SAVE'}</button>
                    </span>
                    <span className='edit category-content'>
                        <textarea className={`comment ${isEditCommentDisabled? 'inactive' : 'active'}`} 
                                    value={newComment} 
                                    disabled={isEditCommentDisabled} 
                                    onChange={(e)=>setNewComment(e.target.value)}
                        />
                    </span>
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