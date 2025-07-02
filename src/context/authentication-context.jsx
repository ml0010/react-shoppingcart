import React, { createContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = (props) => {
    const [ user, setUser ] = useState({
                            name: "",
                            email: "",
                            telephone: "",
                            username: "",
                            booking: [],
                        });

    const [ token, setToken ] = useState(localStorage.getItem("site") || "");
    const [ loginFailed, setLoginFailed ] = useState(false);

    const isLoggedIn = user.username? true : false;

    const navigate = useNavigate();

    const addNewUser = async (input) => {
        let result = await fetch('https://react-shoppingcart-q31i.onrender.com/join', {
            method: "post",
            body: JSON.stringify({ name : input.name, email: input.email, telephone: input.telephone, username: input.username, password: input.password }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        result = await result.json();
        console.log('NEW USER ADDED');
        //console.log(result);
    }


    const checkUniqueUsername = async (input) => {
        try {
            const response = await fetch(`https://react-shoppingcart-q31i.onrender.com/check/username`, {
                method: "post",
                body: JSON.stringify({ username: input.username }),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const data = await response.json();
            //console.log(data);
            console.log('USERNAME ALREADY IN DB: ' + data.username);
            return false;
        }
        catch (err) {
            console.log('USERNAME NOT IN DB');
            return true;
            //console.log(err);
        }
    };

    const checkUniqueEmail = async (input) => {
        try {
            const response = await fetch(`https://react-shoppingcart-q31i.onrender.com/check/email`, {
                method: "post",
                body: JSON.stringify({ email: input.email }),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const data = await response.json();
            console.log('EMAIL ALREADY IN DB: ' + data.email);
            return false;
        }
        catch (err) {
            console.log('EMAIL NOT IN DB');
            return true;
            //console.log(err);
        }
    };

    const editEmail = async (username, newEmail) => {
        try {
            const response = await fetch(`https://react-shoppingcart-q31i.onrender.com/edit/email`, {
                method: "post",
                body: JSON.stringify({ username: username, email: newEmail }),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const data = await response.json();
            //console.log(data);
            await refreshUserInfo();
            console.log('EMAIL UPDATED');
        }
        catch (err) {
            console.log('EMAIL UPDATE FAILED');
            //console.log(err);
        }
    };
    const editPhone = async (username, newPhone) => {
        try {
            const response = await fetch(`https://react-shoppingcart-q31i.onrender.com/edit/telephone`, {
                method: "post",
                body: JSON.stringify({ username: username, telephone: newPhone }),
                headers: {
                    'Content-Type': 'application/json'
                }
            });            
            const data = await response.json();
            //console.log(data);
            await refreshUserInfo();
            console.log('TELEPHONE UPDATED');
         }
        catch (err) {
            console.log('TELEPHONE UPDATE FAILED');
            //console.log(err);
        }
    };
    const editPassword = async (username, newPassword) => {
        try {
            const response = await fetch(`https://react-shoppingcart-q31i.onrender.com/edit/password`, {
                method: "post",
                body: JSON.stringify({ username: username, password: newPassword }),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const data = await response.json();
            console.log('PASSWORD UPDATED');
        }
        catch (err) {
            console.log('PASSWORD UPDATE FAILED');
            //console.log(err);
        }
    };

    const checkPassword = async (username, password) => {
        try {
            const response = await fetch(`https://react-shoppingcart-q31i.onrender.com/check/password`, {
                method: "post",
                body: JSON.stringify({ username: username, password: password }),
                headers: {
                    'Content-Type': 'application/json'
                }
            });            
            const data = await response.json();
            if(data) {
                console.log(data);
                console.log('CURRENT PASSWORD MARCHES WITH USER INPUT');
                return true;
            } else {
                console.log('CURRENT PASSWORD INPUT NOT CORRECT');
                return false;
            }
        }
        catch (err) {
            console.log(err);
        }
    };

    const login = async (input) => {
        try {
            let result = await fetch('https://react-shoppingcart-q31i.onrender.com/login', {
                method: "post",
                body: JSON.stringify({ username: input.username, password: input.password }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const data = await result.json();
            setUser((prev) => ({...prev, name: data.name, email: data.email, telephone: data.telephone, username: data.username, booking: data.booking}));
            //setToken(response.token);
            //console.log(data);
            console.log('LOGIN SUCCESSFUL: ' + data.username);
            navigate('/mypage');
        } catch (err) {
            console.log(err);
            setLoginFailed(true);
            console.log('LOGIN FAILED');
        }
    }

    const logout = () => {
        setUser({ name: "", email: "", telephone: "", username: "", booking: [] });
        console.log('LOGOUT');
        navigate('/login');
    };

    const refreshUserInfo = async () => {
        try {
            const response = await fetch(`https://react-shoppingcart-q31i.onrender.com/refresh/${user.username}`, {mode:'cors'});
            const data = await response.json();
            if(data) {
                setUser((prev) => ({...prev, name: data.name, email: data.email, telephone: data.telephone, username: data.username, booking: data.booking}));
                //setToken(response.token);
                console.log('USER INFO REFRESHED');
                //console.log(data);
            }
        }
        catch (err) {
            console.log(err);
        }
    }

    const contextValue = { navigate, user, setUser, token, setToken, loginFailed, setLoginFailed, login, logout, addNewUser, isLoggedIn, refreshUserInfo, checkUniqueUsername, checkUniqueEmail, editEmail, editPhone, editPassword, checkPassword};

    return (
        <AuthenticationContext.Provider value={contextValue}>{props.children}</AuthenticationContext.Provider>
    )
}