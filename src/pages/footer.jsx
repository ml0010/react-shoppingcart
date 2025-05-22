import React from 'react'
import '../styles/footer.css'
import { XLogoIcon, InstagramLogoIcon, FacebookLogoIcon } from '@phosphor-icons/react'

export const Footer = () => {
  return (
    <div className="footer">
      <div className="socialMedia">
        <XLogoIcon size={28} />
        <InstagramLogoIcon size={28} />
        <FacebookLogoIcon size={28} />
      </div>
      <div> &copy; 2025 Mimi Lim.</div>
    </div>
  )
}
