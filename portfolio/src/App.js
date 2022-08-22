import React, { useCallback } from 'react';


/* assets */
import dig from './digselv.jpg';
import './App.css';

/* Particles */
import particlesOptions from "./particles.json";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

/* Font-awesome */
import { FaTwitter, FaFacebook, FaLinkedin } from 'react-icons/fa'


/* GSAP */
import { gsap } from "gsap";

function App() {
    const particlesInit = useCallback(main => {
        loadFull(main);
    }, [])



    const { useRef, useEffect } = React;
    const txtRef = useRef(null);


    useEffect(() => {
        gsap.to("#thirdCircle", {
          y: 100,
          scrollTrigger: {
            trigger: "#thirdCircle",
            markers: true,
            pin: true,
            start: "top center",
            scrub: true,
          }
        });
      }, []);



    return (
        


        <div className="App">

<div ref={txtRef} id="thirdCircle" className='left-text-container'>
                    <h3 className='left-text'>Bosat i Viborg</h3>
                </div>

            <Particles options={particlesOptions} init={particlesInit}/>

            <div className='land-txt-container'>
                <h1 className='land-txt-main'>Daniel Steenberg</h1>
                <h2 className='land-txt-sub'>Junior Frontend Developer</h2>

                
                <img className='land-img' src={dig} alt="billede af ham selv"></img>
                </div>

                <div ref={txtRef} id="thirdCircle" className='left-text-container'>
                    <h3 className='left-text'>Bosat i Viborg</h3>
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
