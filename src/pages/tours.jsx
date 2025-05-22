import React from 'react'
import '../styles/tours.css'
import { TOURS } from '../tours'
import { Tour } from './tour'

export const Tours = () => {
  return (
    <div className='tours'>
      <div className='tourTitle'>
        <h1> Available Tours</h1>
      </div>
      <div className='tourList'>
        {TOURS.map((tour)=> (
          <Tour data={tour} key={tour.id} />
        ))}
      </div>
    </div>
  )
}
