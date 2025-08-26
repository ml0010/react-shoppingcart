import { useEffect, useState } from 'react'
import './skip-page.css';
import { CaretCircleDownIcon } from '@phosphor-icons/react';

export const SkipPage = () => {
    const [ showScrollBttn, setShowScrollBttn ] = useState(true);   

    const handleSkipPage = () => {
        window.scrollTo({ top: window.innerHeight, behavior: 'smooth'});
    };
    useEffect(() => {
        const handleScrollBttnVisibility = () => {
            window.pageYOffset > '30' ? setShowScrollBttn(false) : setShowScrollBttn(true);
        };
        window.addEventListener('scroll', handleScrollBttnVisibility);
        return () => {
            window.addEventListener('scroll', handleScrollBttnVisibility);
        };
    });

    return (
        <div className={`scrollDown ${showScrollBttn ? 'active' : 'inactive'}`}>
            <p className='text'>Discover More</p>
            <button className={`scrollDownBttn`} onClick={handleSkipPage}><CaretCircleDownIcon size={45} /></button>
        </div>
    )
}