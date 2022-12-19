import React from 'react'

/* CSS */
import './portfolio.css';

/* IMG */
import KM from '../assets/img/km-website-snap.png' 
import Haakan from '../assets/img/website-haakan-snap.PNG' 
import Oneday from '../assets/img/oneday-website-snap.PNG' 


/* Spring */

import { Parallax, ParallaxLayer } from '@react-spring/parallax'


 


export default function Portfolio() {
  return (
    <div>        
        <div className='project-container'>
            <div className='project-wrapper'>
            <ParallaxLayer
                    className='project-1'
                    style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                    speed={.5}>
                <div className='first-project'>
                    <h6>KM-Træpleje</h6>
                    <img className='project-img' src={KM}></img>
                    <p>Kunden bad om et hjemmeside der kunne fungere som marketing og "visitkort"</p>
                    <a href='https://km-traepleje.dk/'><button>Tjek Siden</button></a>
                

                </div>

                <ParallaxLayer
                    className='project-2'
                    speed={.5}>
                <div className='first-project mobile'>
                    <h6>Håkan Media</h6>
                    <img className='project-img' src={Haakan}></img>
                    <p>Kunden bad om et hjemmeside der kunne fungere som marketing og "visitkort"</p>
                    <a href='https://www.alexanderhaakansson.dk/'>
                    <button>Tjek Siden</button>
                    </a>


                </div>
                </ParallaxLayer>
                
                <ParallaxLayer
                    className='project-3'
                    speed={.5}
                    style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}
                    >

                <div className='first-project'>
                    <h6>One Day Viborg</h6>
                    <img className='project-img' src={Oneday}></img>
                    <p>Dette var et Projekt på hvor vi samarbejde med fotografer om at vise en hel dag i Viborg</p>
                    <a href='https://onedayviborg.dk/'><button>Tjek Siden</button></a>


                </div>
                </ParallaxLayer>

                </ParallaxLayer> 
        </div>
    </div>
</div>
  )
}
