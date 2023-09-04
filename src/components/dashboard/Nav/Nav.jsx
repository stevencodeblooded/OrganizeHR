import React, {useState, useEffect} from "react";

import { NavLink } from "react-router-dom";
import logo from "../../../images/logoRe.png";
import Dropdown from "../../dropdown/Dropdown";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

import './Nav.css'

const Nav = () => {

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
  
  const [dropdown, setDropdown] = useState(false)

  const onMouseEnter  = () => setDropdown(true)
  const onMouseLeave  = () => setDropdown(false)

  return (
    <nav className={scrolled ? 'nav-container scrolled' : 'nav-container'}>
      <NavLink to='/'>
        <img src={logo} alt="logo" className="logo" />
      </NavLink>

      <ul className="nav-links"> 
        <li>
          <NavLink to='/Applicant-Tracking' className={({isActive}) => isActive ? 'active-Link' : null} >Applicant Tracking</NavLink>
        </li>

        <li onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} >
          <NavLink to='/Employee-Onboarding' className={({isActive}) => isActive ? 'active-Link' : null} >Employee Onboarding <FontAwesomeIcon className="dropIcon" icon={faAngleDown}/></NavLink>
          { dropdown && <Dropdown /> }   
        </li>

        <li>
          <NavLink to='/Leave-Management' className={({isActive}) => isActive ? 'active-Link' : null} >Leave Management</NavLink>
        </li>

        <li>
          <NavLink to='/Intern-Directory' className={({isActive}) => isActive ? 'active-Link' : null} >Intern Directory</NavLink>
        </li>
        
      </ul>

      <div className="my-nav-btns">
        <button className="button-nav" id="login">
          Log In
        </button>
        <button className="button-nav" id="signin">
          Sign Up
        </button>
      </div>
      
    </nav>
  );
};

export default Nav;
