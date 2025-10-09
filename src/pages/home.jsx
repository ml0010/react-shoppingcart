import { useEffect, useState } from 'react'
import MainPhoto from '../assets/main-home.png'
import Photo1 from '../assets/house.jpg'
import Photo2 from '../assets/cala.jpg'
import OurStory from '../assets/img-ourstory.png'

import '../styles/home.css'
import { Services } from '../components/services/services';
import { RefundPolicy } from '../components/refund-policy/refund-policy';
import { SkipPage } from '../components/buttons/skip-page'
import { Weather } from '../components/weather/weather'
import { RevealOnScroll } from '../components/reveal-on-scroll'
import { Link } from 'react-router-dom'
import { ArrowUpRightIcon } from '@phosphor-icons/react'
import { MotionRoute } from '../components/motions'
import ImageSlider from '../components/image-slider/image-slider'

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
        <MotionRoute>
            <div className='home'>
                <div className='pageFront'>
                    <div className='pageBackground' style={{ backgroundImage: `url(${MainPhoto})`}}></div>
                    <div className='pageMain'>
                        <p className='pageTitle'>MALLORCA</p>
                        <p className='pageDescription'>Discover heart of Mediterranean Sea</p>
                        <Link className='tourButton' to='/tours'>Plan Your Adventure <ArrowUpRightIcon size={18} /></Link>
                    </div>
                    <SkipPage />
                </div>
                <div className='pageContent'>
                    <RevealOnScroll>
                        <div className='outstory content'>
                            <ImageSlider image={Photo1} copy={"OUR STORY"} text={<OurstoryText />}/>
                        </div>
                    </RevealOnScroll>
                    <RevealOnScroll>
                        <div className='aboutUs content'>
                            <hr className='line'/>
                            <span className={`texts ${changeColor ? 'colorChanged' : ''}`}>
                                <p>With our tours we try our best to repect the nature, environment, also the local people. We would love you to experience our beautiful island as authentic as possible.</p>
                            </span>
                            <hr className='line'/>
                        </div>
                    </RevealOnScroll>
                    <RevealOnScroll>
                    <div className='weather-wrapper content'>
                        <Weather />
                    </div>
                    </RevealOnScroll>
                </div>
            </div>
        </MotionRoute>
    )
}
export default Home;

const OurstoryText = () => {
    return (
        <>
            <p>We specialise in authentic day trips within the island of Mallorca, Balearic Islands. Our team has been operating since April 2025 and we are continuously working on showing you real side of the island.</p>
            <p>We can assure you these journeys will be the best ways to discover beautiful island of Mallorca.</p>
            <p>In case we do not offer trips that is suited to your interest, please contact us. We will be happy to discuss taylor-made tour options with you.</p>
        </>
    );
};
