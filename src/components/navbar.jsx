import React, { useContext, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { FacebookLogoIcon, InstagramLogoIcon, ListIcon, ShoppingBagIcon, UserCircleCheckIcon, UserCircleIcon, XIcon, XLogoIcon } from '@phosphor-icons/react'
import '../styles/navbar.css'
import Logo from '../assets/map.webp'
import { CartContext } from '../context/cart-context'
import { AuthenticationContext } from '../context/authentication-context'

export const Navbar = () => {

    const { showCartSummary, setShowCartSummary, isButtonActive, setIsButtonActive } = useContext(CartContext);
    const { isLoggedIn, navigate } = useContext(AuthenticationContext);
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
            {menuOpen ? <div className='backdrop'></div> : <></>}
            <div className={`navbarWrapper ${scroll ? 'active' : 'inactive'} ${menuOpen ? 'menuOpen' : 'menuClosed'}`}>
                <div className='backgroundGradient'></div>
                <div className='links'>
                    <button className={`menuBttn ${scroll ? 'menubar' : 'navbar'}`} onClick={handleMenuClick}><ListIcon size={33} /></button>
                    <Link to='/home'>ABOUT</Link>
                    <Link to='/tours'>TOURS</Link>
                    <Link to='/contact'>CONTACT</Link>
                    {isLoggedIn? 
                        <button className='loginBttn' onClick={()=>navigate('/mypage')}><UserCircleCheckIcon size={28} /></button> : 
                        <button className='loginBttn' onClick={()=>navigate('/login')}><UserCircleIcon size={28} /></button>
                    }
                    <button className='cartSummaryBttn' disabled={!isButtonActive} onClick={handleShowCartSummary}><ShoppingBagIcon size={28} /></button>
                </div>
            </div>
            <div className='menubarWrapper' ref={menuRef}>
                <div className={`menuContent ${menuOpen ? 'open' : 'closed'}`}>
                    <button onClick={handleMenuClick}>
                        <XIcon size={33} weight="bold" />
                    </button>
                    <span className='menuLinks'>
                        <p className='menuTitle'>EXPLORE MALLORCA</p>
                        <img className='menuLogo' src={Logo} alt='map'></img>
                        <Link to='/home' onClick={handleMenuClick}> ABOUT US </Link>
                        <Link to='/tours' onClick={handleMenuClick}> TOURS </Link>
                        <Link to='/contact' onClick={handleMenuClick}> CONTACT US </Link>
                        <Link to='/cart' onClick={handleMenuClick}> BASKET </Link>
                        {isLoggedIn? <Link to='/mypage' onClick={handleMenuClick}> MY PAGE </Link> : <Link to='/login' onClick={handleMenuClick}> MY ACCOUNT </Link>}
                        <Link to='/mybooking' onClick={handleMenuClick}> MY RESERVATION </Link>
                    </span>
                    <span className="socialMedia">
                        <a href='https://www.instagram.com' target='_blank' rel='noreferrer'><InstagramLogoIcon size={20} /></a>
                        <a href='https://www.facebook.com' target='_blank' rel='noreferrer'><FacebookLogoIcon size={20} /></a>
                        <a href='https://x.com' target='_blank' rel='noreferrer'><XLogoIcon size={20} /></a>
                    </span>
                </div>
            </div>
        </div>
    )
}
