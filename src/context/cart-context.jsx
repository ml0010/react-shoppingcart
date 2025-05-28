import React, { createContext, useState } from 'react'

export const CartContext =  createContext(null);

export const CartContextProvider = (props) => {

    const [ showCartSummary, setShowCartSummary ] = useState(false);
    const [ isButtonActive, setIsButtonActive ] = useState(true);

    const contextValue = {showCartSummary, setShowCartSummary, isButtonActive, setIsButtonActive };

    return (
        <CartContext.Provider value={contextValue}>{props.children}</CartContext.Provider>
    )
}
