import React, { createContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';

export const PaymentContext =  createContext(null);

export const PaymentContextProvider = (props) => {

    const [ reference, setReference ] = useState(null);
    const [ amount, setAmount ] = useState(null);
    const [ isStripeReady, setIsStripeReady ] = useState(false);
    const [ isPaymentInfoReady, setIsPaymentInfoReady ] = useState(false);
    const [ isProessingPayment, setIsProcessingPayment ] = useState(false);

    const navigate = useNavigate();

    const contextValue = { navigate, reference, setReference, amount, setAmount, isStripeReady, setIsStripeReady, isPaymentInfoReady, setIsPaymentInfoReady, isProessingPayment, setIsProcessingPayment };

    return (
        <PaymentContext.Provider value={contextValue}>{props.children}</PaymentContext.Provider>
    )
}
