import React, { useState } from "react";
import {
  faBars as menu,
  faArrowUp as arrow,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HamburgerDrop from "./HamburgerDrop";



const Hamburger = () => {


  const [open, setOpen] = useState(false); //default False
  const [active, setActive] = useState(false)

  const toggleClass = () => {
    setOpen(!open);
    if (open) {
      setActive(true)
    } else {
      setActive(false)
    }
  }

  
  return (
    <>
      <li className="menu hamburger nav burger">
        <button className="burger" onClick={toggleClass}>
          {open ? (
            <FontAwesomeIcon icon={arrow} />
          ) : (
            <FontAwesomeIcon icon={menu} />
          )}   
          {open ? <HamburgerDrop open={active} /> : null}       
        </button>
        
      </li>
    </>
  );
};

export default Hamburger;
