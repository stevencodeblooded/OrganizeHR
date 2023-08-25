import React, { useState } from "react";

import { MenuItems } from "./MenuItems";
import { Link } from "react-router-dom";

import './DropDown.css'

const Dropdown = () => {

    const [dropdown, setDropdown] = useState(false)

    const handleDropdown = () => setDropdown(!dropdown)

  return (
    <ul className={ dropdown ? "services-submenu clicked" : "services-submenu" } onClick={handleDropdown}>
      {MenuItems.map((item) => {
        return (
          <li key={item.id}>
            
            <Link 
              to={item.path} 
              className={item.className} 
              onClick={() => setDropdown(false) }
            > 
            
              { item.title }

            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Dropdown;
