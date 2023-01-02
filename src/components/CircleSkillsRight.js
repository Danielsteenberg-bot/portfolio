import React from 'react'


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
      <div className='React-container spacer'>
        <div className='react-animation-container'>
          <div className='outer-icon'>
                <svg className='react-circle'><circle  cx="50%" cy="50%" r="65"/></svg>
                    <img className='react-skill-inner' src={'/assets/icon/skill-icon/logo.svg'} alt="SUTDIGSELVSO"></img>
                  <div className='icon-container'>40%</div>
              <h4 className='TXT-skills'>React</h4> 
          </div> 
        </div>
      </div>

      <div className='Laravel-container spacer'>
        <div className='laravel-animation-container'>
          <div className='outer-icon'>
                <svg className='laravel-circle'><circle  cx="50%" cy="50%" r="65"/></svg>
                    <img className='laravel-skill-inner' src={'/assets/icon/skill-icon/laravel.svg.png'} alt="SUTDIGSELVSO"></img>
                  <div className='icon-container'>25%</div>
              <h4 className='TXT-skills'>Laravel</h4> 
          </div> 
        </div>
      </div>

      <div className='Tailwind-container spacer'>
        <div className='tailwind-animation-container'>
          <div className='outer-icon'>
                <svg className='tailwind-circle'><circle  cx="50%" cy="50%" r="65"/></svg>
                    <img className='tailwind-skill-inner' src={'/assets/icon/skill-icon/tailwind-logo.png'} alt="SUTDIGSELVSO"></img>
                  <div className='icon-container'>55%</div>
              <h4 className='TXT-skills'>Tailwind</h4> 
          </div> 
        </div>
      </div>   
</div>



  )
}
