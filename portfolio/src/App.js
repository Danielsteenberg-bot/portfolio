import React, { useCallback } from 'react';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import dig from './digselv.jpg';
import './App.css';
/* Particles */
import particlesOptions from "./particles.json";

/* Font-awesome */
import { FaTwitter, FaFacebook, FaLinkedin } from 'react-icons/fa'

function App() {
    const particlesInit = useCallback(main => {
        loadFull(main);
    }, [])

    return (
        


        <div className="App">
            <Particles options={particlesOptions} init={particlesInit}/>

            <div className='land-txt-container'>
                <h1 className='land-txt-main'>Velkommen til</h1>
                <img className='land-img' src={dig} alt="billede af ham selv"></img>
                <h2 className='land-txt-sub'>Daniels Portfolio</h2>
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
        </div>
    );
}

export default App;
