import React from "react";
import "../Styles/Nav.css";
import { NavLink } from "react-router-dom";

const MenuButton = ({ className, href, name }) => {
  return (
    <>
      <NavLink className={className} exact to={href}>
        {name}
      </NavLink>
    </>
  );
};

export default MenuButton;
