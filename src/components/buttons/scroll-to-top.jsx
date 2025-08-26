import { useEffect, useState } from 'react'
import './scroll-to-top.css'
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
        <div className={`scrollToTop ${showScrollBttn ? 'active' : 'inactive'}`}>
            <button className={`scrollBttn`} onClick={handleScrollToTop}><CaretCircleUpIcon size={45} /></button>
            <p className='text'>Scroll To Top</p>
        </div>
    )
}
