import React, { useState, useContext, useRef } from 'react'
import '../styles/tour-info.css';
import { TourContext } from '../context/tour-context';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { CartContext } from '../context/cart-context';
import { BasketIcon, BookOpenTextIcon, ClockIcon, GlobeIcon, MapPinLineIcon, MinusCircleIcon, PiggyBankIcon, PlusCircleIcon, XSquareIcon } from '@phosphor-icons/react';


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
      <div className='titleBar'>
          <h1 className='name'>{tourName}</h1>
          <button className='closeBttn' onClick={handleClose}><XSquareIcon size={20} /></button>
      </div>
      <img className='photo' src={img} alt={tourName} />
      <hr class="separator" />
      <div className='tourInfoHandler'>
        <h2><BookOpenTextIcon size={20} /> Description</h2>
        <p>{description}</p>

        <h2><ClockIcon size={20} /> Duration</h2>
        <p>{duration} hours</p>

        <h2><GlobeIcon size={20} /> Language</h2>
        <ul className='languageList'>{getLanguages()}</ul>

        <h2><MapPinLineIcon size={20} /> Meeting Point</h2>
        <p>{meetingPoint}</p>

        <h2><PiggyBankIcon size={20} /> Price</h2>
        <p>{price} € per person</p>
      </div>
      <hr class="separator" />
      <div className='countHandler'>
        <p>Number of People:</p>
        <div>
          <button onClick={()=>setPax(pax-1)}><MinusCircleIcon size={15} /></button>
          <input className='pax' value={pax} onChange={(e)=> setPax(Number(e.target.value))}></input>
          <button onClick={()=>setPax(pax+1)}><PlusCircleIcon size={15} /></button>
        </div>
      </div>
      <div className='dateHandler'>
        <p>Date:</p>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker slotProps={{ textField: { size: 'small' } }} format="DD-MM-YYYY" value={dateValue} onChange={(newDateValue) => setDateValue(newDateValue)} />
        </LocalizationProvider>
      </div>
      <div className='bttnHandler'>
        <button class='addToBasketBttn' onClick={handleAddToCart}>
          ADD TO BASKET <BasketIcon size={20} />
        </button>
      </div>
    </div>
  )
}
