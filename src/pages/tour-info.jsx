import React, { useState, useContext, useRef } from 'react'
import '../styles/tour-info.css';
import { TourContext } from '../context/tour-context';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { CartContext } from '../context/cart-context';
import { BasketIcon } from '@phosphor-icons/react';


export const TourInfo = ({props, showTourInfo, closeTourInfo}) => {

  const { id, tourName, img, description, duration, languages, meetingPoint, price } = props.data;

  const { addToCart } = useContext(TourContext);
  const { setShowCartSummary } = useContext(CartContext);

  const [pax, setPax] = useState(1);
  const [dateValue, setDateValue] = useState(null);

  const scrollRef = useRef(null);

  /*
  const scrollToTop = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = 0;
    }
  };
*/

  const handleClose = () => {
    setPax(1);
    setDateValue(null);
    closeTourInfo();
  }

  const handleAddToCart = () => {
    if(dateValue !== null) {
      addToCart(id, pax, dateValue);
      setShowCartSummary(true);
      handleClose();
    } else {
      alert("Please select date");
    }
  }

  const getLanguages = () => {
    const languageList = languages.map((language) => <li>{language}</li>);
    return languageList;
  }

  if (!showTourInfo) {return null;}
  return (
    <div className='tourInfo' key={id} ref={scrollRef}>
      <div className='title'>
          <h1 className='tourName'>{tourName}</h1>
          <button className='closeBttn1' onClick={handleClose}>x</button>
      </div>
      <img src={img} alt={tourName} />
      <div className='tourInfoHandler'>
        <h2>Description</h2>
        <p>{description}</p>

        <h2>Duration</h2>
        <p>{duration} hours</p>

        <h2>Language</h2>
        <ul>{getLanguages()}</ul>

        <h2>Meeting Poing</h2>
        <p>{meetingPoint}</p>

        <h2>Price</h2>
        <p>{price}</p>
      </div>

      <div className='countHandler'>
        <p>Number of People: </p>
        <div><button onClick={()=>setPax(pax-1)}> - </button>  {pax}  <button onClick={()=>setPax(pax+1)}> + </button></div>
        
      </div>

      <div className='dateHandler'>
        <p>Date: </p>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker slotProps={{ textField: { size: 'small' } }} format="DD-MM-YYYY" value={dateValue} onChange={(newDateValue) => setDateValue(newDateValue)} />
        </LocalizationProvider>
      </div>
      <button class='addToBasketBttn' onClick={handleAddToCart}>ADD TO BASKET <BasketIcon size={22} /></button>
    </div>
  )
}
