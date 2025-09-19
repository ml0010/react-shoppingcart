import { useContext, useEffect, useState } from 'react'
import { AuthenticationContext } from '../contexts/authentication-context';
import '../styles/mypage.css';
import { BookingDetail } from '../components/booking/booking-detail';
import { GobackButton } from '../components/buttons/goback-button';
import { GearIcon, SignOutIcon } from '@phosphor-icons/react';
import { Faq } from '../components/faq/faq';
import { TourRecommendation } from '../components/tour/tour-recommendation';
import { PopupContext } from '../contexts/popup-context';

export const MyPage = () => {
    const { user, logout, navigate } = useContext(AuthenticationContext);
    const { showPopupMessage } = useContext(PopupContext);

    const [ name, setName ] = useState(user.name);
    const [ booking, setBooking ] = useState([...user.booking]);
    
    useEffect(()=>{
        setName(user.name);
        setBooking([...user.booking]);
        showPopupMessage(`Welcome back, ${user.name}!`, 'positive');
    }, []);

    return (
        <div className='mypage'>
            <GobackButton />
            <div className='myInfo'>
                <h1>Hello, {name}</h1>
                <div className='buttons'>
                    <button className='button' onClick={()=>navigate('/myaccount')}>MY ACCOUNT<GearIcon size={15} /></button>
                    <button className='button' onClick={logout}>LOGOUT<SignOutIcon size={15} /></button>
                </div>
            </div>
            <div className='bookings'>
            {booking.length? 
                <div className='booking-list'>
                    <h2>Your booking ({booking.length})</h2>
                    {booking.map((reference, index) => 
                        <div key={index}>
                            <BookingDetail reference={reference} index={index} />
                        </div>
                    )}
                </div> : 
                <div className='booking-empty'>
                    <h2>No Booking History</h2>
                    <p>Click TOURS button below to discover.</p>
                    <div className='buttons'>
                        <button className='button' onClick={()=>navigate('/tours')}>TOURS</button>
                        <button className='button' onClick={()=>navigate('/home')}>BACK TO HOME</button>
                    </div>
                </div>
            }
            </div>
            <div className='tour-recommendation-wrapper'>
                <TourRecommendation />
            </div>
            <Faq />
        </div>
    )
}

export default MyPage;
