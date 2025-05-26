import React, { useState, useEffect } from 'react'
import '../styles/tour.css'
import { ClockIcon, GlobeSimpleIcon, MapPinLineIcon, PiggyBankIcon } from '@phosphor-icons/react'
//import { TourContext } from '../context/tour-context';
import { TourInfo } from './tour-info';

export const Tour = (props) => {
    const { id, tourName, img, description, duration, languages, meetingPoint, price } = props.data;
    const [ showTourInfo, setShowTourInfo ] = useState(false);

    useEffect(() => {
        document.body.style.overflow = showTourInfo ? 'hidden' : 'unset';
        document.body.style.backgroundColor = showTourInfo? 'black' : 'transparent';
    }, [showTourInfo]);

    return (
        <div className='tour' key={id}>
            <div className='tourName'>
                <p><b>{tourName}</b></p>
                <img src={img} alt={tourName} />                
                <p className='description'>{description}</p>
            </div>
            <div className='tourDetail'>
                <p><ClockIcon size={20} /> Duration {duration} hours</p>
                <p><GlobeSimpleIcon size={20} />{languages}</p>
                <p><MapPinLineIcon size={20} />Tour starts in {meetingPoint}</p>
                <p><PiggyBankIcon size={20} />{price}€ per person</p>
            </div>
            <button className='selectBttn' onClick={()=>setShowTourInfo(true)}>Select Tour</button>

            {showTourInfo? (
                <>
                    <div className={`backdrop ${showTourInfo? 'active' : 'inactive'}`}>
                        <TourInfo props={props} showTourInfo={showTourInfo} closeTourInfo={() => setShowTourInfo(false)} />
                    </div>
                </>) : (<></>)}
        </div>
    )
}
