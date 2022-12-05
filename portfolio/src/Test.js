import React, { useCallback } from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import './App.css';
import App from './App';
import Text from './Text';



/* Particles */
import particlesOptions from "./particles.json";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Work from './Work';


export default function Test() {
  const particlesInit = useCallback(main => {
    loadFull(main);
}, [])

  return (

<Parallax pages={3.5} style={{ top: '0', left: '0' }}>
<Particles  options={particlesOptions} init={particlesInit}/>

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

    <Text />
  </ParallaxLayer>

  <ParallaxLayer
    offset={2}
    speed={0.5}
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      color: 'black',
    }}>

    <Work />
  </ParallaxLayer>

</Parallax>  )
}
