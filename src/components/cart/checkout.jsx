import { useContext } from 'react';
import './checkout.css';
import { CartContext } from '../../contexts/cart-context';
import { Link } from 'react-router-dom';
import { TOURS } from '../../tourlist';
import { CardholderIcon } from '@phosphor-icons/react';
import { BookingContext } from '../../contexts/booking-context';
import { PaymentContext } from '../../contexts/payment-context';

export const Checkout = ({ path }) => {

    const { cartItems, getTotalCartAmount, getCartItemNumber, isGuestInfoCompleted, setIsGuestInfoCompleted } = useContext(CartContext);
    const { name, email, phone } = useContext(BookingContext);
    const { amount, isPaymentLoading } = useContext(PaymentContext);
    
    const totalAmount = getTotalCartAmount();
    const totalCount = getCartItemNumber();

    return (
        <div className='checkout'>
            {path !== '/cart' &&
                <Link className='edit-basket-button' to='/cart'>EDIT</Link>
            }
            <div>{totalCount} {totalCount > 1 ? 'Items' : 'Item'}</div>
            <div className='summary'>
                {TOURS.map((tour, index) => {
                    if (cartItems[tour.id]["pax"] > 0) {
                        return (
                            <span key={index}>
                                <hr className='separator' />
                                <p><b>{tour.tourName}</b> x {cartItems[tour.id]["pax"]}</p>
                                <p>Date: {cartItems[tour.id]["date"]}</p>
                                <p></p>
                            </span>
                        );
                    } else { return null; }
                })}
            </div>
            <hr className='separator'/>
            <div className='total'>
                <span>Total: </span>
                <span>{totalAmount} €</span>
            </div>
            <span className='vat'>* VAT Included</span>
            <div className='buttons'>
                {path !== '/booking' &&
                    <Link className='button highlight' to={'/booking'}>CHECKOUT</Link>
                }
                {(path === '/booking' && !isGuestInfoCompleted) &&
                    <button className={`button highlight ${!(name && email && phone) ? 'blocked' : 'active'}`} type='submit' form='guestInfo'>NEXT - PAYMENT<CardholderIcon size={18} /></button>
                }
                {(path === '/booking' && isGuestInfoCompleted) && 
                    <div className='payment-button'>
                        <button className='button highlight' type='submit' form='payment'>
                            {isPaymentLoading ? 'LOADING...' : `${amount} € - PAY NOW`}
                        </button>
                        <button className='button' onClick={() => {setIsGuestInfoCompleted(false)}}>BACK TO GUEST INFO</button>
                    </div>
                }
            </div>
        </div>
    )
}
