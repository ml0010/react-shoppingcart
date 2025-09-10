import React, { createContext, useState } from 'react'
import { TOURS } from '../tourlist';

export const CartContext =  createContext(null);


export const CartContextProvider = (props) => {

    const [ showCartSummary, setShowCartSummary ] = useState(false);
    const [ isButtonActive, setIsButtonActive ] = useState(true);

    const paxMin = 1;
    const paxMax = 12;
    const defaultValue = {pax: 0, date: null};

    const cartDefault = () => {
        let cart = {};
        TOURS.map((tour) => {
            return cart[tour.id] = defaultValue;
        })
        return cart;
    }

    const [cartItems, setCartItems] = useState(cartDefault());

    const addToCart = (tourId, paxValue, dateValue) => {
        setCartItems((prev) => ({...prev, [tourId]: {pax: paxValue, date: dateValue}}));
    }    
    /*
    const removeFromCart = (tourId) => {
        setCartItems((prev) => ({...prev, [tourId]: cartItems[tourId] - 1}));
    }*/
    const deleteFromCart = (tourId) => {
        setCartItems((prev) => ({...prev, [tourId]: defaultValue}));
    }

    const changePax = (tourId, operation) => {
        var newPax = cartItems[tourId].pax;
        if(operation === 'plus') {
            newPax += 1;
            if (newPax > 12) {
                return;
            }
        } else if(operation === 'minus') {
            newPax -= 1;
            if (newPax < 1) {
                setCartItems((prev) => ({...prev, [tourId]: defaultValue }));
                return;
            }
        } else {
            return;
        }
        setCartItems((prev) => ({...prev, [tourId]: {pax: newPax, date: cartItems[tourId].date} }));
    };

    const changeDate = (tourId, date) => {
        var newDate = date.toLocaleDateString("fr-CA", {year:"numeric", month: "2-digit", day:"2-digit"});
        setCartItems((prev) => ({...prev, [tourId]: {pax: cartItems[tourId].pax, date: newDate} }));

    };

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item].pax > 0) {
                let tourInfo = TOURS.find((tour) => (tour.id === Number(item)));
                totalAmount += cartItems[item].pax * tourInfo.price;
            }
        }
        return totalAmount;
    };

    const getCartItemNumber = () => {
        let count = 0;
        for (const item in cartItems) {
            if (cartItems[item].pax > 0) {
                count++;
            }
        }
        return count;
    };

    /*
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
    
*/
    const contextValue = {cartItems, setCartItems, addToCart, deleteFromCart, getTotalCartAmount, getCartItemNumber, showCartSummary, setShowCartSummary, isButtonActive, paxMin, paxMax, setIsButtonActive, changePax, changeDate };

    return (
        <CartContext.Provider value={contextValue}>{props.children}</CartContext.Provider>
    )
}
