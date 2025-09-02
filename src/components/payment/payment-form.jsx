import { useContext, useState } from "react";
import { PaymentElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { PaymentContext } from "../../contexts/payment-context";
import { BookingContext } from "../../contexts/booking-context";
import { AuthenticationContext } from "../../contexts/authentication-context";
import { CartContext } from "../../contexts/cart-context";


const PaymentForm = () => {
    const stripe = useStripe();
    const elements = useElements();

    const { navigate, amount, reference } = useContext(PaymentContext);
    const { addBooking, name, email, phone, comment, resetBookingInfo } = useContext(BookingContext);
    const { user } = useContext(AuthenticationContext);
    const { setCartItems, getCartDefault, tours } = useContext(CartContext);
    
    
    const [ message, setMessage ] = useState(null);
    const [ isLoading, setIsLoading ] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!stripe || !elements) {
            return;
        } else {
            setIsLoading(true);
            setMessage('PAYMENT IN PROGRESS...');

            const response = await stripe.confirmPayment({
                elements,
                confirmParams: {
                    return_url: '',
                },
                redirect: 'if_required'
            });
            //console.log(response);
            if (response.error) {
                setMessage('PAYMENT FAILED');
                setIsLoading(false);
                return;
            }
            await addBooking(user.username, reference, name, email, phone, comment, tours);
            resetBookingInfo();
            setCartItems(getCartDefault);
            setIsLoading(false);
            navigate('/confirmation', {state: {reference: reference}});
        }
    };

    return (
        <div className='payment-form'>
            <form onSubmit={handleSubmit}>
                <div className='card'>
                    <h3>Payment</h3>
                    <PaymentElement />
                    <div className='payment-button'>
                        {message && <p className='message'>{message}</p>}
                        <button className='button highlight' disabled={isLoading || !stripe || !elements}>
                            {isLoading ? 'LOADING...' : `${amount}€ - PAY NOW`}
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default PaymentForm;