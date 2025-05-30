import React, { useEffect, useState } from 'react'
import '../styles/scroll-to-top.css'
import { CaretCircleUpIcon } from '@phosphor-icons/react';

export const ScrollToTop = () => {
    const [ showScrollBttn, setShowScrollBttn ] = useState(false);   

    const handleScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth'});
    };
    useEffect(() => {
        const handleScrollBttnVisibility = () => {
            window.pageYOffset > 250 ? setShowScrollBttn(true) : setShowScrollBttn(false);
        };
        window.addEventListener('scroll', handleScrollBttnVisibility);
        return () => {
            window.addEventListener('scroll', handleScrollBttnVisibility);
        };
    });

    return (
        <div className='scrollToTop'>
            <button className={`scrollBttn ${showScrollBttn ? 'active' : 'inactive'}`} onClick={handleScrollToTop}><CaretCircleUpIcon size={45} /></button>
        </div>
    )
}
