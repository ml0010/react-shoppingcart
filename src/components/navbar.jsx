import React, { useContext, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ListIcon, ShoppingBagIcon, XIcon } from '@phosphor-icons/react'
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

    // background effect when menu items are displayed
    useEffect(() => {
        document.body.style.overflow = menuOpen ? 'hidden' : 'unset';
    }, [menuOpen]);

    return (
        <div className='navbar'>

            {menuOpen ? (<div className='backdrop'></div>) : (<></>)}
            <div className={`navbarWrapper ${scroll ? 'active' : 'inactive'} ${menuOpen ? 'menuOpen' : 'menuClosed'}`}>
                <div className='backgroundGradient'></div>
                <div className='links'>
                    <button className={`menuBttn ${scroll ? 'menubar' : 'navbar'}`} onClick={handleMenuClick}><ListIcon size={40} /></button>
                    <Link to='/home' onClick={handleScreenToTop}> ABOUT </Link>
                    <Link to='/tours' onClick={handleScreenToTop}> OUR TOURS </Link>
                    <Link to='/contact' onClick={handleScreenToTop}> CONTACT US </Link>
                    <button className='cartSummaryBttn' disabled={!isButtonActive} onClick={handleShowCartSummary}><ShoppingBagIcon size={28} /></button>
                </div>
            </div>
            <div className='menubarWrapper' ref={menuRef}>
                <div className={`menuContent ${menuOpen ? 'open' : 'closed'}`}>
                    <button onClick={handleMenuClick}>
                        <XIcon size={40} weight="bold" />
                    </button>
                    <span className='menuLinks'>
                        <Link to='/home' onClick={handleScreenToTop}> ABOUT US </Link>
                        <Link to='/tours' onClick={handleScreenToTop}> SEE AVAILABLE TOURS </Link>
                        <Link to='/contact' onClick={handleScreenToTop}> CONTACT US </Link>
                        <Link to='/cart' onClick={handleScreenToTop}> SEE BASKET </Link>
                    </span>
                </div>
            </div>
        </div>
    )
}
