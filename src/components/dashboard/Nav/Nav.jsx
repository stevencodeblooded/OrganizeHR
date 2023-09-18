import React, {useState, useEffect} from "react";

import { NavLink, Link } from "react-router-dom";
import logo from "../../../images/logoRe.png";
import Dropdown from "../../dropdown/Dropdown";
import Login from "../../UserLogin/Login";
import SignUp from "../../UserLogin/SignUp/SignUp";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faLocation, faMailBulk, faPhone, faSearch } from "@fortawesome/free-solid-svg-icons";

import './Nav.css'
import { faFacebook, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";

const Nav = () => {

  //Login
  const [isLogin, setIsLogin] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  
  const handleLogin = () => setIsLogin(true) 
  const handleSignUp  = () => setIsSignUp(true)

  console.log(isLogin);

  //scroll
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
          <NavLink to='.'>
            <img src={logo} alt="logo" className="logo" />
          </NavLink>

        <ul className="nav-links"> 
          <li>
            <NavLink to='Applicant-Tracking' className={({isActive}) => isActive ? 'active-Link' : null} >Applicant Tracking</NavLink>
          </li>

          <li onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} >
            <NavLink to='Employee-Onboarding' className={({isActive}) => isActive ? 'active-Link' : null} >Employee Onboarding <FontAwesomeIcon className="dropIcon" icon={faAngleDown}/></NavLink>
            { dropdown && <Dropdown /> }   
          </li>

          <li>
            <NavLink to='Leave-Management' className={({isActive}) => isActive ? 'active-Link' : null} >Leave Management</NavLink>
          </li>

          <li>
            <NavLink to='Intern-Directory' className={({isActive}) => isActive ? 'active-Link' : null} >Intern Directory</NavLink>
          </li>
          
        </ul>

        <div className="my-nav-btns">
          <button className="button-nav" id="login" onClick={handleLogin}>
            Log In
          </button>
          <button className="button-nav" id="signin" onClick={handleSignUp}>
            Sign Up
          </button>
        </div>
        
        {/* login */}
        {isLogin && (
          <Login 
            setIsLogin={setIsLogin}
            setIsSignUp={setIsSignUp}
          />
        )}

        {/* signup */}
        {isSignUp && (
          <SignUp 
            setIsSignUp={setIsSignUp}
            setIsLogin={setIsLogin}
          />
        )}

      </nav>

    </div>
  );
};

export default Nav;
