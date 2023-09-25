import React, {useState, useEffect} from "react";

import { NavLink, Link } from "react-router-dom";
import logo from "../../../images/logoRe.png";
import Dropdown from "../../dropdown/Dropdown";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faLocation, faMailBulk, faPhone, faSearch } from "@fortawesome/free-solid-svg-icons";

import './Nav.css'
import { faFacebook, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";

const Nav = () => {

  const isLoggedIn = localStorage.getItem('isLoggedIn')

  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  
  //Nav Dropdown for extra links
  const [dropdown, setDropdown] = useState(false)
  const onMouseEnter  = () => setDropdown(true)
  const onMouseLeave  = () => setDropdown(false)
  //logOut User
  const handleLogOut  = () => localStorage.removeItem('isLoggedIn')
  

  return (
    <div className="navbar-full-container">
      
      <div className={scrolled ? 'scrolled' : 'disappear-nav'}>
        <div className="short-details">
          <p><FontAwesomeIcon icon={faPhone} className="entry-social"/><a href="tel: +254708940074" className="gmail-tel-link">+254708940074</a></p>
          <p><FontAwesomeIcon icon={faMailBulk} className="entry-social" /><a href="mailto: steven.ochieng432@gmail.com" className="gmail-tel-link">steven.ochieng432@gmail.com</a></p>
          <p><FontAwesomeIcon icon={faLocation} className="entry-social" />Nairobi | UpperHill</p>
        </div>

        <div className="social-icons-nav">
          <Link to='https://facebook.com'>
            <FontAwesomeIcon icon={faFacebook}  className="item-social"/>
          </Link>

          <Link to='https://twitter.com'>
            <FontAwesomeIcon icon={faTwitter}  className="item-social"/>
          </Link>

          <Link to='https://linkedIn.com'>
            <FontAwesomeIcon icon={faLinkedin}  className="item-social"/>
          </Link>

          <FontAwesomeIcon icon={faSearch} className="search-icon" />
        </div>

      </div>

        <nav className='nav-container'>
          <NavLink to='/'>
            <img src={logo} alt="logo" className="logo" />
          </NavLink>

        <ul className="nav-links"> 
          <li>
            <NavLink to='/' className={({isActive}) => isActive ? 'active-Link' : null} >Home</NavLink>
          </li>

          <li onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} >
            <p className="hr-managt-item">HR Management <FontAwesomeIcon className="dropIcon" icon={faAngleDown}/></p>
            { dropdown && <Dropdown /> }   
          </li>

          <li>
            <NavLink to='Services' className={({isActive}) => isActive ? 'active-Link' : null} >Services</NavLink>
          </li>

          <li>
            <NavLink to='About' className={({isActive}) => isActive ? 'active-Link' : null} >About Us</NavLink>
          </li>

          <li>
            <NavLink to='Contact' className={({isActive}) => isActive ? 'active-Link' : null} >Contact Us</NavLink>
          </li>
          
        </ul>

        <div className="my-nav-links">
          
          {
            !isLoggedIn ? (
              <Link to='Login' className="link-nav" id="login">
                Log In
              </Link>
            ) : (
              <button onClick={handleLogOut} className="link-nav" id="login" >Log Out</button>
            )
          }

          <Link 
            to='SignUp' 
            className={isLoggedIn ? 'cursor-disabled link-nav' : 'link-nav'} 
            id="signin"
          >
            Sign Up
          </Link>
          
        </div>

      </nav>

    </div>
  );
};

export default Nav;
