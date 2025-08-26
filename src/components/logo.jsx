import './logo.css'
import { useEffect, useState } from 'react'

export const Logo = () => {
    const [ hightlighterOpen, setHighlighterOpen ] = useState(false);
    
    useEffect(() => {
        setHighlighterOpen(true);
    },[]);

  return (
    <div className='logo'>
        <svg className={`highlighter ${hightlighterOpen? 'open' : ''}`}></svg>
        <p className='text'>EXPLORE MALLORCA</p>
    </div>
  )
}
