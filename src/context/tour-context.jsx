import { createContext, useEffect, useState } from 'react'
import { TOURS } from '../tours'

export const TourContext =  createContext(null);

const cartDefault = () => {
    let cart = {};
    TOURS.map((tour) => cart[tour.id] = 0)
    return cart;
}


export const TourContextProvider = (props) => {

    const [cartItem, setCartItem] = useState(cartDefault());
    console.log(cartItem);

    const addToCart = (tourId) => {
        setCartItem((prev) => ({...prev, [tourId]: cartItem[tourId] + 1}));

    console.log(cartItem);
    }    
    const removeFromCart = (tourId) => {
        setCartItem((prev) => ({...prev, [tourId]: cartItem[tourId] - 1}));
    }

    const contextValue = {cartItem, addToCart, removeFromCart};
    return (
        <TourContext.Provider value={contextValue}>{props.children}</TourContext.Provider>
    )
}
