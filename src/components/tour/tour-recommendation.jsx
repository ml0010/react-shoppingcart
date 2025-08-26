import './tour-recommendation.css';
import { useEffect, useState } from 'react'
import { TOURS } from '../../tourlist';
import { TourRecommendationOutput } from './tour-recommendation-output';
import { CaretLeftIcon, CaretRightIcon } from '@phosphor-icons/react';


export const TourRecommendation = () => {

    const [ tourList, setTourList ] = useState([]);
    const [ isRecommendationLoaded, setIsRecommendationLoaded ] = useState(false);

    const createRecommendationList = () => {
        const numbers = [];
        const tempList = [];
        while (numbers.length < 8) {
            const newNumber = Math.floor(Math.random()*TOURS.length);
            if (!numbers.includes(newNumber)) {
                numbers.push(newNumber);
                tempList.push(TOURS[newNumber]);
            }
        };
        setTourList([...tourList, ...tempList]);
    }
    useEffect(() => {
        createRecommendationList();
        setIsRecommendationLoaded(true);
    },[]);

    const clickLeft = () => {
        const tempList = tourList;
        const shift = tempList.shift();
        tempList.push(shift);
        setTourList([...tempList]);
    };
    const clickRight = () => {
        const tempList = tourList;
        const pop = tempList.pop();
        tempList.unshift(pop);
        setTourList([...tempList]);
    };


    return (
        <div className='tour-recommendations'>
            {isRecommendationLoaded ? <>
            <h3>OUR TOURS YOU MIGHT BE INTERESTED IN</h3>
            <div className='tour-recommendations-wrapper'>
                <button className='directionBttn' onClick={clickLeft}><CaretLeftIcon size={28} /></button>
                <div className='recommendations'>
                    {tourList.slice(0,3).map((tour, index) => 
                    <TourRecommendationOutput data={tour}/>
                    )}
                </div>
                <button className='directionBttn' onClick={clickRight}><CaretRightIcon size={28} /></button>
            </div>
            </> : <></> }
        </div>
    )
}

