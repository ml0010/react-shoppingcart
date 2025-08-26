import { createContext, useState } from 'react'


export const TourContext =  createContext(null);


export const TourContextProvider = (props) => {

     return (
        <TourContext.Provider >{props.children}</TourContext.Provider>
    )
}
