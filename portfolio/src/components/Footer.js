import React from 'react'

/* Font-awesome */
import { FaTwitter, FaFacebook, FaLinkedin, FaCopyright } from 'react-icons/fa'

/* CSS */
import './footer.css';


export default function Footer() {
  return (
    <div className='footer-container'>
        <div className='footer'>            
        <h3>Find mig her</h3>
    <div className='footer-contact-some'>
        <div className='footer-some'>
            <a 
                href='https://twitter.com/winify_us'>
                <FaTwitter className='twitter' size="2.5em" color="#0f3d3e" />
            </a>               
            
            <a 
                href='https://www.facebook.com/daniel.m.steenberg/'>
                <FaFacebook className='facebook' size="2.5em" color="#0f3d3e" />
            </a>

            <a
                href='https://www.linkedin.com/in/daniel-steenberg-584269190/'>
                <FaLinkedin className='linkedin' size="2.5em" color="#0f3d3e" />
            </a>
        </div>
    </div>
    <div className='copyright'>
            <a
                href='https://www.linkedin.com/in/daniel-steenberg-584269190/'>
                <FaCopyright className='copyright' size="1em" color="#0f3d3e" />

            </a>
            <p>copyright Stonedesign</p>
        </div>

</div>


</div>
  )
}
