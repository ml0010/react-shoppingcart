import { useEffect, useState } from 'react'
import './tour-recommendation.css';
import { TourInfo } from './tour-info';

export const TourRecommendationOutput = (props) => {
    const { id, tourName, img, description, duration, languages, meetingPoint, price } = props.data;

    const [ showTourInfo, setShowTourInfo ] = useState(false);


    useEffect(() => {
        document.body.style.overflow = showTourInfo ? 'hidden' : 'unset';
    }, [showTourInfo]);

    return (
        <>
            <div className='recommendation' key={id} onClick={()=>setShowTourInfo(true)}>
                <img className='tourImg' src={img[0]} alt={tourName} />            
                <div className='tourDetail'>
                    <p className='tourName'>{tourName}</p>
                    <button className='selectBttn' >SEE MORE</button>
                </div>
            </div>
            {showTourInfo && 
            <>  
                <div className={`backdrop ${showTourInfo? 'active' : 'inactive'}`} key={id}></div>
                <TourInfo props={props.data} showTourInfo={showTourInfo} closeTourInfo={() => setShowTourInfo(false)} />
            </>
            }
        </>
    )
}
