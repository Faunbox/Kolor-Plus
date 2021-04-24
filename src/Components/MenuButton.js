import React from "react";
import "../Styles/Nav.css";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const MenuButtonElement = styled(NavLink)`
  display: flex;
  color: black;
  padding: 15px 20px;
  font-size: var(--fz-nav);
  text-decoration: none;
  transition: 1s ease;
  text-transform: uppercase;
  opacity: 0.5;
  font-weight: bold;
  align-self: center;

  &:hover {
    opacity: 1;
  }

  &.active {
    opacity: 1;
  }

  @media (max-width: 1340px) {
    font-size: 21px;
  }

  @media (max-width: 990px) {
    font-size: 19px;
    padding: 0px;
  }

  @media (max-width: 690px) {
    font-size: 17px;
  }
`;
const MenuButton = ({ href, name }) => {
  return (
    <>
      <MenuButtonElement exact to={href}>
        {name}
      </MenuButtonElement>
    </>
  );
};

export default MenuButton;
