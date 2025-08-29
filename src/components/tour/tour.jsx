import './tour.css'
import { useState, useEffect } from 'react'
import { ClockIcon, MapPinLineIcon, PiggyBankIcon } from '@phosphor-icons/react'
import { TourInfo } from './tour-info';
import { Carousel } from './carousel';
import { Link } from 'react-router-dom';

export const Tour = (props) => {
    const { id, tourName, img, description, duration, meetingPoint, price } = props.data;
    const [ showTourInfo, setShowTourInfo ] = useState(false);

    useEffect(() => {
        document.body.style.overflow = showTourInfo ? 'hidden' : 'unset';
    }, [showTourInfo]);

    return (
        <div className='tour' key={id}>
            <div className='tourImg'>
                <Carousel images={img} thumbnails={false}/>
            </div>
            <div className='tourDetail'>
                <p className='tourName'>{tourName}</p>
                <span className='subInfo'>
                    <ClockIcon size={15} />
                    <p>Duration {duration} hours</p>
                    <MapPinLineIcon size={15} />
                    <p>Tour starts in {meetingPoint}</p>
                    <PiggyBankIcon size={15} />
                    <p>{price}€ per person</p>
                </span>
                <Link to="/onboarding/profile" state={{ from: "occupation" }}>
                Next Step
                </Link>
                <button className='button' onClick={()=>setShowTourInfo(true)}>DETAILS & BOOK</button>
            </div>

            {showTourInfo && 
                <>
                    <div className={`backdrop ${showTourInfo? 'active' : 'inactive'}`} key={id}></div>
                    <TourInfo props={props.data} showTourInfo={showTourInfo} closeTourInfo={() => setShowTourInfo(false)} />
                </>
            } 
        </div>
    )
}
