import React, {useState} from "react";

import { Link } from "react-router-dom";
import logo from "../../../images/logoRe.png";
import Dropdown from "../../dropdown/Dropdown";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

import './Nav.css'

const Nav = () => {

  const [dropdown, setDropdown] = useState(false)

  const onMouseEnter  = () => setDropdown(true)
  
  const onMouseLeave  = () => setDropdown(false)

  return (
    <nav className="nav-container">
      <Link to='/'>
        <img src={logo} alt="logo" className="logo" />
      </Link>

      <ul className="nav-links"> 
        <li>
          <Link to='/Applicant-Tracking'>Applicant Tracking</Link>
        </li>

        <li onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} >
          <Link to='/Employee-Onboarding'>Employee Onboarding <FontAwesomeIcon className="dropIcon" icon={faAngleDown}/></Link>
          { dropdown && <Dropdown /> }   
        </li>

        <li>
          <Link to='/Leave-Management'>Leave Management</Link>
        </li>

        <li>
          <Link to='/Intern-Directory'>Intern Directory</Link>
        </li>
        
      </ul>

      <button className="button-nav" id="login">
        Log In
      </button>
      <button className="button-nav" id="signin">
        Sign Up
      </button>
    </nav>
  );
};

export default Nav;
