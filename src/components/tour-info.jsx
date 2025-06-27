import React, { useState, useContext, useRef, useEffect } from 'react'
import '../styles/tour-info.css';
import { TourContext } from '../context/tour-context';
import { CartContext } from '../context/cart-context';
import { BasketIcon, BookOpenTextIcon, CaretCircleLeftIcon, CaretCircleRightIcon, ClockIcon, GlobeIcon, MapPinLineIcon, MinusCircleIcon, PiggyBankIcon, PlusCircleIcon, XIcon } from '@phosphor-icons/react';

export const TourInfo = ({props, showTourInfo, closeTourInfo}) => {

	const { id, tourName, img, description, duration, languages, meetingPoint, price } = props.data;

	const { addToCart } = useContext(TourContext);
	const { setShowCartSummary } = useContext(CartContext);

	const [ pax, setPax ] = useState(1);
	const [ dateValue, setDateValue ] = useState(null);
    const [ dateNullMsg, setDateNullMsg ] = useState(null);
    const [ currentPhotoIndex, setCurrentPhotoIndex ] = useState(0);
    const [ fade, setFade ] = useState(false);



    const paxMin = 1;
    const paxMax = 12;

    useEffect(()=>{
        fadeEffect();
    },[currentPhotoIndex]);

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
    const handleClickDots = (index) => {
        setCurrentPhotoIndex(Number(index));
    };

    const fadeEffect = () => {
        setFade(true);
        setTimeout(() => {
            setFade(false); 
        }, 300);
    };


    const createDots = () => {
        const dots = img.map((item, index) => {
            return <div className={`dot ${currentPhotoIndex ===  index ? 'avtive' : ''}`} id={index} key={index} onClick={(e)=>handleClickDots(e.target.id)}></div>
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
		const languageList = languages.map((language, index) => <li key={index}>{language}</li>);
		return languageList;
	}

    const closeRef = useRef(null);

    useEffect(() => {
        let handler = (e)=>{
            if(!closeRef.current.contains(e.target)){
                handleClose();
                console.log(closeRef.current);
            }
        };
        document.addEventListener("mousedown", handler);
        return() =>{
            document.removeEventListener("mousedown", handler);
        }
    });

	if (!showTourInfo) {return null;}
	
	return (
    	<div className='tourInfo' key={id} ref={closeRef}>
        	<div className='titleBar'>
                <h1 className='name'>{tourName}</h1>
                <button className='closeBttn' onClick={handleClose}><XIcon size={35} weight="bold" className='closeIcon'/></button>
      	    </div>
            <div className='tourPhotoHandler'>
                <button onClick={handlePreviusPhotoIndex}><CaretCircleLeftIcon size={35} weight="fill" /></button>
                <img className={`photo ${fade? 'fade' : 'fade-out'}`} src={img[`${currentPhotoIndex}`]} alt={tourName} />
                <button onClick={handleNextPhotoIndex}><CaretCircleRightIcon size={35} weight="fill" /></button>
            </div>
            <div className='dotContainer'>
                {createDots()}
            </div>
            <div className='tourInfoHandler'>
                <span>
                    <h3><BookOpenTextIcon size={20} /> Description</h3>
                    <p>{description}</p>
                </span>
                <span>
                    <h3><ClockIcon size={20} /> Duration</h3>                                
                    <p>{duration} hours</p>
                </span>
                <span>
                    <h3><GlobeIcon size={20} /> Language</h3>
                    <div className='languageList'>{getLanguages()}</div>
                </span>
                <span>
                    <h3><MapPinLineIcon size={20} /> Meeting Point</h3>
                    <p>{meetingPoint}</p>
                </span>
                <span>
                    <h3><PiggyBankIcon size={20} /> Price</h3>
                    <p>{price} € per person</p>
                </span>
            </div>
            <div className='guestInput'>
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
