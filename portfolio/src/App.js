import React, { useCallback } from 'react';


/* assets */

import icon from './assets/icon/icon.svg' 

import './App.css';

import './components/circle.css'
import './components/circleRight.css'

/* Particles */
import particlesOptions from "./particles.json";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";


/* Spring */
import { useSpring, animated } from 'react-spring'
import { ParallaxLayer } from '@react-spring/parallax';
import CircleSkills from './components/CircleSkillsLeft';
import CircleSkillsRight from './components/CircleSkillsRight';



function App() {
    const particlesInit = useCallback(main => {
        loadFull(main);
    }, [])

    const revalFromTop = useSpring({
        to: {opacity: 1, y:50},
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
    const revalFromMid = useSpring({
        to: {opacity: 1, x:0, y:0},
        from:{ opacity: 0, y:-100},
        delay: 600
    })



function revealLeft(){
    var hiddenL = document.querySelector(".hiddenL");
    var animateHTML = document.querySelector('.HTML-circle');
    var animateCSS = document.querySelector('.css-circle');
    var animateJS = document.querySelector('.js-circle');

    hiddenL.classList.toggle("slideLeft");
    animateHTML.classList.toggle("html-animation");
    animateCSS.classList.toggle("css-animation");
    animateJS.classList.toggle("js-animation");

}

function revealRight(){
    var hiddenR = document.querySelector(".hiddenR");
    var animateLaravel = document.querySelector('.laravel-circle');
    var animateReact = document.querySelector('.react-circle');
    var animateTailwind = document.querySelector('.tailwind-circle');

    hiddenR.classList.toggle("slideRight");
    animateLaravel.classList.toggle("laravel-animation");
    animateReact.classList.toggle("react-animation");
    animateTailwind.classList.toggle("tailwind-animation");
}




    return (

        

        <div className="App">
             <Particles  options={particlesOptions} init={particlesInit}/>
            <ParallaxLayer
            className='land-container' 
                    offset={0}
                    speed={-5.5}>
             <div className='land-container'>
                <animated.div className='land-container' style={revalFromTop}>

                <img className='land-icon' src={icon} alt="random"></img>

                <div className='land-txt-container'>
                    <h1>Daniel Steenberg</h1>
                </div>

                <div className='under-land-txt-container'>
                    <h2>Junior Front & Software Udvikler</h2>
                </div>
                </animated.div>
            </div>


    <div className='landing-contact-container'>
            <animated.div style={revalFromMid} className='landing-contact-container'>

             </animated.div>
    </div>
    </ParallaxLayer>

        <div className='bottom-line'>
    <ParallaxLayer className='behind' offset={0}speed={5}>

            <animated.div style={revalFromLeft} className='left-acordion underline-animation' onClick={revealLeft}> Basis Sprog</animated.div>
            <div className='hiddenL'>
            <CircleSkills />
            </div>

                <animated.div style={revalFromBottom} className='arrow'>
                        <section id="section10" className="demo">
                    <a href="#thanks"><span></span></a>
                </section>
            </animated.div>

        
            <animated.div style={revalFromRight} className='right-acordion underline-animation-right' onClick={revealRight}>Frameworks</animated.div>
            <div className='hiddenR'>
                <div className='hiddenTXT'>
                    <CircleSkillsRight />
                </div>
            </div>
        </ParallaxLayer>
        </div>




        </div>
    );
}

export default App;
