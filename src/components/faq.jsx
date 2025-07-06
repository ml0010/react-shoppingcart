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
                <div className={`answer ${showServices? 'active' : 'hidden'} `}>
                    <Services></Services>
                </div>
            </div>
            <div>
                <div className='questions' onClick={()=>setShowRefundPolicy(!showRefundPolicy)}>
                    {showRefundPolicy? <CaretDownIcon size={15} /> : <CaretRightIcon size={15} />}
                    <p className='question'>REFUND POLICY</p>
                </div>
                <div className={`answer ${showRefundPolicy? 'active' : 'hidden'} `}><RefundPolicy></RefundPolicy></div>
            </div>
            <div>
                <div className='questions' onClick={()=>setShowContactInfo(!showContactInfo)}>
                    {showContactInfo? <CaretDownIcon size={15} /> : <CaretRightIcon size={15} />}
                    <p className='question'>NEED TO SPEAK TO US?</p>
                </div>
                <div className={`contactInfo answer ${showContactInfo? 'active' : 'hidden'} `}>
                    <p>Please click Whatsapp button below to chat with us.</p>
                    <a className='whattsappIcon' href='https://wa.me/0034666000000' target='_blank' rel='noreferrer'>
                        <WhatsappLogoIcon size={50} />
                    </a>
                    <p>You can also contact us via <Link to='/contact'>CONTACT US</Link> page.</p>
                </div>
            </div>
        </div>
    )
}
