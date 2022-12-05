import React from 'react'

/* CSS */
import './portfolio.css';

/* IMG */
/* import KM from '../assets/img/km-website-snap.png' 
import Haakan from '../assets/img/website-haakan-snap.PNG'  */
import Oneday from '../assets/img/oneday-website-snap.PNG' 

 


export default function Portfolio() {
  return (
    <div>        
        <div className='project-container'>
            <div className='project-wrapper'>
                <div className='first-project'>
                    <h6>KM-Træpleje</h6>
                    <img className='project-img' src={Oneday}></img>
                    <p>Kunden bad om et hjemmeside der kunne fungere som marketing og "visitkort"</p>
                    <a href='https://km-traepleje.dk/'><button>Tjek Siden</button></a>


                </div>
                <div className='first-project'>
                    <h6>Håkan Media</h6>
                    <img className='project-img' src={Oneday}></img>
                    <p>Kunden bad om et hjemmeside der kunne fungere som marketing og "visitkort"</p>
                    <a href='https://www.alexanderhaakansson.dk/'><button>Tjek Siden</button></a>


                </div>
                <div className='first-project'>
                    <h6>One Day Viborg</h6>
                    <img className='project-img' src={Oneday}></img>
                    <p>Dette var et Projekt på Medieskolerne hvor vi samarbejde med fotografer om at vise en hel dag i Viborg</p>
                    <a href='https://onedayviborg.dk/'><button>Tjek Siden</button></a>


                </div> 
        </div>
    </div>
</div>
  )
}
