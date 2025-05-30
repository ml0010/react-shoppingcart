import React, { useState, useContext, useRef } from 'react'
import '../styles/tour-info.css';
import { TourContext } from '../context/tour-context';
import { CartContext } from '../context/cart-context';
import { AsteriskSimpleIcon, BasketIcon, BookOpenTextIcon, CaretCircleLeftIcon, CaretCircleRightIcon, ClockIcon, GlobeIcon, MapPinLineIcon, MinusCircleIcon, PiggyBankIcon, PlusCircleIcon, XSquareIcon } from '@phosphor-icons/react';

export const TourInfo = ({props, showTourInfo, closeTourInfo}) => {

	const { id, tourName, img, description, duration, languages, meetingPoint, price } = props.data;

	const { addToCart } = useContext(TourContext);
	const { setShowCartSummary } = useContext(CartContext);

	const [pax, setPax] = useState(1);
	const [dateValue, setDateValue] = useState(null);
    const [dateNullMsg, setDateNullMsg] = useState(null);
    const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

	const scrollRef = useRef(null);

    const paxMin = 1;
    const paxMax = 12;

    const handlePreviusPhotoIndex = () => {
        const newIndex = currentPhotoIndex - 1;
        if(newIndex < 0) {
            setCurrentPhotoIndex(img.length - 1);
        } else {
            setCurrentPhotoIndex(newIndex);
        }
    };
    const handleNextPhotoIndex = () => {
        const newIndex = currentPhotoIndex + 1;
        if(newIndex > img.length - 1) {
            setCurrentPhotoIndex(0);
        } else {
            setCurrentPhotoIndex(newIndex);
        }
    };

    const createDots = () => {
        const dots = img.map((item, index) => {
            return <span className={`dot ${currentPhotoIndex ===  index ? 'avtive' : 'inactive'}`} id={index}><AsteriskSimpleIcon size={16} weight="bold" /></span>
        });
        return dots;
    };

    const handleClose = () => {
		setPax(1);
		setDateValue(null);
		closeTourInfo();
	}

    const handlePax = (input) => {
        if(input >= paxMin && input <= paxMax) {
            return setPax(input);
        }
        return 1;
    };

	const handleAddToCart = () => {
		if(dateValue !== null) {
			addToCart(id, pax, dateValue);
			setShowCartSummary(true);
			handleClose();
		} else {
			setDateNullMsg('* PLEASE SELECT VALID DATE');
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
            <div className='tourPhotoHandler'>
                <button onClick={handlePreviusPhotoIndex}><CaretCircleLeftIcon size={35} /></button>
                <img className='photo' src={img[`${currentPhotoIndex}`]} alt={tourName} />
                <button onClick={handleNextPhotoIndex}><CaretCircleRightIcon size={35} /></button>
            </div>
            <div className='dotContainer'>
                {createDots()}
            </div>
            <hr className="separator" />
            <div className='tourInfoHandler'>
                <div>
                    <h2><BookOpenTextIcon size={20} /> Description</h2>
                    <p>{description}</p>
                </div>
                <div>
                    <h2><ClockIcon size={20} /> Duration</h2>                                
                    <p>{duration} hours</p>
                </div>
                <div>
                    <h2><GlobeIcon size={20} /> Language</h2>
                    <ul className='languageList'>{getLanguages()}</ul>
                </div>
                <div>
                    <h2><MapPinLineIcon size={20} /> Meeting Point</h2>
                    <p>{meetingPoint}</p>
                </div>
                <div>
                    <h2><PiggyBankIcon size={20} /> Price</h2>
                    <p>{price} € per person</p>
                </div>
            </div>
			<hr className="separator" />
            <div className='guestInfo'>
                <h3>Please select number of people and date</h3>
                <div className='countHandler'>
                    <span>				
                        <p className='label'>Number of People:</p>
                        <p className='labelDescription'>(maximum {paxMax} people)</p>
                    </span>
                    <span className='paxInput'>
                        <button onClick={()=>handlePax(pax-1)}><MinusCircleIcon size={15} /></button>
                        <input className='pax' type='number' min={paxMin} max={paxMax} value={pax} onChange={(e)=> handlePax(Number(e.target.value))}></input>
                        <button onClick={()=>handlePax(pax+1)}><PlusCircleIcon size={15} /></button>
                    </span>
                </div>
                <div className='dateHandler'>
                    <span>
                        <p className='label'>Date:</p>
                        <p className='dateWarning'>{dateNullMsg}</p>
                    </span>
                    <input type='date' min={new Date().toISOString().split('T')[0]} onChange={(e) => setDateValue(e.target.value)}></input>
                </div>
            </div>
            <div className='bttnHandler'>
                <button className='addToBasketBttn' onClick={handleAddToCart}>
                    ADD TO BASKET <BasketIcon size={20} />
                </button>
            </div>
    	</div>
	)
}


/*
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';


<LocalizationProvider dateAdapter={AdapterDayjs}>
<DatePicker slotProps={{ textField: { size: 'small' } }} format="DD-MM-YYYY" value={dateValue} onChange={(newDateValue) => setDateValue(newDateValue)} />
</LocalizationProvider>
*/