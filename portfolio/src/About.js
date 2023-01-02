import React from 'react'


/* assets */
/* import dig from './assets/img/digselv.jpg';
 */import land from './assets/img/pingvinFYREN.jpeg'
import icon from './assets/icon/icon.svg' 
/* import iconL from './assets/icon/venstre-icon.svg' 
import iconH from './assets/icon/højre-icon.svg'  */
import tiltH from './assets/icon/tilt-right.svg' 
import tiltL from './assets/icon/tilt-left.svg' 
import './App.css';

export default function About() {

    window.addEventListener('scroll', () =>{
        const blockR = document.querySelector(".txt-container2")
        const blockM = document.querySelector(".landing-img")
        const blockL = document.querySelector(".txt-container")
    
        const scrolled = window.pageYOffset;
        const valL = scrolled * 0.2; 
        const valM = scrolled * 0.4; 
        const valR = scrolled * 0.2; 
        blockR.style.transform = `translateY(${-0.7 * valR}%)`;
        blockM.style.transform = `translateY(${0.2 * valM}%)`;
        blockL.style.transform = `translateY(${-0.7 * valL}%)`;
        blockR.style.transition = "transform ease-in-out ";
      });



  return (
    <div className="container">
  <div className="nav">
    <div className='burger-container'> 
    <img src={icon} classsname='burger-icon' alt='fedt logo m8'></img>
    </div>
  </div>
  <div className='land-txt'>

      <div className='head-txt-container'>
      <img className='header-icon' src={tiltL} alt="icon jeg har valgt"></img>
        <h1> Daniel Steenberg</h1>
        <img className='right-icon' src={tiltH} alt="icon jeg har valgt"></img>
      </div>
  </div>
  <div className="txt-box1">
  <div className='txt-container'>
        <div className='txt-left-1'>
            <h2>Junior <br></br> Frontend der tør give dig bort <br></br> Udvikler</h2>
          </div>
      </div>
  </div>

  <div className="txt-box2">
  <div className='txt-container2'>
        <div className='txt'>
        <h2>Udlært på medieskolerne i Viborg</h2>
          </div>
      </div>
  </div>
  
  <div className='landing-img'>
  <img className='land-img' src={land} alt="billede af ham selv"></img>
  </div>


  <div className='txt-box3'>
  <div className='txt-container3'>
        <div className='txt'>
        <h2>lorem lorem lorem </h2>
            <p>lorem lorem lorem lorem lorem lorem lorem lorem lorelm lorem lorem lorem lorem lorem lorem </p>
          
          </div>
      </div>
  </div>

  <div className="txt-box4"></div>

  <div className="content-img"></div>
  <div className="Footer"></div>

</div>
  )
}
