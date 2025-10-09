import './faq.css';
import { useState } from 'react'
import { Services } from '../services/services';
import { RefundPolicy } from '../refund-policy/refund-policy';
import { CaretDownIcon, CaretRightIcon, WhatsappLogoIcon } from '@phosphor-icons/react';
import { Link } from 'react-router-dom';
import { BookingConditions } from '../conditions/conditions';

export const Faq = () => {

    const [ showServices, setShowServices ] = useState(false);
    const [ showBookingConditions, setShowBookingConditions ] = useState(false);
    const [ showRefundPolicy, setShowRefundPolicy ] = useState(false);
    const [ showContactInfo, setShowContactInfo ] = useState(false);

    return (
        <div className='faq'>
            <div className='faq-list'>
                <span className='question' onClick={()=>setShowServices(!showServices)}>
                    {showServices? <CaretDownIcon size={12} weight="fill" /> : <CaretRightIcon size={12} weight="fill" />}
                    <p>ALL OUR TOURS INCLUDE</p>
                </span>
                <span className={`answer ${showServices && 'active'}`}>
                    <Services />
                </span>
            </div>
            <div className='faq-list'>
                <span className='question' onClick={()=>setShowBookingConditions(!showBookingConditions)}>
                    {showBookingConditions? <CaretDownIcon size={12} weight="fill" /> : <CaretRightIcon size={12} weight="fill" />}
                    <p>BOOKING CONDITIONS</p>
                </span>
                <span className={`answer ${showBookingConditions && 'active'}`}>
                    <BookingConditions />
                </span>
            </div>
            <div className='faq-list'>
                <span className='question' onClick={()=>setShowRefundPolicy(!showRefundPolicy)}>
                    {showRefundPolicy? <CaretDownIcon size={12} weight="fill" /> : <CaretRightIcon size={12} weight="fill" />}
                    <p>REFUND POLICY</p>
                </span>
                <span className={`answer ${showRefundPolicy && 'active'}`}>
                    <RefundPolicy />
                </span>
            </div>
            <div className='faq-list'>
                <span className='question' onClick={()=>setShowContactInfo(!showContactInfo)}>
                    {showContactInfo? <CaretDownIcon size={12} weight="fill" /> : <CaretRightIcon size={12} weight="fill" />}
                    <p>NEED TO SPEAK TO US?</p>
                </span>
                <span className={`contact-info answer ${showContactInfo && 'active'}`}>
                    <p>Please click Whatsapp button below to chat with us.</p>
                    <a className='whattsappIcon' href='https://wa.me/0034666000000' target='_blank' rel='noreferrer'>
                        <WhatsappLogoIcon size={50} />
                    </a>
                    <p>You can also contact us via <Link to='/contact'>CONTACT US</Link> page.</p>
                </span>
            </div>
        </div>
    )
}

