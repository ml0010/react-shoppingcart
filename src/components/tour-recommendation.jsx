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
        while (numbers.length < 3) {
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


    return (
        <div className='tour-recommendations-wrapper'>
            {isRecommendationLoaded ? <>
                <h2>Recommendations</h2>
                <div className='tour-recommendations'>
                    {tourList.map((tour, index) => 
                    <TourRecommendationOutput data={tour}/>
                    )}
                </div>
            </> : <></> }
        </div>
    )
}
