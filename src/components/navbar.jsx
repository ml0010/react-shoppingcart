import React, { useContext, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ListIcon, ShoppingBagIcon } from '@phosphor-icons/react'
import '../styles/navbar.css'
import { CartContext } from '../context/cart-context'

export const Navbar = () => {

    const { showCartSummary, setShowCartSummary, isButtonActive, setIsButtonActive } = useContext(CartContext);
    const [ scroll, setScroll ] = useState(false);
    const [ menuOpen, setMenuOpen] = useState(false);

    const handleShowCartSummary = () => {
        if(isButtonActive === true && showCartSummary === false) {
            setIsButtonActive(false);
            setShowCartSummary(true);
        } else {
            setIsButtonActive(true);
        }
        console.log("button clicked :" + isButtonActive);
        console.log("cart show :" + showCartSummary);
    };

    const handleScreenToTop = () => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: "smooth",
        });
        setMenuOpen(false);
    };

    const handleMenuClick = () => {
        setMenuOpen(!menuOpen);
    };

    // scroll menu bar
    useEffect(() => {
        const handleChangeNavbar = () => {
            window.pageYOffset > 250 ? setScroll(true) : setScroll(false);
            console.log("scrolled");
        };
        window.addEventListener('scroll', handleChangeNavbar);
        return () => {
            window.addEventListener('scroll', handleChangeNavbar);
        };
    });


    // menuIcon open/close
    let menuRef = useRef();

    useEffect(() => {
        if(menuOpen === true) {
            let handler = (e)=>{
                if(!menuRef.current.contains(e.target)){
                    handleMenuClick();
                    console.log(menuRef.current);
                }
            };
            document.addEventListener("mousedown", handler);
            return() =>{
                document.removeEventListener("mousedown", handler);
            }
        }
    });


    return (
        <div className='navbar'>
            <div className={`navbarWrapper ${scroll ? 'active' : 'inactive'}`}>
                <div className='backgroundGradient'></div>
                <div className='links'>
                    <Link to='/home' onClick={handleScreenToTop}> ABOUT </Link>
                    <Link to='/tours' onClick={handleScreenToTop}> OUR TOURS </Link>
                    <Link to='/contact' onClick={handleScreenToTop}> CONTACT US </Link>
                    <button className='cartSummaryBttn' disabled={!isButtonActive} onClick={handleShowCartSummary}><ShoppingBagIcon size={28} /></button>
                </div>
            </div>
            <div ref={menuRef}>
                <div className={`menuIcon ${scroll ? 'active' : 'inactive'}`}>
                    <button className='menuBttn' onClick={handleMenuClick}><ListIcon size={40} /></button>
                </div>
                <div className={`menuContent ${menuOpen ? 'open' : 'close'}`}>
                    <h1>MENU</h1>
                    <Link to='/home' onClick={handleScreenToTop}> ABOUT </Link>
                    <Link to='/tours' onClick={handleScreenToTop}> OUR TOURS </Link>
                    <Link to='/contact' onClick={handleScreenToTop}> CONTACT US </Link>
                    <Link to='/cart' onClick={handleScreenToTop}> BASKET </Link>
                </div>
            </div>
        </div>
    )
}
