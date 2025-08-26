import React, { createContext, useState } from 'react'
import { TOURS } from '../tourlist';

export const CartContext =  createContext(null);


export const CartContextProvider = (props) => {

    const [ showCartSummary, setShowCartSummary ] = useState(false);
    const [ isButtonActive, setIsButtonActive ] = useState(true);
    const getCartDefault = () => {
        let cart = {};
        TOURS.map((tour) => {
            return cart[tour.id] = {pax: 0, date: null};
        })
        return cart;
    }

    const [cartItems, setCartItems] = useState(getCartDefault());

    const addToCart = (tourId, paxValue, dateValue) => {
        setCartItems((prev) => ({...prev, [tourId]: {pax: paxValue, date: dateValue}}));
        //console.log(cartItems);
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

    const getCartList = () => {
        const cartItemList = [];
        TOURS.map((tour) => {
            if (cartItems[tour.id]["pax"] > 0) {
                return cartItemList.push({
                    "tourId": tour.id,
                    "tourName": tour.tourName,
                    "pax": cartItems[tour.id]["pax"],
                    "date": cartItems[tour.id]["date"]
                });
            } else { return null; }
        });
        return cartItemList;
    };

    const tours = getCartList();
    

    const contextValue = {cartItems, setCartItems, addToCart, deleteFromCart, getTotalCartAmount, getCartDefault, tours, showCartSummary, setShowCartSummary, isButtonActive, setIsButtonActive };

    return (
        <CartContext.Provider value={contextValue}>{props.children}</CartContext.Provider>
    )
}
