import React from "react";
import MenuButton from "./MenuButton";
import "../App.css";
import Hamburger from "./Hamburger";
import styled, { css } from "styled-components";
import logo from "../images/logo.png";
import { MenuButtonNames } from "../Global/GlobalVariables";

const Navigation = styled.nav`
  width: 100%;
`;

const Ul = styled.ul`
  display: flex;
  list-style: none;
  flex-wrap: wrap;
`;

const LiCss = css`
  display: flex;
  flex-grow: 1;
  flex-basis: 10%;
  justify-content: center;
`;

const LogoImg = styled.img`
  width: auto;
  height: 95px;
  padding: 10px;

  @media (max-width: 990px) {
    height: 90px;
  }

  @media (max-width: 740px) {
    height: 85px;
  }

  @media (max-width: 640px) {
    height: 80px;
  }
`;

const MenuLi = styled.li`
  ${LiCss}
`;
const MenuNav = styled.li`
  ${LiCss}
  align-self: center;
`;

const Nav = () => {
  return (
    <Navigation>
      <Ul>
        <MenuNav>
          <MenuButton
            href="/"
            name={<LogoImg src={logo} alt="logo" />}
            isLogo="true"
          />
        </MenuNav>
        {MenuButtonNames.map((element, index) => (
          <MenuLi key={index}>
            <MenuButton href={element.href} key={index} name={element.name} />
          </MenuLi>
        ))}
        <Hamburger />
      </Ul>
    </Navigation>
  );
};

export default Nav;
