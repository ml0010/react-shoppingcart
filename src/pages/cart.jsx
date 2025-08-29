import { useContext } from 'react'
import { useNavigate } from "react-router-dom";
import { TOURS } from '../tourlist'
import { CartItem } from '../components/cart/cart-item';
import '../styles/cart.css';
import Logo from '../assets/map.webp';
import { Faq } from '../components/faq/faq';
import { GobackButton } from '../components/buttons/goback-button';
import { CartContext } from '../contexts/cart-context';
import { TourRecommendation } from '../components/tour/tour-recommendation';
import { MotionRoute } from '../components/motions';

export const Cart = () => {

    const { cartItems, getTotalCartAmount } = useContext (CartContext);
    const totalAmount = getTotalCartAmount();

    const navigate = useNavigate();

    return (
        <MotionRoute>
            <div className='cart'>
                <GobackButton />
                {totalAmount > 0 ? (
                    <>
                        <h1>Your basket</h1>
                        <div className='cartItems'>
                            {TOURS.map((tour) => {
                            if (cartItems[tour.id]["pax"] > 0) {
                                return <CartItem data={tour} key={tour.id} />;
                            } else { return null; }
                            })}
                        </div>
                        <div className='checkout'>
                            <p className='totalAmount'>Total Amount: {totalAmount} €</p>
                            <div className='bttns'>
                                <button className='button' onClick={() => navigate('/tours')}>MORE TOURS</button>
                                <button className='button' onClick={() => navigate('/booking')}>CHECKOUT</button>
                            </div>
                        </div>
                    </>
                ) : (
                    <>
                        <h1>Your Basket is Empty.</h1>
                        <img className='logo' src={Logo} alt='map' />
                        <p>Click MORE TOURS button below to see available tours.</p>
                        <div className='bttns'>
                            <button className='button' onClick={() => navigate('/tours')}>MORE TOURS</button>
                            <button className='button' onClick={() => navigate('/home')}>GO TO HOME</button>
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
