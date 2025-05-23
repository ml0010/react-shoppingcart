import { createContext, useState } from 'react'
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
    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let tourInfo = TOURS.find((tour) => (tour.id === Number(item)));
                totalAmount += cartItems[item] * tourInfo.price;
            }
        }
        return totalAmount;
    }

    const contextValue = {cartItems, addToCart, removeFromCart, deleteFromCart, getTotalCartAmount};
    return (
        <TourContext.Provider value={contextValue}>{props.children}</TourContext.Provider>
    )
}
