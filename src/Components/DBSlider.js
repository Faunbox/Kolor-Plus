import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import img1 from "../images/slider1.webp";
import img2 from "../images/slider2.webp";
import img3 from "../images/slider3.webp";
import img4 from "../images/slider4.webp";

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
`;

const ImageWrapper = styled.div`
  opacity: ${(prop) => prop.opacity};
  transition: 1s ease;
  text-align: center;
  height: 450px;
`;

const ImageElement = styled.img`
  width: auto;
  width: 100vw;
  height: 450px;
  object-fit: cover;
  object-position: ${({ index }) =>
    (index === 2 && "91%") || (index === 3 && "23%")};
`;

const TextWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: ${({ opacity }) => opacity};
  text-align: center;
  font-size: 1.4rem;
  color: white !important;
  text-transform: capitalize;
  text-shadow: 3px 2px 2px black;
`;

const TextElement = styled.h1`
  width: 100%;
  height: auto;
  text-shadow: black 4px 4px 4px;
  text-align: center;
  color: white;
  font-size: 60px;
  text-transform: uppercase;

  @media (max-width: 1340px) {
    font-size: 50px;
  }

  @media (max-width: 990px) {
    font-size: 45px;
  }

  @media (max-width: 740px) {
    font-size: 40px;
  }

  @media (max-width: 370px) {
    font-size: 35px;
  }
  @media (max-width: 330px) {
    font-size: 33px;
  }
`;

const arrowCss = css`
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  font-size: 3rem;
  color: black;
  z-index: 10;
  cursor: pointer;
  transition: 1s ease;
  filter: drop-shadow(0px 0px 1px white);
  &:hover {
    transform: translate(0, -50%) scale(1.3);
  }
`;

const LeftArrow = styled(IoIosArrowBack)`
  ${arrowCss}
  left: 2%;
`;

const RightArrow = styled(IoIosArrowForward)`
  ${arrowCss}
  right: 2%;
`;

const Slider = () => {
  const [current, setCurrent] = useState(0);
  const time = 5000;

  const imagesData = [img1, img2, img3, img4];

  const h1Text = [
    "kosmetyki samochodowe",
    "Emalie przemysłowe",
    "poliuretanowa powłoka ochronna",
    "lakiery samochodowe i materiały lakiernicze",
  ];

  const lenght = imagesData.length - 1;
  const nextSlide = () => setCurrent(current === lenght ? 0 : current + 1);
  const prevSlide = () => setCurrent(current === 0 ? lenght : current - 1);

  useEffect(() => {
    imagesData.forEach((image) => (new Image().src = image));
    const interval = setInterval(() => {
      setCurrent(current === lenght ? 0 : current + 1);
    }, time);
    return () => clearInterval(interval);
  });

  return (
    <>
      <Wrapper>
        <RightArrow onClick={nextSlide} />
        <LeftArrow onClick={prevSlide} />
        {imagesData.map((data, index) => {
          const imageProp = index === current ? 1 : 0;
          return (
            <ImageWrapper opacity={imageProp} key={index}>
              {index === current && (
                <ImageElement
                  src={data}
                  index={index}
                  alt={h1Text[index]}
                  key={index}
                />
              )}
            </ImageWrapper>
          );
        })}
        {h1Text.map((data, index) => {
          const textProp = index === current ? 1 : 0;
          return (
            <TextWrapper opacity={textProp} key={index}>
              {index === current && (
                <TextElement key={index}>{data}</TextElement>
              )}
            </TextWrapper>
          );
        })}
      </Wrapper>
    </>
  );
};

export default Slider;
