const pageVariants = {
  in: {
    opacity: 1,
    scale: 1,
  },
  out: {
    opacity: 0,
    scale: 0.8,
  },
};

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.7,
};

const MenuButtonNames = [
  { name: "O nas", href: "/onas" },
  { name: "Produkty", href: "/produkty" },
  { name: "Kolory", href: "/kolor" },
  { name: "Galeria", href: "/galeria" },
  { name: "Kontakt", href: "/kontakt" },
];

export { pageTransition, pageVariants, MenuButtonNames };
