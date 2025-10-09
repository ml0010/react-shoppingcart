import './navbar.css'
import { useContext, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { FacebookLogoIcon, InstagramLogoIcon, ListIcon, ShoppingBagIcon, UserCircleCheckIcon, UserCircleIcon, XIcon, XLogoIcon } from '@phosphor-icons/react'
import { CartContext } from '../../contexts/cart-context'
import { AuthenticationContext } from '../../contexts/authentication-context'
import { ScrollToTop } from '../buttons/scroll-to-top'
import { CartSummary } from '../cart/cart-summary'

export const Navbar = () => {

    const { getCartItemNumber, showCartSummary, setShowCartSummary } = useContext(CartContext);
    const { isLoggedIn, navigate } = useContext(AuthenticationContext);
    const [ isScrollDown, setIsScrollDown ] = useState(false);
    const [ menuOpen, setMenuOpen] = useState(false);

    const handleShowCartSummary = () => {
        setShowCartSummary(!showCartSummary);
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
            window.pageYOffset > 250 ? setIsScrollDown(true) : setIsScrollDown(false);
        };
        window.addEventListener('scroll', handleChangeNavbar);
        return () => {
            window.addEventListener('scroll', handleChangeNavbar);
        };
    });

    // menuIcon outside click close
    let menuRef = useRef();

    useEffect(() => {
        if(menuOpen === true) {
            let handler = (e)=>{
                if(!menuRef.current.contains(e.target)){
                    handleMenuClick();
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

    const cartSummaryRef = useRef();

    useEffect(() => {
        if(showCartSummary === true) {
            let handler = (e)=>{
                if(!cartSummaryRef.current.contains(e.target)) {
                    setShowCartSummary(false);
                }
            };
            document.addEventListener("mousedown", handler);
            return() =>{
                document.removeEventListener("mousedown", handler);
            }
        }
    }, [showCartSummary, handleShowCartSummary]);

    return (
        <div className='navbar'>
            {menuOpen && <div className='backdrop'></div>}
            <div className={`navbar-wrapper ${isScrollDown ? 'active' : 'inactive'} ${menuOpen ? 'menuOpen' : 'menuClosed'}`}>
                <div className='background-gradient'></div>
                <div className='links'>
                    <div className={`link-icon menu-button ${isScrollDown ? 'navbar-inactive' : 'navbar-active'}`} onClick={handleMenuClick}><ListIcon size={33} /></div>
                    <Link className='link' to='/home'>ABOUT</Link>
                    <Link className='link' to='/tours'>TOURS</Link>
                    <Link className='link' to='/contact'>CONTACT</Link>
                    {isLoggedIn? 
                        <button className='link-icon' onClick={()=>navigate('/mypage')}><UserCircleCheckIcon size={30} /></button> : 
                        <button className='link-icon' onClick={()=>navigate('/login')}><UserCircleIcon size={30} /></button>
                    }
                    <div className='cart-icon-wrapper'>
                        {getCartItemNumber() > 0 && 
                            <span className='basket-item-number'>{getCartItemNumber()}</span>
                        }
                        <button className={`link-icon cart-summary-button ${showCartSummary ? 'disabled' : 'active'}`} onClick={handleShowCartSummary}><ShoppingBagIcon size={30} /></button>
                    </div>
                </div>
                <div ref={cartSummaryRef}>
                    <CartSummary />
                </div>
            </div>
            <div className='menubar-wrapper' ref={menuRef}>
                <div className={`menubar ${menuOpen ? 'open' : 'closed'}`}>
                    <button onClick={handleMenuClick}>
                        <XIcon size={15} weight="bold" />
                    </button>
                    <span className='links'>
                        <p className='menu-title'>EXPLORE MALLORCA</p>
                        <Link className='link' to='/home' onClick={handleMenuClick}> ABOUT </Link>
                        <Link className='link' to='/tours' onClick={handleMenuClick}> TOURS </Link>
                        <Link className='link' to='/contact' onClick={handleMenuClick}> CONTACT </Link>
                        <Link className='link' to='/cart' onClick={handleMenuClick}> BASKET </Link>
                        {isLoggedIn? 
                            <Link className='link' to='/mypage' onClick={handleMenuClick}> MY PAGE </Link> : 
                            <Link className='link' to='/login' onClick={handleMenuClick}> MY ACCOUNT </Link>
                        }
                        <Link className='link' to='/mybooking' onClick={handleMenuClick}> MY RESERVATION </Link>
                    </span>
                    <span className="social-media">
                        <a href='https://www.instagram.com' target='_blank' rel='noreferrer'><InstagramLogoIcon size={20} /></a>
                        <a href='https://www.facebook.com' target='_blank' rel='noreferrer'><FacebookLogoIcon size={20} /></a>
                        <a href='https://x.com' target='_blank' rel='noreferrer'><XLogoIcon size={20} /></a>
                    </span>
                </div>
            </div>
            <ScrollToTop />
        </div>
    )
}
