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
  { name: "O nas", href: "/about" },
  { name: "Produkty", href: "/products" },
  { name: "Kolory", href: "/color" },
  { name: "Galeria", href: "/gallery" },
  { name: "Kontakt", href: "/contacts" },
];

export { pageTransition, pageVariants, MenuButtonNames };
