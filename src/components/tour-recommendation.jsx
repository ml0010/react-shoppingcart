import React, { useEffect, useState } from 'react'
import { TOURS } from '../tourlist';
import '../styles/tour-recommendation.css';
import { TourInfo } from './tour-info';
import { TourRecommendationOutput } from './tour-recommendation-output';

export const TourRecommendation = () => {

    const [ tourList, setTourList ] = useState([]);
    const [ isRecommendationLoaded, setIsRecommendationLoaded ] = useState(false);

    const createRecommendationList = () => {
        const numbers = [];
        while (numbers.length < 4) {
            const newNumber = Math.floor(Math.random()*TOURS.length);
            if (!numbers.includes(newNumber)) {
                numbers.push(newNumber);
                tourList.push(TOURS[newNumber]);
            }
        };
    }
    useEffect(() => {
        createRecommendationList();
        setIsRecommendationLoaded(true);
        console.log(tourList);
    },[]);

    const clickLeft = () => {
        setIsRecommendationLoaded(false);
        const shift = tourList.shift();
        tourList.push(shift);
        setIsRecommendationLoaded(true);
        console.log(tourList);
    };


    return (
        <>
            <h2>Recommendations</h2>
            {isRecommendationLoaded ? <>
            <div className='tour-recommendations-wrapper'>
                
                    <button onClick={clickLeft}>LEFT</button>
                    <div className='tour-recommendations'>
                        {tourList.slice(0, 3).map((tour, index) => 
                        <TourRecommendationOutput data={tour}/>
                        )}
                    </div>
                    <button>RIGHT</button>
            </div>
            {tourList.map(tour => <p>{tour.tourName}</p>)}
            </> : <></> }
        </>
    )
}

