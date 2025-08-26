import './booking-confirmation.css'
import { useContext, useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import { BookingContext } from '../../contexts/booking-context';
import { Faq } from '../faq/faq';
import { GobackButton } from '../buttons/goback-button';

export const BookingConfirmation = () => {
    
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
            navigate('/mybooking');
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
        }
        setIsEditPhoneDisabled(!isEditPhoneDisabled);
    };

    const handleEditComment = () => {
        if(!isEditCommentDisabled) {
            updateComment(bookingReference, newComment);
        }
        setIsEditCommentDisabled(!isEditCommentDisabled);
    };

    return (
        <div className='confirmation'>
            {prevPath === '/mypage'? <GobackButton /> : <></>}
            <h1>BOOKING CONFIRMATION</h1>
            <h2 id='reference'>Booking Reference: {bookingReference}</h2>
            {bookingDataReady ?
            <div className='bookingInfo'>
                <div className='category'>
                    <h3 className='categoryTitle'>Name</h3>
                    <p className='categoryContent'>{bookingData.name}</p>
                </div>
                <hr className='separator' />
                <div className='category'>
                    <h3 className='categoryTitle'>Email</h3>
                    <p className='categoryContent'>{bookingData.email}</p>
                </div>
                <hr className='separator' />
                <div className='category'>
                    <h3 className='categoryTitle'>Contact Number</h3>
                    <span className='edit categoryContent'>
                        <input className={`phone ${isEditPhoneDisabled? 'inactive' : 'active'}`} 
                                value={newPhone} 
                                disabled={isEditPhoneDisabled} 
                                onChange={(e)=>setNewPhone(e.target.value)}></input>
                        <button className='editBttn' onClick={handleEditPhone}>{isEditPhoneDisabled? 'EDIT' : 'SAVE'}</button>
                    </span>
                </div>
                <hr className='separator' />
                <div className='category'>
                    <h3 className='categoryTitle'>Your Tours</h3>
                    <div className='categoryContent'>
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
                    <span className='edit categoryContent'>
                        <textarea className={`comment ${isEditCommentDisabled? 'inactive' : 'active'}`} 
                                    value={newComment} 
                                    disabled={isEditCommentDisabled} 
                                    onChange={(e)=>setNewComment(e.target.value)}></textarea>
                        <button className='editBttn' onClick={handleEditComment}>{isEditCommentDisabled? 'EDIT' : 'SAVE'}</button>
                    </span>
                </div>
            </div>
            : <></>}

            <div className='bttns'>
                <button className='cancelBttn' onClick={handleDeleteBooking}>CANCEL BOOKING</button>
                <Link to='/home'><button className='homeBttn' >BACK TO HOME</button></Link>
            </div>
            <Faq></Faq>
        </div>
    )
}
export default BookingConfirmation;