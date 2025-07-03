import React, { useContext, useEffect, useState } from 'react'
import { AuthenticationContext } from '../context/authentication-context';
import '../styles/mypage.css';
import { BookingDetail } from '../components/booking-detail';
import { GobackButton } from '../components/goback-button';
import { GearIcon, SignOutIcon } from '@phosphor-icons/react';
import { Faq } from '../components/faq';

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
            <div className='myInfo'>
                <h1>Hello, {name}</h1>
                <div className='Bttns'>
                    <button onClick={()=>navigate('/myaccount')}>MY ACCOUNT<GearIcon size={18} /></button>
                    <button onClick={logout}>LOGOUT<SignOutIcon size={18} /></button>
                </div>
            </div>
            {booking.length? 
            <div className='bookings'>
                <h2>Your booking ({booking.length})</h2>
                {booking.map((reference, index) => 
                    <div key={index}>
                        <BookingDetail reference={reference} index={index} />
                    </div>
                )}
            </div> : 
            <div className='booking-empty'>
                <h2>No Booking History</h2>
                <p>Click TOURS button below to see available tours.</p>
                <div className='Bttns'>
                    <button onClick={()=>navigate('/tours')}>TOURS</button>
                    <button onClick={()=>navigate('/home')}>BACK TO HOME</button>
                </div>
            </div>}
            <Faq />
        </div>
    )
}

export default MyPage;
