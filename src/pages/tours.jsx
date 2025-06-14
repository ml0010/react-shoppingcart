import React, { useState } from 'react'
import '../styles/tours.css'
import { TOURS } from '../tourlist'
import { Tour } from '../components/tour'
import { Faq } from '../components/faq'

import MainPhoto from '../assets/banyalbufar.jpg'

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
            <div className='pageBackground' style={{ backgroundImage: `url(${MainPhoto})` }}></div>
            <div className='pageMain'>
                <h1 className='pageTitle'>DISCOVER EXPERIENCES</h1>
                <p className='pageDescription'>Curated activities and memorable experiences, complementing your time in Mallorca.</p>
            </div>
            <div className='title'>
                <h1>EXPLORE MALLORCA TOURS</h1>
                <hr className='separator' />
            </div>
            <div className='filterHandler'>
                <label className='filters'>
                    <input type='checkbox' checked={'all' === tourCategorySelected} value='all' onChange={(e)=>handleFilterTours(e.target.value)} /> ALL TOURS {`(${TOURS.length})`}
                </label>
                {getCategory().map((category, index)=> {
                    return (
                    <label className='filters' key={index}>
                        <input type='checkbox' checked={category === tourCategorySelected} value={category} onChange={(e)=>handleFilterTours(e.target.value)} />{` ${category} (${TOURS.filter(tour => tour.category===category).length})`}
                    </label>)
                })}
            </div>
            <div className='toursList'>
                {tourList.map((tour)=> (
                    <Tour data={tour} key={tour.id} />
                ))}
            </div>
            <Faq></Faq>
        </div>
    )
}
