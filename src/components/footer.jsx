import React from 'react'
import '../styles/footer.css'
import { XLogoIcon, InstagramLogoIcon, FacebookLogoIcon, WhatsappLogoIcon } from '@phosphor-icons/react'
import { Link } from 'react-router-dom'

export const Footer = () => {
    return (
        <div className="footer">
            <div className='footerContent'>
                <div className='footerLinks'>
                    <Link to='/home'>ABOUT US</Link>
                    <Link to='/tours'>TOURS</Link>
                    <Link to='/contact'>CONTACT</Link>
                </div>
                <div className="socialMedia">
                    <InstagramLogoIcon size={28} />
                    <FacebookLogoIcon size={28} />
                    <XLogoIcon size={28} />
                </div>
                <div className='contactDetails'>
                    <a href='https://wa.me/0034666000000' target='_blank' rel='noreferrer'>
                        <WhatsappLogoIcon size={50} />
                        <p className='phone'>+(34) 666-000-000</p>
                    </a>
                    <a className='email' href='mailto:contact@exploremallorca.com'>contact@exploremallorca.com</a>
                </div>
            </div>
            <p>&copy; COPYRIGHT 2025 EXPLORE MALLORCA</p>
        </div>
    )
}
