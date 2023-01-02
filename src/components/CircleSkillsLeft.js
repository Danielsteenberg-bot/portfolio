import React from 'react'



import './circle.css'

import { useSpring, animated } from 'react-spring'



export default function CircleSkills() {

  const revalFromBottom = useSpring({
    to: {opacity: 1},
    from:{ opacity: 0},  
    delay: 800
})
  



  return (


    <div className='main-container'>
      <div className='skill-container'>
        <div className='skill-txt-container'>
        </div>
      </div>
      <div className='HTML-container spacer'>
        <div className='html-animation-container'>
          <div className='outer-icon'>
                <svg className='HTML-circle'><circle  cx="50%" cy="50%" r="65"/></svg>
                    <img className='html-skill-inner' src={'/assets/icon/skill-icon/html-logo.png'} alt="SUTDIGSELVSO"></img>
                  <div className='icon-container'>100%</div>
              <h4 className='TXT-skills'>HTML</h4> 
          </div> 
        </div>
      </div>

      <div className='CSS-container spacer'>
        <div className='css-animation-container'>
          <div className='outer-icon'>
                <svg className='css-circle'><circle  cx="50%" cy="50%" r="65"/></svg>
                    <img className='html-skill-inner' src={'/assets/icon/skill-icon/css-logo.svg.png'} alt="SUTDIGSELVSO"></img>
                  <div className='icon-container'>75%</div>
              <h4 className='TXT-skills'>CSS</h4> 
          </div> 
        </div>
      </div>

      <div className='JS-container spacer'>
        <div className='js-animation-container'>
          <div className='outer-icon'>
                <svg className='js-circle'><circle  cx="50%" cy="50%" r="65"/></svg>
                    <img className='js-skill-inner' src={'/assets/icon/skill-icon/javascript-logo.png'} alt="SUTDIGSELVSO"></img>
                  <div className='icon-container'>65%</div>
              <h4 className='TXT-skills'>JS</h4> 
          </div> 
        </div>
      </div>

{/*       <animated.div style={revalFromBottom} className='skill-point-txt-container'>
        <div className='skill-point-txt-wrapper'>
              <h6 className='skill-point-txt'>Disse skills points er basseret på karakter givende undervisning og egen hubris</h6>
        </div>
      </animated.div> */}


      
      
    </div>



  )
}
