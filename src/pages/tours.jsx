import React from 'react'
import '../styles/tours.css'
import { TOURS } from '../tours'
import { Tour } from './tour'

import MainPhoto from '../assets/1.jpg'

export const Tours = () => {
  return (
    <div className='tours'>
      <div className='pageMain' style={{ backgroundImage: `url(${MainPhoto})` }}>
        <div>
          <h1 className='pageTitle'>TOURS PAGE</h1>
          <p className='pageDescription'>Tours description</p>
        </div>
      </div>
      <div className='toursTitle'>
        <h1>Available Tours</h1>
      </div>
      <div className='toursList'>
        {TOURS.map((tour)=> (
          <Tour data={tour} key={tour.id} />
        ))}
      </div>
    </div>
  )
}
