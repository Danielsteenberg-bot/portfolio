import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
/* import { faTwitter } from '@fortawesome/free-brands-svg-icons'
 */





export default function Nav() {

/* 
  const Nav = () =>{

    return    
    <div>
    <input type="checkbox" id="active"></input>
    <label htmlFor="active" className='menu-btn'><FontAwesomeIcon icon={faBars} size="lg" /></label> 
    <div className='wrapper'>
        <ul className='menu'>
          <Routes>
            <Link to="/">Home</Link>
            <Link to="/">About</Link>
            <Link to="/">Projects</Link>
            <Link to="/">Contact</Link>
          </Routes>
        </ul>
    </div>
    </div>
     */


  return (
    <nav>
        
  
    
    
    <input type="checkbox" id="active"></input>
    <label htmlFor="active" className='menu-btn'><FontAwesomeIcon icon={faBars} size="lg" /></label> 
    <div className='wrapper'>
        <ul className='menu'>
            <li><a href='#'>Home</a></li>
            <li><a href='#'>Timeline</a></li>
            <li><a href='#'>Projects</a></li>
            <li><a href='#'>Contact</a></li>
        </ul>
    </div>
    </nav>
  )
}
