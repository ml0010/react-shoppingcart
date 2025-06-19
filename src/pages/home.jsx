import React from 'react'
import MainPhoto from '../assets/orange.jpg'
import Photo1 from '../assets/llaut.jpg'
import Photo2 from '../assets/selva.jpg'
import Logo from '../assets/map.webp'
import '../styles/home.css'
import { Link } from 'react-router-dom'
import { Services } from '../components/services';
import { RefundPolicy } from '../components/refund-policy';
import { SkipPage } from '../components/skip-page'

export const Home = () => {
    return (
        <div className='home'>
            <div className='pageBackground' style={{ backgroundImage: `url(${MainPhoto})` }}></div>
            <div className='pageMain'>
                <h1 className='pageTitle'>EXPLORE MALLORCA</h1>
                <img className='Logo' src={Logo} alt='map' />
            </div>
            <div className='title' id='title'>
                <img className='img1' src={Photo1} alt='llaut' />
                <h1>EXPLORE MALLORCA</h1>
            </div>
            <div className='pageSummary'>
                <hr className='separator' />
                <div className='aboutUs'>
                    <h2>ABOUT US</h2>
                    <p>We specialise in authentic day trips within the island of Mallorca, Balearic Islands. Our team has been operating since April 2025 and we are continuously working on showing you real side of the island.</p>
                    <p>We can assure you these journeys will be the best ways to discover beautiful island of Mallorca.</p>
                    <p>In case we do not offer trips that is suited to your interest, please contact us. We will be happy to discuss taylor-made tour options with you.</p>
                </div>
                <hr className='separator' />
                <div>
                    <h2>AUTHENTIC WAY TO DISCOVER MALLORCA</h2>
                    <p>With our tours we try our best to repect the nature, environment, also the local people and we would love you to be a part of this journey whilest you are exploring destinations with us.</p>
                    <p>We would love you to experience our beautiful island as authentic as possible.</p>
                    <p>Please visit our <Link to='/tours'>TOURS</Link> page for amazing discoveries!</p>
                </div>
                <hr className='separator' />
                <div className='terms'>
                    <h2>BOOKING TERMS</h2>
                    <p>When making reservation, you will only need to fill in the name, contact information of primary guest.</p>
                    <p>In case of no-show, we do not offer any compensation or refund.</p>
                    <RefundPolicy />
                </div>
                <hr className='separator' />
                <h2>ALL OUR TOURS INCLUDE</h2>
                <Services />
                <hr className='separator' />
                <p>Further enquiries are always welcome.</p>
                <p>To communicate with us please visit our <Link to='/contact'>CONTACT US</Link> page.</p>
            </div>
            <img className='img2' src={Photo2} alt='selva'/>
            <SkipPage />
        </div>
    )
}
