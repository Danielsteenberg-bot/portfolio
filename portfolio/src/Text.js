import React from 'react'

/* CSS */
import './text.css';


/* Spring */
import { useSpring, animated } from 'react-spring'


/* Assets */
import dig from './assets/img/digselv.jpg' 


export default function Text() {

    /* Animationer */
    const revalFromTop = useSpring({
        to: {opacity: 1, y:50},
        from:{ opacity: 0, y:-100},  
        delay: 400
    })


/* Output */
  return (
    <animated.div style={revalFromTop}>
        <div className='facts-img-container'>
        <img className='facts-img' src={dig} alt="random"></img>
        </div>


        <div className='facts'>
        <h1>Hurtige facts omkring mig</h1>
            <ul>
                <li>Alder: 25år</li>
                <li>Bosat: Viborg</li>
                <li>Uddannelse: Frontend Udvikler & Software Udvikler</li>
                <li>Fritids aktiviteter: Esport, Computer Spil </li>
            </ul>
        </div>
        </animated.div>
  )
}


/* IDE:
EVT lave parallax med billeder af de forskellige interesser i ovenstående punkter

*/