import React, { useEffect, useState } from 'react'
import MainPhoto from '../assets/orange.jpg'
import Photo1 from '../assets/cala.jpg'
import Photo2 from '../assets/house.jpg'
import logo from '../assets/map.webp'
import '../styles/home.css'
import { Services } from '../components/services';
import { RefundPolicy } from '../components/refund-policy';
import { SkipPage } from '../components/skip-page'
import { Weather } from '../components/weather'
import { Logo } from '../components/logo'

export const Home = () => {

    const [ changeColor, setChangeColor ] = useState(false);

    const listenScrollEvent = () => {
        if (window.scrollY >= 1100 && window.scrollY <= 1400 ) {
            return setChangeColor(true);
        } else {
            return setChangeColor(false);
        } 
    }

    useEffect(() => {
        window.addEventListener('scroll', listenScrollEvent);
        return () =>
            window.removeEventListener('scroll', listenScrollEvent);
    }, []);


    return (
        <div className='home'>
            <div className='pageBackground' style={{ backgroundImage: `url(${MainPhoto})` }}></div>
            <div className='pageMain'>
                <Logo />
                <img className='Logo' src={logo} alt='map' />
            </div>
            <div className='pageContent'>
                <div className='outstory content'>
                    <div className='images'>
                        <img className='img1' src={Photo1} alt='cala'/>
                        <img className='img2' src={Photo2} alt='house'/>
                    </div>
                    <div>
                        <hr className='line'/>
                        <span className='texts'>
                            <h2>OUR STORY</h2>
                            <p>We specialise in authentic day trips within the island of Mallorca, Balearic Islands. Our team has been operating since April 2025 and we are continuously working on showing you real side of the island.</p>
                            <p>We can assure you these journeys will be the best ways to discover beautiful island of Mallorca.</p>
                            <p>In case we do not offer trips that is suited to your interest, please contact us. We will be happy to discuss taylor-made tour options with you.</p>
                        </span>
                        <hr className='line'/>
                    </div>
                </div>
                <div className='aboutUs content'>
                    <hr className='line'/>
                    <span className={`texts ${changeColor ? 'colorChanged' : ''}`}>
                        <p>With our tours we try our best to repect the nature, environment, also the local people. We would love you to experience our beautiful island as authentic as possible.</p>
                    </span>
                    <hr className='line'/>
                </div>
                <div className='terms content'>
                    <h2>BOOKING CONDITIONS</h2>
                    <div>
                        <p>When making reservation, you will only need to fill in the name, contact information of primary guest.</p>
                        <p>All tours guests must be 16 years old or more. Some tours may offer some exceptions. (Please consult with us ahead)</p>
                        <p>In case of no-show, we do not offer any compensation or refund.</p>
                    </div>
                    <RefundPolicy />
                </div>
                <div className='services content'>
                    <h2>ALL OUR TOURS INCLUDE</h2>
                    <Services />
                </div>
                <div className='weather-wrapper content'>
                    <Weather />
                </div>
            </div>
            <SkipPage />
        </div>
    )
}