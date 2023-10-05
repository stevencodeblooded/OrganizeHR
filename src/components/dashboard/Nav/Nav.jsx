import React, {useState, useEffect} from "react";

import { NavLink, Link } from "react-router-dom";
import logo from "../../../images/logoRe.png";
import Dropdown from "../../dropdown/Dropdown";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faLocation, faMailBulk, faPhone, faSearch, faTimes, faBars } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";

import './Nav.css'

const Nav = () => {

  const [search, setSearch] = useState(false);
  const handleSearch = () => {
    setSearch(true)
  }

  const isLoggedIn = localStorage.getItem('isLoggedIn')
   //logOut User
  const handleLogOut  = () => {
    setShowingLinks(false)
    return (
      localStorage.removeItem('isLoggedIn')
    )
  }
  
  const [showingLinks, setShowingLinks] = useState(false);
  const handleToggleDisplay = () => setShowingLinks(!showingLinks)
  // const handleClose = () => setShowingLinks(false)

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

  const [dropDownMobile, setDropDownMobile] = useState(false);
  
  const handleDropMobile = () => setDropDownMobile(!dropDownMobile)

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

          <FontAwesomeIcon icon={faSearch} onClick={handleSearch} className="search-icon" />
          {search && (
            <div className="absolute-search">
              <input type="text" placeholder="Type Something..." className="search-nav"/>
              <button onClick={() => setSearch(false)}>X</button>
            </div>
          )}
        </div>

      </div>

        <nav className='nav-container'>
          <NavLink to='/'>
            <img src={logo} alt="logo" className="logo" />
          </NavLink>

          <div className="toggle-bar">
            <FontAwesomeIcon 
              icon={!showingLinks? faBars : faTimes} 
              className="faBar-faTimes" 
              onClick={handleToggleDisplay} 
            />
          </div>

          <ul className={ showingLinks ? 'show-links-mobile' : 'nav-links' }> 
            <li>
              <NavLink to='/' className={({isActive}) => isActive &&  showingLinks ? 'active-Link-mobile' : isActive && 'active-Link'} onClick={() => setShowingLinks(false)} >Home</NavLink>
            </li>

            {/* Desktop View */}
            {!showingLinks && (
              <li onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} >
                <p className="hr-managt-item">HR Management <FontAwesomeIcon className="dropIcon" icon={faAngleDown} /> </p>
                { dropdown && <Dropdown setShowingLinks={setShowingLinks} /> }
              </li>
            )}

            {/* Mobile view */}
            { showingLinks && (
            <li>
              <button onClick={handleDropMobile}>HR Management <FontAwesomeIcon className="dropIcon" icon={faAngleDown} /></button>
            </li>
            ) }
            { dropDownMobile && <Dropdown dropdown={dropdown} showingLinks={showingLinks} setShowingLinks={setShowingLinks} /> }

            <li>
              <NavLink to='Services' className={ ({isActive}) => isActive &&  showingLinks ? 'active-Link-mobile' : isActive && 'active-Link' } onClick={() => setShowingLinks(false)} >Services</NavLink>
            </li>

            <li>
              <NavLink to='About' className={ ({isActive}) => isActive &&  showingLinks ? 'active-Link-mobile' : isActive && 'active-Link' } onClick={() => setShowingLinks(false)} >About Us</NavLink>
            </li>

            <li>
              <NavLink to='Contact' className={ ({isActive}) => isActive &&  showingLinks ? 'active-Link-mobile' : isActive && 'active-Link' } onClick={() => setShowingLinks(false)} >Contact Us</NavLink>
            </li>
            
          </ul>

        <div className={showingLinks ? 'login-signup-links-mobile' : 'my-nav-links'}>
          
          {
            !isLoggedIn ? (
              <Link to='Login' className="link-nav" id="login" onClick={() => setShowingLinks(false)}>
                Log In
              </Link>
            ) : (
              <Link onClick={handleLogOut} className="link-nav" id="login">Log Out</Link>
            )
          }

          <Link 
            to='SignUp' 
            className={isLoggedIn ? 'cursor-disabled link-nav' : 'link-nav'} 
            id="signin"
            onClick={() => setShowingLinks(false)}
          >
            Sign Up
          </Link>
          
        </div>

      </nav>

    </div>
  );
};

export default Nav;
