import React, { useCallback } from 'react';


/* assets */

import icon from './assets/icon/icon.svg' 

import './App.css';

/* Particles */
import particlesOptions from "./particles.json";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

/* Font-awesome */
import { FaTwitter, FaFacebook, FaLinkedin } from 'react-icons/fa'

/* Spring */
import { useSpring, animated } from 'react-spring'



function App() {
    const particlesInit = useCallback(main => {
        loadFull(main);
    }, [])

    const revalFromTop = useSpring({
        to: {opacity: 1, y:0},
        from:{ opacity: 0, y:-100},  
        delay: 400
    })
    const revalFromBottom = useSpring({
        to: {opacity: 1},
        from:{ opacity: 0},  
        delay: 800
    })
    const revalFromRight = useSpring({
        to: {opacity: 1, x:0},
        from:{ opacity: 0, x:200},  
        delay: 600
    })
    const revalFromLeft = useSpring({
        to: {opacity: 1, x:0},
        from:{ opacity: 0, x:-200},  
        delay: 600
    })



function revealLeft(){
    var hiddenL = document.querySelector(".hiddenL");

    hiddenL.classList.toggle("slideLeft")

}

function revealRight(){
    var hiddenR = document.querySelector(".hiddenR");

    hiddenR.classList.toggle("slideRight")
}


    return (

        <div className="App">
             <Particles options={particlesOptions} init={particlesInit}/>
            <animated.div className='land-container' style={revalFromTop}>

                <img className='land-icon' src={icon} alt="random"></img>

                <div className='land-txt-container'>
                    <h1>Daniel Steenberg</h1>
                </div>

                <div className='under-land-txt-container'>
                    <h2>Junior Frontend Udvikler</h2>
                </div>
            </animated.div>


            <div className='landing-contact-container'>
                <h3>Find mig her</h3>
                    <div className='landing-contact-some'>
                        <a 
                            href='https://twitter.com/winify_us'>
                            <FaTwitter className='twitter' size="2.5em" color="#E2DCC8" />
                        </a>               
                        
                        <a 
                            href='https://www.facebook.com/daniel.m.steenberg/'>
                            <FaFacebook className='facebook' size="2.5em" color="#E2DCC8" />
                        </a>

                        <a
                            href='https://www.linkedin.com/in/daniel-steenberg-584269190/'>
                            <FaLinkedin className='linkedin' size="2.5em" color="#E2DCC8" />
                        </a>
                </div>
            </div>
        <div className='bottom-line' >
            <animated.div style={revalFromLeft} className='left-acordion underline-animation' onClick={revealLeft}> LEFT</animated.div>
            <div className='hiddenL'>
                <h2>Her skal man så kunne læse lidt om min skole</h2>
                <p>lorme lorem lorem</p>
            </div>
                <animated.div style={revalFromBottom} className='arrow'>
                    <section id="section10" className="demo">
                    <a href="#thanks"><span></span></a>
                </section>
            </animated.div>
            <animated.div style={revalFromRight} className='right-acordion underline-animation-right' onClick={revealRight}>RIGHT</animated.div>
            <div className='hiddenR'>
                <h2>Her skal man så kunne læse lidt om min skole</h2>
                <p>lorme lorem lorem</p>
            </div>
        </div>



        </div>
    );
}

export default App;
