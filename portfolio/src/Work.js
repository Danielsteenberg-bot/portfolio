import React from 'react'

/* Spring */
import { useSpring, animated } from 'react-spring'
import Portfolio from './components/Portfolio'




export default function Work() {
  return (
    <animated.div>
        <Portfolio />
    </animated.div>
  )
}
