import { createContext, useEffect, useState } from "react";

export const PopupContext =  createContext(null);

export const PopupContextProvider = (props) => {

    const [ isMessageActive, setIsMessageActive ] = useState(false);
    const [ text, setText ] = useState('');
    const [ type, setType ] = useState('');

    const showPopupMessage = (text, type) => {
        setText(text);
        setType(type);
        setIsMessageActive(true);
    };

    useEffect(() => {
        setTimeout(() => {
            if (isMessageActive) {
                setIsMessageActive(false);
                setText('');
                setType('');
            }
        }, 10000);
    }, [isMessageActive]);

    const contextValue = { isMessageActive, setIsMessageActive, text, type, showPopupMessage };

    return (
        <PopupContext.Provider value={contextValue}>{props.children}</PopupContext.Provider>
    )
}
