import React, { createContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';

export const PaymentContext =  createContext(null);

export const PaymentContextProvider = (props) => {

    const [ reference, setReference ] = useState(null);
    const [ amount, setAmount ] = useState(null);

    const navigate = useNavigate();

    const contextValue = { navigate, reference, setReference, amount, setAmount };

    return (
        <PaymentContext.Provider value={contextValue}>{props.children}</PaymentContext.Provider>
    )
}
