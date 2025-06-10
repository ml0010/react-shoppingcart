import React, { createContext, useState } from 'react'

export const BookingContext =  createContext(null);

export const BookingContextProvider = (props) => {

    const [ searchFailed, setSearchFailed ] = useState(false); 

    const contextValue = {searchFailed, setSearchFailed };

    return (
        <BookingContext.Provider value={contextValue}>{props.children}</BookingContext.Provider>
    )
}
