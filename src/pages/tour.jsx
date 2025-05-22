import React, { useContext } from 'react'
import { ClockIcon, GlobeSimpleIcon, MapPinLineIcon, PiggyBankIcon } from '@phosphor-icons/react'
import { TourContext } from '../context/tour-context';

export const Tour = (props) => {
    const {id, tourName, img, description, duration, languages, meetingPoint, price} = props.data;
    const {addToCart, cartItems} = useContext(TourContext);

    return (
        <div className='tour'>
            <div className='tourName'>
                <p><b>{tourName}</b></p>
                <img src={img} alt={tourName} />                
                <p className='description'>{description}</p>
            </div>
            <div className='tourInfo'>
                <p><ClockIcon size={20} /> Duration {duration} hours</p>
                <p><GlobeSimpleIcon size={20} />{languages}</p>
                <p><MapPinLineIcon size={20} />Tour starts in {meetingPoint}</p>
                <p><PiggyBankIcon size={20} />{price}€ per person</p>
            </div>
            <button className='selectBttn' onClick={()=>addToCart(id)}>Select Tour</button>
        </div>
    )
}
