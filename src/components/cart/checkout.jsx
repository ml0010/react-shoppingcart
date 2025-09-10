import { useContext } from 'react';
import './checkout.css';
import { CartContext } from '../../contexts/cart-context';
import { Link } from 'react-router-dom';
import { TOURS } from '../../tourlist';

export const Checkout = ({ path }) => {

    const { cartItems, getTotalCartAmount, getCartItemNumber } = useContext(CartContext);
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
            <div >
                {path !== '/booking' &&
                    <Link className='button highlight' to={'/booking'}>CHECKOUT</Link>
                }
                {path === '/booking' &&
                    <Link className='button highlight' to={'/booking'}>NEXT - PAYMENT</Link>
                }
            </div>
        </div>
    )
}
