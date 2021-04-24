import React from "react";
import "../Styles/Footer.css";
import { NavLink } from "react-router-dom";

const BottomFooter = () => {
  const year = new Date().getFullYear();
  
  return (
    <>
      <div className="FWrapper">
        <p className="by">© {year} Filip Sojecki. All rights reserved</p>
        <NavLink className="privacy" exact to="/privacy">
        polityka prywatności
        </NavLink>
      </div>
    </>
  );
};

export default BottomFooter;
