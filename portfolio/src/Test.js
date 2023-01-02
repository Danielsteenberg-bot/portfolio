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
import Footer from './components/Footer';


export default function Test() {
  const particlesInit = useCallback(main => {
    loadFull(main);
}, [])

  return (

<Parallax pages={2.2} style={{ top: '0', left: '0' }}>
<Particles  options={particlesOptions} init={particlesInit}/>

    <ParallaxLayer

    offset={0}
    speed={.5}
    style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <App />

    </ParallaxLayer>
  

  <ParallaxLayer
    offset={0.99}
    speed={1}
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      color: 'black',
    }}>

    <Text />
  </ParallaxLayer>

  <ParallaxLayer
    offset={1.7}
    speed={1}
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      color: 'black',
    }}>

    <Work />
  </ParallaxLayer>

<ParallaxLayer
offset={1.6}
style={{
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}}

>
<Footer />
</ParallaxLayer>
</Parallax>  


)
}
