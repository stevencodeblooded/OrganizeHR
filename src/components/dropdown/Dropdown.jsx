import React from "react";

import { MenuItems } from "./MenuItems";
import { NavLink } from "react-router-dom";

import './DropDown.css'

const Dropdown = ({dropdown, showingLinks, setShowingLinks}) => {

  const activeLink = {
    backgroundColor: '#054146',
    borderRadius: '6px',
    color: 'thistle'
  }

  return (
    <ul className={ dropdown ? "services-submenu clicked" : "services-submenu" } >
      {MenuItems.map((item) => {
        return (
          <li key={item.id}>
            
            <NavLink 
              to={item.path} 
              className={item.className}
              style={({isActive}) => isActive ? activeLink : null }
              onClick={() => setShowingLinks(false)}
            > 
              { item.title }

            </NavLink>
          </li>
        );
      })}
    </ul>
  );
};

export default Dropdown;
