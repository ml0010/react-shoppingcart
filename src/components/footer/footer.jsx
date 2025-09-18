import './footer.css'
import { XLogoIcon, InstagramLogoIcon, FacebookLogoIcon, WhatsappLogoIcon, CopySimpleIcon } from '@phosphor-icons/react'
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
                    <a href='https://www.instagram.com' target='_blank' rel='noreferrer'><InstagramLogoIcon size={23} /></a>
                    <a href='https://www.facebook.com' target='_blank' rel='noreferrer'><FacebookLogoIcon size={23} /></a>
                    <a href='https://x.com' target='_blank' rel='noreferrer'><XLogoIcon size={23} /></a>
                </div>
                <div className='contactDetails'>
                    <a className='phone' href='https://wa.me/0034666000000' target='_blank' rel='noreferrer'>
                        <WhatsappLogoIcon size={50} />
                        <p>+(34) 666-000-000</p>
                    </a>
                    <a className='email' href='mailto:contact@exploremallorca.com'>contact@exploremallorca.com</a>
                </div>
            </div>
            <p className='copyright'>&copy; COPYRIGHT 2025 EXPLORE MALLORCA</p>
        </div>
    )
}
