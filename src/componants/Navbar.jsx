import React from 'react'
import styles from './Navbar.module.css'
// import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Navbar({myStyle,mode,title,toggleMode,text,toggelMode2}) {
  return (
    <div>
      <nav className={`${styles.navBar} ${mode} ${myStyle}`}>
        <a className='titel-text' href="/">{title} </a>
        <a to="/about"> <li>home</li></a>
        <a to="/about"><li>about</li></a>
        <a href="#"><li>us</li></a>
       
        <a href="#"><button>Submit</button></a>
        <div className={`form-check form-switch ${mode==='light'?'dark':'light'}`}>
  <input className="form-check-input" onClick={toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{text}</label>
 
</div>
<span className={`form-check form-switch${mode==='light'?'dark':'light'}`}>
  <input className="form-check-input" onClick={toggelMode2} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" for="flexSwitchCheckDefault">{text}</label>
</span>
      </nav>
    </div>
  )
}
// Navbar.propTypes={ titel:PropTypes.string.isRequired,
//                    }

//default props values

// Navbar.defaultProps ={
//   title:'set titel here'
// }