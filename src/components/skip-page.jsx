import React, { useEffect, useState } from 'react'
import '../styles/skip-page.css';
import { CaretCircleDownIcon } from '@phosphor-icons/react';

export const SkipPage = () => {
    const [ showScrollBttn, setShowScrollBttn ] = useState(true);   

    const handleSkipPage = () => {
        window.scrollTo({ top: window.innerHeight, behavior: 'smooth'});
    };
    useEffect(() => {
        const handleScrollBttnVisibility = () => {
            window.pageYOffset > '120' ? setShowScrollBttn(false) : setShowScrollBttn(true);
        };
        window.addEventListener('scroll', handleScrollBttnVisibility);
        return () => {
            window.addEventListener('scroll', handleScrollBttnVisibility);
        };
    });

    return (
        <div className='scrollDown'>
            <button className={`scrollDownBttn ${showScrollBttn ? 'active' : 'inactive'}`} onClick={handleSkipPage}><CaretCircleDownIcon size={45} /></button>
        </div>
    )
}