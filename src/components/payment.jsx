import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import PaymentForm from "./payment-form";
import { PaymentContext } from "../context/payment-context";
import '../styles/payment.css'


const stripe = loadStripe('pk_test_51RgO2tPJkWN7PGw8XNRqcLtynOj95XpMjulmEPTpFqdUOKexRD5oAOAjbkwpEB42uDZ63G0RyoZpfdsv8BLin1Pe00y5UTInLu');

const Payment = () => {
    const [ clientSecret, setClientSecret ] = useState(null);
    const { navigate, amount } = useContext(PaymentContext);

    useEffect(() => {
        if(amount) {
            axios.post("https://react-shoppingcart-q31i.onrender.com/create-payment-intent", {
                amount: amount,
            })
            .then((resp) => setClientSecret(resp.data.clientSecret));
        } else {
            navigate('/home');
        }
    }, []);
    

    const options = {
        clientSecret,
        theme: "stripe",
    };

    return (
        clientSecret && (
            <Elements stripe={stripe} options={options}>
                <PaymentForm />
            </Elements>
        )
    );
};

export default Payment;
