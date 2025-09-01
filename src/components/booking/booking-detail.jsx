import './booking-detail.css'
import { useContext, useEffect, useState } from 'react'
import { BookingContext } from '../../contexts/booking-context';
import { CaretDownIcon, CaretUpIcon, SuitcaseSimpleIcon } from '@phosphor-icons/react';
import { useLocation } from 'react-router-dom';
import EditButton from '../buttons/edit-button';

export const BookingDetail = ({reference, index}) => {

    const [ name, setName ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ phone, setPhone ] = useState("");
    const [ comment, setComment ] = useState("");
    const [ tours, setTours ] = useState([]);
    const [ date, setDate ] = useState("");
    const [ showInfo, setShowInfo ] = useState(false);

    const { getBookingDetail, navigate } = useContext(BookingContext);
    
    useEffect(()=>{
        getBookingDate(reference);
    }, [reference]);
    
    const getBookingDate = async(reference) => {
        const data = await getBookingDetail(reference);
        if(data) {
            setName(data.name);
            setEmail(data.email);
            setPhone(data.phone);
            setComment(data.comment);
            setTours([...data.tours]);
            setDate(data.date.toString().slice(0,10));
        }
    };

    const toggleShowInfo = () => {
        setShowInfo(!showInfo);
    };

    const location = useLocation();
    const handleEdit = () => {
        navigate('/confirmation', {state: {reference: reference, path: location.pathname}});
    };

    return (
        <div className='booking-detail' key={index} onClick={toggleShowInfo}>
            <div className='booking-ref'>
                <SuitcaseSimpleIcon size={25} />
                <h3>{date} - {reference}</h3>
                <div className='caret'>
                    {!showInfo? <CaretDownIcon size={23} /> : <CaretUpIcon size={23} />}
                </div>
            </div>
            <div className={`detail ${!showInfo? 'hidden' : 'active'}`}>
                <div className='guest-info'>
                    <h4>GUEST INFORMATION</h4>
                    <p>Booking Reference: <b>{reference}</b></p>
                    <p>Name: <b>{name}</b></p>
                    <p>Email: {email}</p>
                    <p>Phone: {phone}</p>
                    <p>Comment: {comment}</p>
                </div>
                <div className='booking-list'>
                    <div className='edit-button-wrapper'>
                        <EditButton onClick={handleEdit} />
                    </div>
                    <h4>BOOKING DETAIL</h4>
                    {tours.map((tour, index) =>
                        <>
                            {index !== 0 && <hr className='separator'/>}
                            <p><b>TOUR {index+1}</b></p>
                            <p>Title: {tour.tourName}</p>
                            <p>Pax: {tour.pax}</p>
                            <p>Date: {tour.date}</p>
                        </>
                    )}
                </div>
                

            </div>
        </div>
    )
}
