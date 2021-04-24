import React from "react";
import MenuButton from "./MenuButton";
import "../App.css";
import logo from "../images/logo.png";
import Hamburger from "./Hamburger";


const Nav = () => {
  return (
    <nav 
    className="menu">
      <ul className="menu">
        <li className="logo menu">
          <MenuButton
            href="/"
            class="logo"
            name={<img className="logo" src={logo} alt="logo" />}
          />
        </li>
        <li className="menu">
          <MenuButton href="/about" class="nav" name="O nas" />
        </li>
        <li className="menu">
          <MenuButton href="/products" class="nav" name="Produkty" />
        </li>
        <li className="menu">
          <MenuButton href="/color" class="nav" name="Kolory" />
        </li>
        <li className="menu">
          <MenuButton href="/gallery" class="nav" name="Galeria" />
        </li>
        <li className="menu">
          <MenuButton href="/contacts" class="nav" name="Kontakt" />
        </li>       
        <Hamburger/> 
      </ul>
      
    </nav>
  );
};

export default Nav;
