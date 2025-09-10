import { useContext, useEffect } from 'react'
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

    const { cartItems, getTotalCartAmount, getCartItemNumber } = useContext (CartContext);
    const totalAmount = getTotalCartAmount();
    const totalCount = getCartItemNumber();

    const navigate = useNavigate();

    return (
        <MotionRoute>
            <div className='cart'>
                <GobackButton />
                {totalAmount > 0 ? (
                    <>
                        <h1>Your basket</h1>
                        <div className='sections'>
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
                                    <button className='button' onClick={() => navigate('/tours')}>MORE TOURS</button>
                                </div>
                            </div>
                            <div className='total-display'>
                                <div className='checkout'>
                                    <div>{totalCount} {totalCount > 1 ? 'Items' : 'Item'}</div>
                                    <hr className='separator'/>
                                    <div className='total'>
                                        <span>Total: </span>
                                        <span>{totalAmount} €</span>
                                    </div>
                                    <span>* VAT Included</span>
                                    <div >
                                        <button className='button highlight' onClick={() => navigate('/booking')}>CHECKOUT</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                ) : (
                    <>
                        <h1>Your Basket is Empty.</h1>
                        <img className='logo' src={Logo} alt='map' />
                        <p>Click MORE TOURS button below to see available tours.</p>
                        <div className='bttns'>
                            <button className='button' onClick={() => navigate('/home')}>HOME</button>
                            <button className='button highlight' onClick={() => navigate('/tours')}>MORE TOURS</button>
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
