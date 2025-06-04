import React from 'react'
import MainPhoto from '../assets/orange.jpg'
import Photo1 from '../assets/llaut.jpg'
import Photo2 from '../assets/selva.jpg'
import '../styles/home.css'
import { BusIcon, CameraIcon, CheersIcon, CoffeeIcon, DropIcon, FirstAidKitIcon, ForkKnifeIcon, TowelIcon, UsersThreeIcon } from '@phosphor-icons/react'
import { Link } from 'react-router-dom'

export const Home = () => {
    return (
        <div className='home'>
            <div className='pageMain' style={{ backgroundImage: `url(${MainPhoto})` }}>
                <div>
                <h1 className='pageTitle'>EXPLORE MALLORCA LIKE A LOCAL</h1>
                <p className='pageDescription'>EXPLORE MALLORCA invites you to discover our beautiful island of Mallorca!</p>
                </div>
            </div>
            <div className='title' id='title'>
                <img className='img1' src={Photo1} alt='llaut' />
                <h1>EXPLORE MALLORCA</h1>
            </div>
            <div className='pageSummary'>
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
                    <div className='refund'>
                        <b>REFUND POLICY</b>
                        <ul>
                            <li>Cancellations more then 3 days in advance: Total amount. </li>
                            <li>Cancellation between 48- 24 hours prior to tour date: 50% of the total amount.</li>
                            <li>Cancellation less than 24 hours prior to tour date: 100% of the total amount.</li>
                        </ul>
                    </div>
                </div>
                <hr className='separator' />
                <div className='service'>
                    <h2>ALL OUR TOURS INCLUDE</h2>
                    <hr />
                    <div className='serviceList'>
                        <span className='serviceItems'>
                            <CheersIcon size={28} />
                            <p>Welcome drink</p>
                        </span>
                        <span className='serviceItems'>
                            <DropIcon size={28} />
                            <p>Drinking water</p>
                        </span>
                        <span className='serviceItems'>
                            <CoffeeIcon size={28} />
                            <p>Coffee</p>
                        </span>
                        <span className='serviceItems'>
                            <TowelIcon size={28} />
                            <p>Towel</p>
                        </span>
                        <span className='serviceItems'>
                            <BusIcon size={28} />
                            <p>Shuttle service</p>
                        </span>
                        <span className='serviceItems'>
                            <ForkKnifeIcon size={28} />
                            <p>Light snacks</p>
                        </span>
                        <span className='serviceItems'>
                            <FirstAidKitIcon size={28} />
                            <p>First aid kit</p>
                        </span>
                        <span className='serviceItems'>
                            <UsersThreeIcon size={28} />
                            <p>Authentic, knowledged and friendly service</p>
                        </span>
                        <span className='serviceItems'>
                            <CameraIcon size={28} />
                            <p>Photo</p>
                        </span>
                    </div>
                    <hr />
                    <h3>* Availability may change. If there is any change we will inform you minimum 24 hours before your journey begins.</h3>
                    <h3>** Shuttle service is only available within the distance of 5km of our office (Palma de Mallorca).</h3>
                    <h3>*** Snacks are provided your tour's duration is more than 3 hours.</h3>
                </div>
                <p>Any further enquiries are always welcome.</p>
                <p>To communicate with us please visit our <Link to='/contact'>CONTACT US</Link> page.</p>
            </div>
            <img className='img2' src={Photo2} alt='selva'/>
        </div>
    )
}
