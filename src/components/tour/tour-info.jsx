import './tour-info.css';
import { useState, useContext, useEffect, useRef } from 'react'
import { CartContext } from '../../contexts/cart-context';
import { ArrowUpRightIcon, BasketIcon, CaretDownIcon, CaretUpIcon, ClockIcon, CopySimpleIcon, GlobeIcon, MapPinLineIcon, MapTrifoldIcon, MinusCircleIcon, PiggyBankIcon, PlusCircleIcon, XIcon } from '@phosphor-icons/react';
import { Carousel } from './carousel';
import { useNavigate } from 'react-router-dom';
import { GobackButton } from '../buttons/goback-button';
import { MotionRoute } from '../motions';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import dayjs from 'dayjs';
import { TourRecommendation } from './tour-recommendation';
import { Faq } from '../faq/faq';
import axios from 'axios';
import { PopupContext } from '../../contexts/popup-context';

export const TourInfo = ({ data }) => {
    
    const [ mapSrc, setMapSrc ] = useState(null);
    const [ isMapVisible, setIsMapVisible ] = useState(false);

    const searchLocation = async (location) => {
        try {
            const response = await axios.get(`https://geocoding-api.open-meteo.com/v1/search?name=${location}`);
            if (response.status === 200) {
                //console.log(response.data.results[0]);
                const location = response.data.results[0];
                setMapSrc(`https://maps.google.com/maps?q=${location.latitude},${location.longitude}&t=&z=14&ie=UTF8&iwloc=B`);
            }
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        searchLocation(data.meetingPoint);
    }, []);

	const getLanguages = () => {
		const languageList = data.languages.map((language, index) => {return `${index !== 0 ? `, ` : ``}` + language});
		return languageList;
	}

    let mapRef = useRef(null);

    useEffect(() => {
        let handler = (e)=>{
            if(mapRef.current && !mapRef.current.contains(e.target)){
                setIsMapVisible(false);
            }
        };
        document.addEventListener("mousedown", handler);
        return() =>{
            document.removeEventListener("mousedown", handler);
        }
    }, [mapRef]);

    useEffect(() => {
        document.body.style.overflow = isMapVisible ? 'hidden' : 'unset';
    }, [isMapVisible]);

    const copyToClip = async () => {
        await navigator.clipboard.writeText(window.location.href);
    };

	return (
        <MotionRoute>
            <div className='tour-info-page' key={data.id}>
                <GobackButton />
                <div className='tour-wrapper'>
                    <h1 className='tour-title'>{data.tourName}<CopySimpleIcon size={20} onClick={copyToClip} /></h1>
                    <div className='tourImages flex m-auto p-8'>
                        <Carousel images={data.img} thumbnails={true}/>
                    </div>

                    <div className='page-devider'>
                        <div className='left'>
                            <p className='description'>{data.description}</p>
                            <hr className='separator' />
                            <div className='info-wrapper'>
                                <h2>About this activity</h2>
                                <div>
                                    <span className='info-list'>
                                        <ClockIcon size={25} />
                                        <span className='text'>
                                            <h3>Duration {data.duration} hours</h3>                                
                                            <p>Check availability to see starting times</p>
                                        </span>
                                    </span>
                                    <span className='info-list'>
                                        <GlobeIcon size={25} />
                                        <span className='text'>
                                            <h3>Language</h3>
                                            <p className='language-list'>{getLanguages()}</p>
                                        </span>
                                    </span>
                                    <span className='info-list'>
                                        <MapPinLineIcon size={25} />
                                            <span className='text'>
                                                <h3>Meeting Point</h3>
                                                <p className='meeting-point' onClick={() => setIsMapVisible(!isMapVisible)}>{data.meetingPoint} <MapTrifoldIcon size={15} /></p>
                                                {mapSrc &&
                                                <div className={`map-wrapper ${isMapVisible ? 'visible' : 'hidden'}`}>
                                                    <div ref={mapRef} className='map'>
                                                        <XIcon className='close-button' onClick={() => setIsMapVisible(!isMapVisible)} size={15} />
                                                        <h3>Meeting Point: {data.meetingPoint}</h3>
                                                        <a className='link' href={mapSrc} target="_blank" rel="noopener noreferrer">Open in Google Map <ArrowUpRightIcon size={15} /></a>
                                                        <iframe src={mapSrc + '&output=embed'} />
                                                    </div>
                                                </div>
                                                }
                                            </span>
                                    </span>
                                    <span className='info-list'>
                                        <PiggyBankIcon size={25} />
                                        <span className='text'>
                                            <h3>Price</h3>
                                            <p>{data.price} € per person</p>
                                        </span>
                                    </span>
                                </div>
                                <hr className='separator' />
                                <h2>Highlights</h2>
                                {data.highlights.map((text) => {
                                    return <p>{text}</p>
                                })}
                                <h2>Includes</h2>
                                {data.includes.map((text) => {
                                    return <p>{text}</p>
                                })}
                                <h2>Not suitable for</h2>
                                <h2>Important information</h2>
                            </div>
                        </div>
                        <div className='right'>
                            <TourForm id={data.id}/>
                        </div>
                    </div>
                </div>
                <TourRecommendation />
                <Faq />
            </div>
        </MotionRoute>
	)
}

const TourForm = ({ id }) => {

    const tomorrow = dayjs().add(1, 'day');
    const dateToText = (date) => {
        return date.toLocaleDateString("fr-CA", {year:"numeric", month: "2-digit", day:"2-digit"});
    };

    const { addToCart, setShowCartSummary } = useContext(CartContext);
    const { showPopupMessage } = useContext(PopupContext);

    const paxMin = 1;
    const paxMax = 12;
    
	const [ pax, setPax ] = useState(1);
	const [ dateValue, setDateValue ] = useState(dateToText(tomorrow.$d));
    const [ isPaxVisible, setIsPaxVisible ] = useState(false);
    const [ isDateVisible, setIsDateVisible ] = useState(false);

    const handleClose = () => {
		setPax(1);
		setDateValue(dateToText(tomorrow.$d));
		//navigate(-1);
	}

    const handlePax = (input) => {
        if(input >= paxMin && input <= paxMax) {
            return setPax(input);
        }
        return;
    };
    const handleDate = (input) => {
        //.toISOString().replace('000Z', '').split('T')[0]
        setDateValue(dateToText(input));
        setIsDateVisible(false);
        return;
    };

	const handleAddToCart = async() => {
		if(dateValue !== null) {
			await addToCart(id, pax, dateValue);
			setShowCartSummary(true);
			handleClose();
            showPopupMessage('Added to basket', 'positive');
		}
	}

    // tour-info outside click close
    let paxRef = useRef(null);
    let dateRef = useRef(null);

    useEffect(() => {
        let handler = (e)=>{
            if(paxRef.current && !paxRef.current.contains(e.target)){
                setIsPaxVisible(false);
            }
        };
        document.addEventListener("mousedown", handler);
        return() =>{
            document.removeEventListener("mousedown", handler);
        }
    }, [paxRef]);

    useEffect(() => {
        let handler = (e)=>{
            if(dateRef.current && !dateRef.current.contains(e.target)){
                setIsDateVisible(false);
            }
        };
        document.addEventListener("mousedown", handler);
        return() =>{
            document.removeEventListener("mousedown", handler);
        }
    }, [dateRef]);

    return (
        <div className='guest-info'>
            <h3>Select participants and date</h3>
            <div className='guest-form-wrapper'>
                <div className='guest-form'>
                    <div className='form' ref={paxRef}>
                        <div className='label' onClick={() => setIsPaxVisible(!isPaxVisible)}>
                            <p>Adult x {pax}</p>
                            {isPaxVisible ? <CaretUpIcon className='caret' size={15} weight="fill" /> : <CaretDownIcon className='caret' size={15} weight="fill" />}
                        </div>
                        <span className={`input ${isPaxVisible ? 'visible' : 'hidden'}`}>
                            <div className='input-wrapper'>
                                <h5>Adult</h5>
                                <div className='pax-input'>
                                    <button onClick={()=>handlePax(pax-1)}><MinusCircleIcon size={15} /></button>
                                    <input className='pax' type='number' min={paxMin} max={paxMax} value={pax} onChange={(e)=> handlePax(Number(e.target.value))}></input>
                                    <button onClick={()=>handlePax(pax+1)}><PlusCircleIcon size={15} /></button>
                                </div>
                            </div>
                        </span>
                    </div>
                    <div className='form' ref={dateRef}>
                        <div className='label' onClick={() => setIsDateVisible(!isDateVisible)}>
                            <p>{dateValue}</p>
                            {isDateVisible ? <CaretUpIcon className='caret' size={15} weight="fill" /> : <CaretDownIcon className='caret' size={15} weight="fill" />}
                        </div>
                        <span className={`input ${isDateVisible ? 'visible' : 'hidden'}`}>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DateCalendar minDate={tomorrow} onChange={(value) => handleDate(value.$d)} />
                            </LocalizationProvider>
                        </span>
                    </div>
                </div>
                <div className='button-wrapper'>
                    <button className='button highlight' onClick={handleAddToCart}>
                        ADD TO BASKET <BasketIcon size={15} />
                    </button>
                </div>
            </div>
        </div>
    );
};

/*

    const [ currentPhotoIndex, setCurrentPhotoIndex ] = useState(0);
    const [ fade, setFade ] = useState(false);


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


            <div>
                <div className='tourPhotoHandler'>
                    <button onClick={handlePreviusPhotoIndex}><CaretCircleLeftIcon size={35} weight="fill" /></button>
                    <img className={`photo ${fade? 'fade' : 'fade-out'}`} src={img[`${currentPhotoIndex}`]} alt={tourName} />
                    <button onClick={handleNextPhotoIndex}><CaretCircleRightIcon size={35} weight="fill" /></button>
                </div>
                <div className='dotContainer'>
                    {createDots()}
                </div>
            </div>



.tourInfo .tourPhotoHandler {
    display: flex;
    align-items: center;
    justify-content: center;
}
.tourPhotoHandler .photo {
    padding: 10px;
    max-width: 80%;
}

.tourPhotoHandler .fade {
    opacity: 0.5;
}
.tourPhotoHandler .fade-out {
    opacity: 1;
    transition: opacity 0.7s ease-in-out;
}

.tourPhotoHandler button {
    border: none;
    background-color: transparent;
    color: var(--grey);
    cursor: pointer;
}
.tourPhotoHandler button:hover {
    color: var(--light);
    transition: color 0.3s;
}
.dotContainer {
    padding: 10px;
    display: flex;
    justify-content: center;
}
.dot {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    border: 1.5px solid var(--dark);
    margin: 2px;
    cursor: pointer;
}
.dot.avtive{
    background-color: var(--dark);
}
            
*/