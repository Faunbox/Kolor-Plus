import React from "react";
import MenuButton from "./MenuButton";
import "../App.css";
import logo from "../images/logo.png";
import Hamburger from "./Hamburger";
import { MenuButtonNames } from "../Global/GlobalVariables";

const Nav = () => {
  return (
    <nav className="menu">
      <ul className="menu">
        <li className="logo menu">
          <MenuButton
            href="/"
            class="logo"
            name={<img className="logo" src={logo} alt="logo" />}
          />
        </li>
        {MenuButtonNames.map((element, id) => (
          <li className="menu" key={id}>
            <MenuButton
              href={element.href}
              className="nav"
              name={element.name}
              key={id}
            />
          </li>
        ))}
        <Hamburger />
      </ul>
    </nav>
  );
};

export default Nav;
