import { createContext, useState } from 'react'
import { TOURS } from '../tourlist'

export const TourContext =  createContext(null);

const getCartDefault = () => {
    let cart = {};
    TOURS.map((tour) => {
        return cart[tour.id] = {pax: 0, date: null};
    })
    return cart;
}

export const TourContextProvider = (props) => {

    const [cartItems, setCartItems] = useState(getCartDefault());

    const addToCart = (tourId, paxValue, dateValue) => {
        setCartItems((prev) => ({...prev, [tourId]: {pax: paxValue, date: dateValue}}));
        console.log(cartItems);
    }    
    /*
    const removeFromCart = (tourId) => {
        setCartItems((prev) => ({...prev, [tourId]: cartItems[tourId] - 1}));
    }*/
    const deleteFromCart = (tourId) => {
        setCartItems((prev) => ({...prev, [tourId]: cartItems[tourId] = 0}));
    }
    /*
    const updateCartItemCount = (newAmount, itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: newAmount}));
    }
    */
    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item].pax > 0) {
                let tourInfo = TOURS.find((tour) => (tour.id === Number(item)));
                totalAmount += cartItems[item].pax * tourInfo.price;
            }
        }
        return totalAmount;
    }

    const contextValue = {cartItems, addToCart, deleteFromCart, getTotalCartAmount};
    return (
        <TourContext.Provider value={contextValue}>{props.children}</TourContext.Provider>
    )
}
