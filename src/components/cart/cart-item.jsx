import { useContext, useEffect, useRef, useState } from 'react'
import { MinusCircleIcon, PlusCircleIcon, XIcon } from '@phosphor-icons/react';
import { CartContext } from '../../contexts/cart-context';
import './cart-item.css'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import { LoadingIcon } from '../buttons/loading-icon';
import { Link } from 'react-router-dom';


export const CartItem = (props) => {
    const { id, tourName, img, price } = props.data;
    const { cartItems, deleteFromCart, changePax, changeDate } = useContext(CartContext);

    const [ isLoading, setIsLoading ] = useState(true);
    const [ isDateChange, setIsDateChange ] = useState(false);
    
    const paxMin = 1;
    const paxMax = 12;

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 400);
    }, [isLoading]);


    const tomorrow = dayjs().add(1, 'day');

    const subtotal = () => {
        //console.log(cartItems[id].pax * price);
        return cartItems[id].pax * price;
    };

    const handleDateChange = (date) => {
        changeDate(id, date);
        setIsDateChange(false);
        setIsLoading(true);
    };
    const handlePaxChange = (action) => {
        changePax(id, action, paxMin, paxMax);
        setIsLoading(true);
    };
    const handleDelete = () => {
        setIsLoading(true);
        setTimeout(() => deleteFromCart(id), 400);
    };

    let dateRef = useRef(null);

    useEffect(() => {
        let handler = (e)=>{
            if(dateRef.current && !dateRef.current.contains(e.target)){
                setIsDateChange(false);
            }
        };
        document.addEventListener("mousedown", handler);
        return() =>{
            document.removeEventListener("mousedown", handler);
        }
    }, [dateRef]);

    return (
        <div className='cart-item' key={id}>
            {isLoading && <LoadingIcon />}
            <Link className='tour-img' to={`/tour-detail/${id}`}>
                <img src={img[0]} alt={tourName} />
            </Link>
            <div className='tour-detail'>
                <button className='delete-button' onClick={handleDelete}><XIcon size={15} /></button>
                <p className='name'><b>{tourName}</b></p>
                <div className='detail'>
                    <div className='date' ref={dateRef}>
                        <span className='date-value' onClick={() => {setIsDateChange(!isDateChange)}}>{cartItems[id].date}</span>
                        <span className={`date-input ${isDateChange ? 'visible' : 'hidden'}`}>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DateCalendar minDate={tomorrow} onChange={(value) => handleDateChange(value.$d)} />
                            </LocalizationProvider>
                        </span>
                    </div>
                    <span className='pax'>
                        <MinusCircleIcon className={`icon ${cartItems[id].pax === paxMin && 'disabled'}`} size={15} onClick={() => handlePaxChange('minus')} />
                        <span className='pax-value'>{cartItems[id].pax}</span>
                        <PlusCircleIcon className={`icon ${cartItems[id].pax === paxMax && 'disabled'}`} size={15} onClick={() => handlePaxChange('plus')} />
                        {cartItems[id].pax > 1 ? ` people ` : ` person `}
                        ({price}€ per person)
                    </span>
                </div>                
                <hr className='separator'/>
                <p className='subtotal'>{subtotal()} €</p>
            </div>
        </div>
    )
}
