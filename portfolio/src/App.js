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



function App() {
    const particlesInit = useCallback(main => {
        loadFull(main);
    }, [])





    return (

        <div className="App">
             <Particles options={particlesOptions} init={particlesInit}/>
            <div className='land-container'>

                <img className='land-icon' src={icon} alt="random"></img>

                <div className='land-txt-container'>
                    <h1>Daniel Steenberg</h1>
                </div>

                <div className='under-land-txt-container'>
                    <h2>Junior Frontend Udvikler</h2>
                </div>
            </div>









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
            <div className='left-acordion underline-animation'>LEFT</div>
                <div className='arrow'>
                    <section id="section10" className="demo">
                    <a href="#thanks"><span></span></a>
                </section>
            </div>
            <div className='right-acordion underline-animation-right'>RIGHT</div>
        </div>



        </div>
    );
}

export default App;
