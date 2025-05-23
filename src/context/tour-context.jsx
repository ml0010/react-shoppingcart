import { createContext, useEffect, useState } from 'react'
import { TOURS } from '../tours'

export const TourContext =  createContext(null);

const cartDefault = () => {
    let cart = {};
    TOURS.map((tour) => cart[tour.id] = 0)
    return cart;
}

export const TourContextProvider = (props) => {

    const [cartItems, setCartItems] = useState(cartDefault());

    const addToCart = (tourId) => {
        setCartItems((prev) => ({...prev, [tourId]: cartItems[tourId] + 1}));
    }    
    const removeFromCart = (tourId) => {
        setCartItems((prev) => ({...prev, [tourId]: cartItems[tourId] - 1}));
    }
    const deleteFromCart = (tourId) => {
        setCartItems((prev) => ({...prev, [tourId]: cartItems[tourId] = 0}));
    }

    const contextValue = {cartItems, addToCart, removeFromCart, deleteFromCart};
    return (
        <TourContext.Provider value={contextValue}>{props.children}</TourContext.Provider>
    )
}
