import React, { useEffect, useRef } from "react";
import MenuButton from "./MenuButton";
import gsap from "gsap";

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
  });

  return (
    <>
      <div ref={menuDiv} className="dropdown">
        <ul ref={burger} className="dropdown">
          <li id="li1" className="dropdown">
            <MenuButton href="/about" className="dropdown" name="O nas" />
          </li>
          <li id="li2" className="dropdown">
            <MenuButton href="/products" className="dropdown" name="Produkty" />
          </li>
          <li id="li3" className="dropdown">
            <MenuButton href="/color" className="dropdown" name="Kolory" />
          </li>
          <li id="li4" className="dropdown">
            <MenuButton href="/gallery" className="dropdown" name="Galeria" />
          </li>
          <li id="li5" className="dropdown">
            <MenuButton href="/contacts" className="dropdown" name="Kontakt" />
          </li>
        </ul>
      </div>
    </>
  );
};

export default HamburgerDrop;
