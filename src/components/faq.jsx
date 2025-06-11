import React, { useState } from 'react'
import { Services } from '../components/services';
import { RefundPolicy } from './refund-policy';
import { CaretDownIcon, CaretRightIcon, WhatsappLogoIcon } from '@phosphor-icons/react';
import '../styles/faq.css';
import { Link } from 'react-router-dom';

export const Faq = () => {

    const [ showServices, setShowServices ] = useState(false);
    const [ showRefundPolicy, setShowRefundPolicy ] = useState(false);
    const [ showContactInfo, setShowContactInfo ] = useState(false);

    return (
        <div className='faq'>
            <div>
                <div className='questions' onClick={()=>setShowServices(!showServices)}>
                    {showServices? <CaretDownIcon size={15} /> : <CaretRightIcon size={15} />}
                    <p className='question'>ALL OUR TOURS INCLUDE</p>
                </div>
                {showServices? <Services></Services> : <></>}
            </div>
            <div>
                <div className='questions' onClick={()=>setShowRefundPolicy(!showRefundPolicy)}>
                    {showRefundPolicy? <CaretDownIcon size={15} /> : <CaretRightIcon size={15} />}
                    <p className='question'>REFUND POLICY</p>
                </div>
                {showRefundPolicy? <RefundPolicy></RefundPolicy> : <></>}
            </div>
            <div>
                <div className='questions' onClick={()=>setShowContactInfo(!showContactInfo)}>
                    {showContactInfo? <CaretDownIcon size={15} /> : <CaretRightIcon size={15} />}
                    <p className='question'>NEED TO SPEAK TO US?</p>
                </div>
                {showContactInfo? 
                <div className='contactInfo'>
                    <p>You can contact us via <Link to='/contact'>CONTACT US</Link> page.</p>
                    <p>Alternatively, Please click Whatssapp button below to chat with us.</p>
                    <a className='whattsappIcon' href='https://wa.me/0034666000000' target='_blank' rel='noreferrer'>
                        <WhatsappLogoIcon size={50} />
                    </a>
                </div> : <></>}
            </div>
        </div>
    )
}
