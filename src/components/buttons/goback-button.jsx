import './goback-button.css'
import { useNavigate } from 'react-router-dom'
import { ArrowCounterClockwiseIcon } from '@phosphor-icons/react';

export const GobackButton = () => {

    const navigate = useNavigate();

    return (
        <div className='button-wrapper'>
            <button className='goBack-button' onClick={()=>navigate(-1)}><ArrowCounterClockwiseIcon size={17} />GO BACK</button>
        </div>
    )
}
