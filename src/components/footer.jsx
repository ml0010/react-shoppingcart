import React from 'react'
import '../styles/footer.css'
import { XLogoIcon, InstagramLogoIcon, FacebookLogoIcon, WhatsappLogoIcon } from '@phosphor-icons/react'
import { Link } from 'react-router-dom'

export const Footer = () => {
    return (
        <div className="footer">
            <div className='footerContent'>
                <div className='footerLinks'>
                    <Link>ABOUT US</Link>
                    <Link>TOURS</Link>
                    <Link>CONTACT</Link>
                </div>
                <div className="socialMedia">
                    <XLogoIcon size={28} />
                    <InstagramLogoIcon size={28} />
                    <FacebookLogoIcon size={28} />
                </div>
                <div className='contactDetails'>
                    <a href='https://wa.me/0034666000000' target='_blank' rel='noreferrer'><WhatsappLogoIcon size={40} /></a>
                    <p>contactus@exploremallorca.com</p>
                    <p>+(34) 666-000-000</p>
                </div>
            </div>
            <p>&copy; 2025 EXPLORE MALLORCA. All rights reserved.</p>
        </div>
    )
}
