import React from 'react'
import MainPhoto from '../assets/4.jpg'
import '../styles/home.css'
import { BusIcon, CameraIcon, CheersIcon, CoffeeIcon, DropIcon, FirstAidKitIcon, ForkKnifeIcon, TowelIcon, UsersThreeIcon } from '@phosphor-icons/react'

export const Home = () => {
  return (
    <div className='home'>
        <div className='pageMain' style={{ backgroundImage: `url(${MainPhoto})` }}>
          <div>
            <h1 className='pageTitle'>HOME PAGE</h1>
            <p className='pageDescription'>home description</p>
          </div>
        </div>
        <div>
          <div className='service'>
            <h2>SERVICES INCLUDED</h2>
            <hr />
            <div className='serviceList'>
              <div className='serviceItems'>
                <CheersIcon size={28} />
                <p>Welcome drink</p>
              </div>
              <div className='serviceItems'>
                <DropIcon size={28} />
                <p>Drinking water</p>
              </div>
              <div className='serviceItems'>
                <CoffeeIcon size={28} />
                <p>Coffee</p>
              </div>
              <div className='serviceItems'>
                <TowelIcon size={28} />
                <p>Towel</p>
              </div>
              <div className='serviceItems'>
                <BusIcon size={28} />
                <p>Shuttle service</p>
              </div>
              <div className='serviceItems'>
                <ForkKnifeIcon size={28} />
                <p>Light snacks</p>
              </div>
              <div className='serviceItems'>
                <FirstAidKitIcon size={28} />
                <p>First aid kit</p>
              </div>
              <div className='serviceItems'>
                <UsersThreeIcon size={28} />
                <p>Authentic, knowledged and friendly service</p>
              </div>
              <div className='serviceItems'>
                <CameraIcon size={28} />
                <p>Photo</p>
              </div>
            </div>
            <hr />
            <h3>* Availability may change. If there is any change we will inform you minimum 24 hours before your journey begins.</h3>
            <h3>** Shuttle service is only available within the distance of 5km of our office (Palma de Mallorca).</h3>
            <h3>*** Snacks are provided your tour's duration is more than 3 hours.</h3>
          </div>
        </div>
    </div>
  )
}
