import { CheckCircleIcon, WarningDiamondIcon, XIcon } from '@phosphor-icons/react';
import { useContext, useEffect, useRef } from 'react';
import { PopupContext } from '../../contexts/popup-context';
import './popup-message.css';

export const PopupMessage = () => {

    const { isMessageActive, setIsMessageActive, text, type } = useContext(PopupContext);
    
    const popupRef = useRef();

    useEffect(() => {
        if(isMessageActive) {
            let handler = (e)=>{
                if(!popupRef.current.contains(e.target)){
                    setIsMessageActive(false);
                }
            };
            document.addEventListener("mousedown", handler);
            return() =>{
                document.removeEventListener("mousedown", handler);
            }
        }
    });

    return (
        <div className={`popup-message ${isMessageActive ? 'active' : 'inactive'}`} ref={popupRef}>
            <span className='icon'>
                {type === 'positive' ? <CheckCircleIcon size={20} /> : <WarningDiamondIcon size={20} />}
            </span>
            <span className='text'>{text}</span>
            <span className='close-button' onClick={() => setIsMessageActive(false)}>
                <XIcon size={15} />
            </span>
        </div>
    )
}
export default PopupMessage;
