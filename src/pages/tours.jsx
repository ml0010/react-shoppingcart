import React, { useState } from 'react'
import '../styles/tours.css'
import { TOURS } from '../tourlist'
import { Tour } from '../components/tour'
import { Faq } from '../components/faq'
import { SkipPage } from '../components/skip-page'
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
                <p className='pageTitle'>DISCOVER EXPERIENCES</p>
                <p className='pageDescription'>Curated activities and memorable experiences, complementing your time in Mallorca.</p>
            </div>
            <div className='title'>
                <h1>EXPLORE MALLORCA TOURS</h1>
                <hr className='separator' />
            </div>
            <div className='filterHandler'>
                <div className='filters'>
                <label className='filter'>
                    <input type='checkbox' checked={'all' === tourCategorySelected} value='all' onChange={(e)=>handleFilterTours(e.target.value)} /> ALL TOURS {`(${TOURS.length})`}
                </label>
                {getCategory().map((category, index)=> {
                    return (
                    <label className='filter' key={index}>
                        <input type='checkbox' checked={category === tourCategorySelected} value={category} onChange={(e)=>handleFilterTours(e.target.value)} />{` ${category} (${TOURS.filter(tour => tour.category===category).length})`}
                    </label>)
                })}
                </div>
            </div>
            <div className='toursList'>
                {tourList.map((tour)=> (
                    <Tour data={tour} key={tour.id} />
                ))}
            </div>
            <Faq />
            <SkipPage />
        </div>
    )
}
