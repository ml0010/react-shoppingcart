import './tour-info.css';
import { useState, useContext, useEffect, useRef } from 'react'
import { CartContext } from '../../contexts/cart-context';
import { BasketIcon, CaretDownIcon, ClockIcon, GlobeIcon, MapPinLineIcon, MinusCircleIcon, PiggyBankIcon, PlusCircleIcon } from '@phosphor-icons/react';
import { Carousel } from './carousel';
import { useLocation, useNavigate } from 'react-router-dom';
import { GobackButton } from '../buttons/goback-button';
import { MotionRoute } from '../motions';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import dayjs from 'dayjs';

export const TourInfo = () => {
    const location = useLocation();

    const { data } = location.state; 

	const getLanguages = () => {
		const languageList = data.languages.map((language, index) => {return `${index !== 0 ? `, ` : ``}` + language});
		return languageList;
	}

	return (
        <MotionRoute>
            <div className='tour-info-page' key={data.id}>
                <GobackButton />
                <div className='tour-wrapper'>
                    <h1 className='tour-title'>{data.tourName}</h1>
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
                                            <p>{data.meetingPoint}</p>
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
                                <h2>Full description</h2>
                                <h2>Includes</h2>
                                <h2>Not suitable for</h2>
                                <h2>Meeting point</h2>
                                <h2>Important information</h2>
                            </div>
                        </div>
                        <div className='right'>
                            <TourForm id={data.id}/>
                        </div>
                    </div>
                </div>
            </div>
        </MotionRoute>
	)
}

const TourForm = ({ id }) => {

    const tomorrow = dayjs().add(1, 'day');

    const navigate = useNavigate();

    const { addToCart, setShowCartSummary } = useContext(CartContext);

	const [ pax, setPax ] = useState(1);
	const [ dateValue, setDateValue ] = useState(tomorrow.$d.toLocaleDateString("fr-CA", {year:"numeric", month: "2-digit", day:"2-digit"}));
    const [ isPaxVisible, setIsPaxVisible ] = useState(false);
    const [ isDateVisible, setIsDateVisible ] = useState(false);

    const paxMin = 1;
    const paxMax = 12;

    const handleClose = () => {
		setPax(1);
		setDateValue(null);
		navigate(-1);
	}

    const handlePax = (input) => {
        if(input >= paxMin && input <= paxMax) {
            return setPax(input);
        }
        return;
    };
    const handleDate = (input) => {
        //.toISOString().replace('000Z', '').split('T')[0]
        console.log(input);
        setDateValue(input.toLocaleDateString("fr-CA", {year:"numeric", month: "2-digit", day:"2-digit"}));
        setIsDateVisible(false);
        return;
    };

	const handleAddToCart = () => {
		if(dateValue !== null) {
			addToCart(id, pax, dateValue);
			setShowCartSummary(true);
			handleClose();
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
            <div className='form' ref={paxRef}>
                <div className='label' onClick={() => setIsPaxVisible(!isPaxVisible)}>
                    <p>Adult x {pax}</p>
                    <CaretDownIcon className='caret' size={18} weight="fill" />
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
                    <CaretDownIcon className='caret' size={18} weight="fill" />
                </div>

                <span className={`input ${isDateVisible ? 'visible' : 'hidden'}`}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DateCalendar minDate={tomorrow} onChange={(value) => handleDate(value.$d)} />
                    </LocalizationProvider>
                </span>
            </div>
            <div className='buttons'>
                <button className='button highlight' onClick={handleAddToCart}>
                    ADD TO BASKET <BasketIcon size={18} />
                </button>
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