import React from "react";
import "../Styles/Nav.css";
import { NavLink } from "react-router-dom";

const MenuButton = (props) => {
  return (
    <>
      <NavLink className={props.class} exact to={props.href}>
        {props.name}
      </NavLink>
    </>
  );
};

export default MenuButton;
