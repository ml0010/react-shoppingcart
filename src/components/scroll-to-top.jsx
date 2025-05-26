import React, { useEffect, useState } from 'react'
import '../styles/scroll-to-top.css'
import { ArrowCircleUpIcon } from '@phosphor-icons/react';

export const ScrollToTop = () => {
    const [ showScrollBttn, setShowScrollBttn ] = useState(false);        

    const handleScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth'});
    };
    useEffect(() => {
        const handleScrollBttnVisibility = () => {
            window.pageYOffset > 300 ? setShowScrollBttn(true) : setShowScrollBttn(false);
        };

        window.addEventListener('scroll', handleScrollBttnVisibility);

        return () => {
        window.addEventListener('scroll', handleScrollBttnVisibility);
        };
    });

    return (
        <div className='scrollToTop'>
            {showScrollBttn && (
                <button className='scrollBttn' onClick={handleScrollToTop}><ArrowCircleUpIcon size={50} /></button>
            )}
        </div>
    )
}
