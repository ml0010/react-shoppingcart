import React, { useContext, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { FacebookLogoIcon, InstagramLogoIcon, ListIcon, ShoppingBagIcon, XIcon, XLogoIcon } from '@phosphor-icons/react'
import '../styles/navbar.css'
import Logo from '../assets/map.webp'
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
        //console.log("button clicked :" + isButtonActive);
        //console.log("cart show :" + showCartSummary);
    };

    // open/close the menu left
    const handleMenuClick = () => {
        setMenuOpen(!menuOpen);
    };

    // scroll menu bar
    useEffect(() => {
        const handleChangeNavbar = () => {
            window.pageYOffset > 250 ? setScroll(true) : setScroll(false);
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
                    <Link to='/home'> ABOUT </Link>
                    <Link to='/tours'> TOURS </Link>
                    <Link to='/contact'> CONTACT </Link>
                    <button className='cartSummaryBttn' disabled={!isButtonActive} onClick={handleShowCartSummary}><ShoppingBagIcon size={28} /></button>
                </div>
            </div>
            <div className='menubarWrapper' ref={menuRef}>
                <div className={`menuContent ${menuOpen ? 'open' : 'closed'}`}>
                    <button onClick={handleMenuClick}>
                        <XIcon size={40} weight="bold" />
                    </button>
                    <span className='menuLinks'>
                        <p className='menuTitle'>EXPLORE MALLORCA</p>
                        <img className='menuLogo' src={Logo} alt='map'></img>
                        <Link to='/home' onClick={handleMenuClick}> ABOUT US </Link>
                        <Link to='/tours' onClick={handleMenuClick}> TOURS </Link>
                        <Link to='/contact' onClick={handleMenuClick}> CONTACT US </Link>
                        <Link to='/cart' onClick={handleMenuClick}> YOUR BASKET </Link>
                    </span>
                    <span className="socialMedia">
                        <InstagramLogoIcon size={20} />
                        <FacebookLogoIcon size={20} />
                        <XLogoIcon size={20} />
                    </span>
                </div>
            </div>
        </div>
    )
}
