import React, { useState, useContext } from 'react'
import { TourContext } from '../context/tour-context';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';


export const TourInfo = ({props, showTourInfo, closeTourInfo}) => {

  const {id, tourName, img, description, duration, languages, meetingPoint, price} = props.data;
  
  const {cartItems, addToCart, removeFromCart} = useContext(TourContext);

  const [pax, setPax] = useState(1);
  const [dateValue, setDateValue] = useState(null);

  const addTourToCart = () => {
    addToCart(id, pax, dateValue);
    setPax(1);
    setDateValue(null);
    closeTourInfo();
  }

  if (!showTourInfo) {return null}
  return (
    <div className='tourInfo'>

      <div className='tourInfoHandler'>
        <h1>{tourName}</h1>
        <p>{description}</p>
        <p>{meetingPoint}</p>
      </div>

      <div className='countHandler'>
        <p>Number of People: </p>
        <div><button onClick={()=>setPax(pax-1)}> - </button>  {pax}  <button onClick={()=>setPax(pax+1)}> + </button></div>
        
      </div>

      <div className='dateHandler'>
        <p>Date: </p>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker label='Click to select' slotProps={{ textField: { size: 'small' } }} format="DD-MM-YYYY" value={dateValue} onChange={(newDateValue) => setDateValue(newDateValue)} />
        </LocalizationProvider>
      </div>

      <div className='bttns'>
        <button onClick={closeTourInfo}>Close</button>
        <button onClick={addTourToCart}>Add To Cart</button>
      </div>

    </div>
  )
}
