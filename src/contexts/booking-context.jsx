import { createContext, useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthenticationContext } from './authentication-context';
import { PopupContext } from './popup-context';

export const BookingContext =  createContext(null);

export const BookingContextProvider = (props) => {

    const { isLoggedIn, refreshUserInfo } = useContext(AuthenticationContext);
    const { showPopupMessage } = useContext(PopupContext);
   
    const [ searchFailed, setSearchFailed ] = useState(false);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [comment, setComment] = useState("");

 
    const navigate = useNavigate();

    const resetBookingInfo = () => {
        setName("");
        setEmail("");
        setPhone("");
        setComment("");
    };

    const checkBookingReference= async (reference) => {
        try {
            const response = await fetch(`https://react-shoppingcart-q31i.onrender.com/check/reference`, {
                method: "post",
                body: JSON.stringify({ reference: reference }),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const data = await response.json();
            //console.log(data);
            return true;
        }
        catch (err) {
            //console.log(err);
            showPopupMessage('Incorrect booking reference', 'negative');
            setSearchFailed(true);
            return false;
        }
    };
    const getBookingDetail = async (reference) => {
        //console.log("Getting booking information - " + reference);
        try {
            const response = await fetch(`https://react-shoppingcart-q31i.onrender.com/confirmation/${reference}`, {mode:'cors'});
            const data = await response.json();
            if(data === null) { 
                console.log("Booking reference not found");
                return null;
            } else {
                return data;
            }
        }
        catch (err) {
            console.log(err);
        }
    }

    const addBooking = async (username, reference, name, email, phone, comment, tours, payment) => {
        let result = await fetch('https://react-shoppingcart-q31i.onrender.com/booking', {
            method: "post",
            body: JSON.stringify({ reference, name, email, phone, comment, tours, payment }),
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
            const response = await fetch(`https://react-shoppingcart-q31i.onrender.com/booking/${username}/add/${reference}`, {mode:'cors'});
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
            const response = await fetch(`https://react-shoppingcart-q31i.onrender.com/confirmation/${reference}/delete`, {mode:'cors'});
            //console.log(response);
            refreshUserInfo();
            showPopupMessage(`Booking Canceled - ${reference}`, 'negative');
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
            const response = await fetch(`https://react-shoppingcart-q31i.onrender.com/confirmation/${reference}/editphone/${phone}`, {mode:'cors'});
            //console.log(response);
        }
        catch (err) {
            console.log(err);
        }
    }

    const updateComment = async (reference, comment) => {
        //console.log("Comment update.")
        try {
            const response = await fetch(`https://react-shoppingcart-q31i.onrender.com/confirmation/${reference}/editcomment/${comment}`, {mode:'cors'});
            //console.log(response);
        }
        catch (err) {
            console.log(err);
        }
    }

    const contextValue = { searchFailed, setSearchFailed, checkBookingReference, getBookingDetail, addBooking, deleteBooking, updatePhone, updateComment, navigate, name, setName, email, setEmail, phone, setPhone, comment, setComment, resetBookingInfo};

    return (
        <BookingContext.Provider value={contextValue}>{props.children}</BookingContext.Provider>
    )
}
