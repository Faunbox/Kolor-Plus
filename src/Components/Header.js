import React from "react";
import Nav from "./Nav";
import "../App.css";
import styled from "styled-components";
import bgImage from "../images/nav_bgc.jpg";

const HeaderWrapper = styled.header`
  width: 100%;
  background-image: url(${bgImage});
  background-repeat: no-repeat;
  background-position: top;
  background-size: cover;
`;

const HeaderDiv = styled.div`
  max-width: 1300px;
  width: 100%;
  margin: 0 auto;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1340px) {
    max-width: 900px;
  }

  @media (max-width: 990px) {
    max-width: 700px;
  }

  @media (max-width: 740px) {
    padding-left: 2%;
    padding-right: 2%;
  }
`;

const Header = () => {
  return (
    <>
      <HeaderWrapper>
        <HeaderDiv>
          <Nav />
        </HeaderDiv>
      </HeaderWrapper>
    </>
  );
};

export default Header;
