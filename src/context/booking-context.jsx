import React, { createContext, useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthenticationContext } from './authentication-context';

export const BookingContext =  createContext(null);

export const BookingContextProvider = (props) => {

    const [ searchFailed, setSearchFailed ] = useState(false);
    const { isLoggedIn, refreshUserInfo } = useContext(AuthenticationContext);
    
    const navigate = useNavigate();

    const getBookingDetail = async (reference) => {
        //console.log("Getting booking information - " + reference);
        try {
            const response = await fetch(`http://localhost:4000/confirmation/${reference}`, {mode:'cors'});
            const data = await response.json();
            if(data === null) { 
                console.log("Booking reference not found");
                setSearchFailed(true);
                return null;
            } else {
                return data;
            }
        }
        catch (err) {
            console.log(err);
        }
    }

    const addBooking = async (username, reference, name, email, phone, comment, tours) => {
        let result = await fetch('http://localhost:4000/booking', {
            method: "post",
            body: JSON.stringify({ reference, name, email, phone, comment, tours }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        result = await result.json();
        localStorage.setItem("booking", JSON.stringify(result));

        if(username) {
            saveReferenceToAccount(username, reference);
        }
        console.log('BOOKING FORM SUBMITTED');
        //console.log(result);
    };
        
    const saveReferenceToAccount = async (username, reference) => {
        try {
            const response = await fetch(`http://localhost:4000/booking/${username}/add/${reference}`, {mode:'cors'});
            const data = await response.json();
            //console.log(data);
            refreshUserInfo();
            console.log("USER'S BOOKING REFERENCE SAVED");
        }
        catch (err) {
            console.log(err);
        }
    }

    const deleteBooking = async (reference) => {
        console.log("Delete booking record.")
        try {
            const response = await fetch(`http://localhost:4000/confirmation/${reference}/delete`, {mode:'cors'});
            console.log(response);
            refreshUserInfo();
            if(isLoggedIn) {
                navigate('/mypage');
            } else {
                navigate('/home');
            }
        }
        catch (err) {
            console.log(err);
        }
    }

    const updatePhone = async (reference, phone) => {
        //console.log("Phone number update.")
        try {
            const response = await fetch(`http://localhost:4000/confirmation/${reference}/editphone/${phone}`, {mode:'cors'});
            //console.log(response);
        }
        catch (err) {
            console.log(err);
        }
    }

    const updateComment = async (reference, comment) => {
        //console.log("Comment update.")
        try {
            const response = await fetch(`http://localhost:4000/confirmation/${reference}/editcomment/${comment}`, {mode:'cors'});
            //console.log(response);
        }
        catch (err) {
            console.log(err);
        }
    }

    const contextValue = { searchFailed, setSearchFailed, getBookingDetail, addBooking, deleteBooking, updatePhone, updateComment, navigate };

    return (
        <BookingContext.Provider value={contextValue}>{props.children}</BookingContext.Provider>
    )
}
