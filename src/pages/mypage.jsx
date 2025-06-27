import React, { useContext, useEffect, useState } from 'react'
import { AuthenticationContext } from '../context/authentication-context';
import '../styles/mypage.css';
import { BookingDetail } from '../components/booking-detail';
import { GobackButton } from '../components/goback-button';
import { GearIcon, SignOutIcon } from '@phosphor-icons/react';

export const MyPage = () => {
    const { user, logout, navigate } = useContext(AuthenticationContext);
    const [ name, setName ] = useState(user.name);
    const [ booking, setBooking ] = useState([...user.booking]);
    
    useEffect(()=>{
        setName(user.name);
        setBooking([...user.booking]);
    }, [user]);

    return (
        <div className='mypage'>
            <GobackButton />
            <h1>Hello, {name}</h1>
            <div className='Bttns'>
                <button onClick={()=>navigate('/myaccount')}>MY ACCOUNT<GearIcon size={18} /></button>
                <button onClick={logout}>LOGOUT<SignOutIcon size={18} /></button>
            </div>
            {booking.length? 
            <div className='bookings'>
                <h2>Your booking</h2>
                {booking.map((reference, index) => 
                <div>
                    <BookingDetail reference={reference} index={index} />
                </div>)}
            </div>
            : <></>}
        </div>
    )
}

export default MyPage;
