import { createContext, useState } from 'react'
import { TOURS } from '../tours'

export const TourContext =  createContext(null);

const getCartDefault = () => {
    let cart = {};
    TOURS.map((tour) => {
        cart[tour.id] = {pax: 0, date: null};
    })
    return cart;
}

export const TourContextProvider = (props) => {

    const [cartItems, setCartItems] = useState(getCartDefault());

    const addToCart = (tourId, paxValue, dateValue) => {
        setCartItems((prev) => ({...prev, [tourId]: {pax: paxValue, date: dateValue}}));
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
            if (cartItems[item].pax > 0) {
                let tourInfo = TOURS.find((tour) => (tour.id === Number(item)));
                totalAmount += cartItems[item].pax * tourInfo.price;
                console.log("Total pax: " + cartItems[item].pax);
            }
        }
        return totalAmount;
    }

    const contextValue = {cartItems, addToCart, removeFromCart, deleteFromCart, getTotalCartAmount};
    return (
        <TourContext.Provider value={contextValue}>{props.children}</TourContext.Provider>
    )
}
