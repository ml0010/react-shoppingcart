import { useContext } from 'react'
import { Link, useLocation } from "react-router-dom";
import { TOURS } from '../tourlist'
import { CartItem } from '../components/cart/cart-item';
import '../styles/cart.css';
import Logo from '../assets/map.webp';
import { Faq } from '../components/faq/faq';
import { GobackButton } from '../components/buttons/goback-button';
import { CartContext } from '../contexts/cart-context';
import { TourRecommendation } from '../components/tour/tour-recommendation';
import { MotionRoute } from '../components/motions';
import { Checkout } from '../components/cart/checkout';

export const Cart = () => {

    const { cartItems, getTotalCartAmount } = useContext (CartContext);
    const totalAmount = getTotalCartAmount();
    const location = useLocation();

    return (
        <MotionRoute>
            <div className='cart'>
                <GobackButton />
                {totalAmount > 0 ? (
                    <>
                        <h1>Your basket</h1>
                        <div className='section'>
                            <div className='cart-display'>
                                <div className='cart-items'>
                                    {TOURS.map((tour) => {
                                    if (cartItems[tour.id]["pax"] > 0) {
                                        return <CartItem data={tour} key={tour.id} />;
                                    } else { return null; }
                                    })}
                                </div>
                                <div className='bttns'>
                                    <button className='button'>EMPTY BASKET</button>
                                    <Link className='button' to={'/tours'}>MORE TOURS</Link>
                                </div>
                            </div>
                            <div className='summary-display'>
                                <Checkout path={location.pathname}/>
                            </div>
                        </div>
                    </>
                ) : (
                    <>
                        <h1>Your Basket is Empty.</h1>
                        <img className='logo' src={Logo} alt='map' />
                        <p>Click MORE TOURS button below to see available tours.</p>
                        <div className='bttns'>
                            <Link className='button' to={'/home'}>HOME</Link>
                            <Link className='button highlight' to={'/tours'}>MORE TOURS</Link>
                        </div>

                    </>
                )}
                <TourRecommendation />
                <Faq />
            </div>
        </MotionRoute>
    )
}

export default Cart;
