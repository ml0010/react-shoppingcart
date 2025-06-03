import React, { useState } from 'react'
import '../styles/tours.css'
import { TOURS } from '../tourlist'
import { Tour } from './tour'

import MainPhoto from '../assets/olive.jpg'

export const Tours = () => {

    const [ tourCategorySelected, setTourCategorySelected ] = useState('all');
    const [ tourList, setTourList ] = useState(TOURS);

    const getCategory = () => {
        const categoryList = [];
        TOURS.map((tour)=> {
            if (!categoryList.includes(tour.category)) {
                categoryList.push(tour.category);
            }
            return 0;
        });
        return categoryList;
    };

    const handleFilterTours = (categorySelected) => {

        setTourCategorySelected(categorySelected);

        if (categorySelected === 'all') {
            setTourList(TOURS);
        }
        else {
            const filteredTours = TOURS.filter((tour) => {
                return tour.category === categorySelected
            });
            setTourList(filteredTours);
        }
    }
    
    return (
        <div className='tours'>
            <div className='pageMain' style={{ backgroundImage: `url(${MainPhoto})` }}>
                <div>
                <h1 className='pageTitle'>FOR EXPLORERS</h1>
                <p className='pageDescription'>Curated activities and memorable experiences, complementing your time in Mallorca.</p>
                </div>
            </div>
            <div className='title'>
                <h1>Discover Experiences</h1>
            </div>
            <div className='filterHandler'>
                <label className='filters'>
                    <input type='checkbox' checked={'all' === tourCategorySelected} value='all' onChange={(e)=>handleFilterTours(e.target.value)} /> ALL TOURS
                </label>
                {getCategory().map((category, index)=> {
                    return (
                    <label className='filters' key={index}>
                        <input type='checkbox' checked={category === tourCategorySelected} value={category} onChange={(e)=>handleFilterTours(e.target.value)} /> {category}
                    </label>)
                })}
            </div>
            <div className='toursList'>
                {tourList.map((tour)=> (
                    <Tour data={tour} key={tour.id} />
                ))}
            </div>
        </div>
    )
}
