import { useContext, useEffect, useState } from "react";
import { PaymentElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { PaymentContext } from "../../contexts/payment-context";
import { BookingContext } from "../../contexts/booking-context";
import { AuthenticationContext } from "../../contexts/authentication-context";
import { CartContext } from "../../contexts/cart-context";
import { LoadingIcon } from "../buttons/loading-icon";
import { SirenIcon } from "@phosphor-icons/react";
import { PopupContext } from "../../contexts/popup-context";


const PaymentForm = () => {
    const stripe = useStripe();
    const elements = useElements();

    const { amount, navigate, reference, isStripeReady, setIsStripeReady, isPaymentInfoReady, setIsPaymentInfoReady, isProessingPayment, setIsProcessingPayment } = useContext(PaymentContext);
    const { addBooking, name, email, phone, comment, resetBookingInfo } = useContext(BookingContext);
    const { user } = useContext(AuthenticationContext);
    const { setCartItems, cartDefault, getCartList, setIsGuestInfoCompleted } = useContext(CartContext);
    const { showPopupMessage } = useContext(PopupContext);
    
    const [ message, setMessage ] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!stripe || !elements) {
            return;
        } else {
            const tours = getCartList();
            setIsProcessingPayment(true);
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
                setIsProcessingPayment(false);
                return;
            }
            await addBooking(user.username, reference, name, email, phone, comment, tours, amount);
            await resetBookingInfo();
            await setCartItems(cartDefault);
            await setIsProcessingPayment(false);
            await setIsGuestInfoCompleted(false);
            await setIsPaymentInfoReady(false);
            showPopupMessage(`Booking successful - ${reference}`, 'positive');
            navigate('/confirmation', {state: {reference: reference}});
        }
    };
    const handlePaymentDetail = (e) => {
        if(e.complete) {
            setIsPaymentInfoReady(!isPaymentInfoReady);
        }
    };

    useEffect(() => {
        setIsStripeReady(false);
        setIsProcessingPayment(false);
        setIsPaymentInfoReady(false);
    }, []);

    return (
        <div className='payment-form'>
            {(!isStripeReady || isProessingPayment) && 
                <LoadingIcon /> 
            }
            <form onSubmit={handleSubmit} id='payment'>
                <div className='card'>
                    <h3>Payment Information</h3>
                    
                    <PaymentElement 
                        onReady={() => {setIsStripeReady(true)}}
                        onChange={(e) => {handlePaymentDetail(e)}}
                    />
                    {message && <p className='message'><SirenIcon size={15} />{message}</p>}
                </div>
            </form>
        </div>
    );
};

export default PaymentForm;

/*
<button className='button highlight' disabled={isLoading || !stripe || !elements}>
    {isLoading ? 'LOADING...' : `${amount}€ - PAY NOW`}
</button>

*/