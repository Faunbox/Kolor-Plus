import React, { useEffect, useRef } from "react";
import MenuButton from "./MenuButton";
import gsap from "gsap";
import styled from "styled-components";

const WrapperDropdown = styled.div`
  display: flex;
  position: absolute;
  top: 81px;
  width: auto;
  padding: 15px;
  transform: translateX(-50%);
  background-color: var(--ham-nav-bgc);
  border-radius: var(--ham-nav-border-radius);
  z-index: 999;
  animation: dropdown 0.6s ease;

  @keyframes dropdown {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const HamburgerDrop = () => {
  const burger = useRef(null);
  const menuDiv = useRef(null);

  useEffect(() => {
    const [liElements] = [burger.current.children];
    const menu = menuDiv.current;

    gsap.set([liElements, menu], { opacity: 0 });

    const tl = gsap.timeline({ defaults: { ease: "power3.in" } });

    tl.fromTo(
      menu,
      { y: "-=30" },
      { duration: 0.4, y: "+=30", opacity: 1 }
    ).fromTo(
      [...liElements],
      { x: "-=50" },
      { duration: 0.4, x: "+=50", opacity: 1 }
    );
    // .fromTo(liElements[1], {x: '+=50'}, {duration: 0.2, x: '-=50', opacity:1})
    // .fromTo(liElements[2], {x: '-=50'}, {duration: 0.2, x: '+=50', opacity:1})
    // .fromTo(liElements[3], {x: '+=50'}, {duration: 0.2, x: '-=50', opacity:1})
    // .fromTo(liElements[4], {x: '-=50'}, {duration: 0.2, x: '+=50', opacity:1})
  });

  return (
    <>
      <WrapperDropdown ref={menuDiv}>
        <ul ref={burger} className="dropdown">
          <li id="li1" className="dropdown">
            <MenuButton href="/about" class="dropdown" name="O nas" />
          </li>
          <li id="li2" className="dropdown">
            <MenuButton href="/products" class="dropdown" name="Produkty" />
          </li>
          <li id="li3" className="dropdown">
            <MenuButton href="/color" class="dropdown" name="Kolory" />
          </li>
          <li id="li4" className="dropdown">
            <MenuButton href="/gallery" class="dropdown" name="Galeria" />
          </li>
          <li id="li5" className="dropdown">
            <MenuButton href="/contacts" class="dropdown" name="Kontakt" />
          </li>
        </ul>
      </WrapperDropdown>
    </>
  );
};

export default HamburgerDrop;
