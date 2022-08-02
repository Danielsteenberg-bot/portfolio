import React from 'react';

/* GSAP */
import { gsap } from "gsap";

/* IMG */
import young from './young-gun.jpg';





export default function Timeline() {
  return (
    <div className='timeline-main-container'>
      <div className='time-txt-container'> 
        <h4>Få et indblik i min rute gennem tiden</h4>
      </div>

          <div className='timeline-img-holder'>
          <img className='timeline-img' src={young} alt="billede af ham selv"></img>

          </div>



    </div>
  )
}
