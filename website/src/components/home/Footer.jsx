import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube, faFacebook, faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import './Footer.css'
import sponsor1 from '/assets/images/sponsor1.png'

export default function Footer() {
  return (
    <div className="footer">
      <h3>© 2025 Sangharsh Premier League | All rights reserved</h3>
      <div className="footer-icons">
        <FontAwesomeIcon icon={faYoutube} className="icon" />
        <FontAwesomeIcon icon={faXTwitter} className="icon" />
        <FontAwesomeIcon icon={faInstagram} className="icon" />
        <FontAwesomeIcon icon={faFacebook} className="icon" />
      </div>
      <div className="separator"></div>
      <div className="sponsors-section">
        <p className="sponsors-heading">Sponsored by — <b>Sanagharsh Seva Samiti</b></p>
        <img src={sponsor1} alt="Sandip Sravagi" className="sponsors-img" />
        <p className="sponsors-name">Dr. Sandeep Saraogi </p>
      </div>
    </div>
  )
}
