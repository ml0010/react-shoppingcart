import { createContext, useEffect, useState } from 'react'
import { TOURS } from '../tourlist';

export const CartContext =  createContext(null);

export const CartContextProvider = (props) => {

    const [ showCartSummary, setShowCartSummary ] = useState(false);
    const [ isGuestInfoCompleted, setIsGuestInfoCompleted ] = useState(false);
    const [ isCartSummaryTimerSet, setIsCartSummaryTimerSet ] = useState(false);

    const defaultValue = {pax: 0, date: null};

    const cartDefault = () => {
        let cart = {};
        TOURS.map((tour) => {
            return cart[tour.id] = defaultValue;
        })
        return cart;
    }
    const [cartItems, setCartItems] = useState(cartDefault);

    useEffect(() => {
        setTimeout(() => {
            if(isCartSummaryTimerSet === true) {
                setShowCartSummary(false);
                setIsCartSummaryTimerSet(false);
            }
        }, 10000);
    }, [isCartSummaryTimerSet]);

    const addToCart = (tourId, paxValue, dateValue) => {
        setCartItems((prev) => ({...prev, [tourId]: {pax: paxValue, date: dateValue}}));
        setIsCartSummaryTimerSet(true);
    }    
    /*
    const removeFromCart = (tourId) => {
        setCartItems((prev) => ({...prev, [tourId]: cartItems[tourId] - 1}));
    }*/
    const deleteFromCart = (tourId) => {
        setCartItems((prev) => ({...prev, [tourId]: defaultValue}));
    }

    const changePax = (tourId, operation, paxMin, paxMax) => {
        var newPax = cartItems[tourId].pax;

        if(operation === 'plus') {
            newPax += 1;
        } else if(operation === 'minus') {
            newPax -= 1;
        } else {
            return;
        }

        if (newPax <= paxMax) {
            setCartItems((prev) => ({...prev, [tourId]: {pax: newPax, date: cartItems[tourId].date} }));
        } else if (newPax < paxMin) {
            setCartItems((prev) => ({...prev, [tourId]: defaultValue }));
        }
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


    
    const contextValue = {cartItems, setCartItems, addToCart, deleteFromCart, getTotalCartAmount, getCartItemNumber, showCartSummary, setShowCartSummary, changePax, changeDate, isGuestInfoCompleted, setIsGuestInfoCompleted, getCartList, cartDefault };

    return (
        <CartContext.Provider value={contextValue}>{props.children}</CartContext.Provider>
    )
}
