import React from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import './App.css';
import App from './App';
import About from './About';





export default function Test() {
  return (
<Parallax pages={2} style={{ top: '0', left: '0' }}>
  <ParallaxLayer
    offset={0}
    speed={-2.5}
    style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <App />
  </ParallaxLayer>

  <ParallaxLayer offset={1} speed={2} style={{ backgroundColor: 'black' }} />

  <ParallaxLayer
    offset={1}
    speed={0.5}
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      color: 'black',
    }}>
  </ParallaxLayer>
</Parallax>  )
}
