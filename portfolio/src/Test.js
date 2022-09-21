import React from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import './App.css';
import App from './App';
import About from './About';


/* Particles */
import particlesOptions from "./particles.json";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";


export default function Test() {

  return (

<Parallax pages={2} style={{ top: '0', left: '0' }}>
   <ParallaxLayer
    className='behind'
    offset={0}
    speed={.5}
    style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}> 
        <App />
   </ParallaxLayer>
 

  <ParallaxLayer
    offset={1}
    speed={0.5}
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      color: 'black',
    }}>
        <div>
    <h3>Hej</h3>
    <h3>Hej</h3>
    <h3>Hej</h3>
    <h3>Hej</h3>
    <h3>Hej</h3>
  </div>
  </ParallaxLayer>

</Parallax>  )
}
