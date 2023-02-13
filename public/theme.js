import { transparentize } from "@theme-ui/color";
import { brandColors } from "./globalColors";

const increment = [...Array(17).keys()].map((i) => {
  return i;
});

const n = 10,
  r = 8,
  f0 = 12;

const typescale = increment.slice(0, n).map((e, i) => {
  let formula = Math.pow(r, e / n) * f0;
  let fixedFormula = formula.toFixed(1);
  let rem = fixedFormula / 16;
  // let px = formulaCleaned;
  return `${rem}rem`;
});

const gapSize = 56;
const gap = 100 / (1288 / gapSize);

const space = [...Array(21).keys()].map((e, i) => {
  return `${(gap * i) / 2}%`;
});

const bp = ["40em", "64em", "100em"];
const buttonpadding = 4;

const buttonHover = {
  "&:after": {
    pointerEvents: "none",
    content: `""`,
    boxShadow: "0 0 0 1px currentColor inset",
    borderRadius: `calc(1rem - ${buttonpadding}px)`,
    left: `${buttonpadding}px`,
    top: `${buttonpadding}px`,
    height: `calc(100% - ${buttonpadding * 2}px)`,
    width: `calc(100% - ${buttonpadding * 2}px)`,
    zIndex: 1,
    position: "absolute",
    opacity: 0,
    willChange: "transform",
    transition:
      "-webkit-mask 0.45s ease, mask 0.45s ease, opacity 0.5s ease -0.2s",
    maskSize: "1px 400%",
    maskImage: "linear-gradient(to bottom, #000 50%, transparent 90%)",
    maskPosition: "1px 100%",
  },
  "&:hover, &:focus-visible": {
    "&:after": {
      opacity: 1,
      maskPosition: "1px 0%",
    },
  },
};

const maskTransition = {
  maskImage:
    "linear-gradient(to left, rgba(0,0,0,1) 35%, rgba(0,0,0,0.56) 65%)",
  maskPosition: "100% 1px",
  maskRepeat: "repeat-y",
  maskSize: "300% 1px",
  transition:
    "-webkit-mask 0.5s cubic-bezier(0.2,0.8,0.2,0.8), mask 0.5s cubic-bezier(0.2,0.8,0.2,0.8)",
  "&:focus-visible": {
    mask: "none",
  },
  "&:hover": {
    maskPosition: "0% 1px",
  },
};

const buttonBase = {
  color: "text",
  fontWeight: 500,
  flexShrink: "0",
  display: "inline-flex",
  position: "relative",
  whiteSpace: "pre",
  fontSize: 2,
  px: "3rem",
  py: "1.5rem",
  fontFamily: "inherit",
  borderRadius: "1rem",
  textDecoration: "none",
  cursor: "pointer",
  placeSelf: "flex-start",
};

const scroll = {
  overflowY: "scroll",
  "&::-webkit-scrollbar": {
    width: "6px",
    height: "6px",
  },
  "&::-webkit-scrollbar-track": {
    backgroundColor: "accentuate",
    borderRadius: "12px",
  },
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: (t) => `${transparentize("text", 0.8)(t)}`,
    cursor: "pointer",
    borderRadius: "12px",
  },
  "&::-webkit-scrollbar-thumb:hover": {
    backgroundColor: (t) => `${transparentize("text", 0.7)(t)}`,
  },
};

const focusStyle = {
  "&:is(a, button):focus-visible": {
    textDecoration: "none",
    outline: "1px solid currentColor",
    outline: "-webkit-focus-ring-color auto 1px",
  },
};

const theme = {
  space: space,
  sizes: [0, 8, 14, 20, 28, 40, 56, 84, 96, 112, 132, 168, 200, 256],

  fontSizes: typescale,
  breakpoints: bp,
  letterSpacings: {
    body: "-0.01em",
    lead: "-0.016em",
    subheading: "-0.024em",
    heading: "-0.04em",
  },

  fonts: {
    body: "Walsheim, system-ui, sans-serif",
    heading: "Walsheim, system-ui, sans-serif",
    monospace: "Menlo, monospace",
  },

  colors: {
    text: "#0C002B",
    background: "#FFFBF9",
    ui: "#F9F1ED",
    primary: brandColors.salmon,
    ...brandColors,
  },
  layout: {
    row: {
      width: "88%",
      maxWidth: "1288px",
      margin: "0 auto",
    },
    grid: {
      display: "grid",
      gridTemplateColumns: [`repeat(6, 1fr)`, `repeat(12, 1fr)`],
    },
  },
  radii: { default: "1.5rem", small: "1rem", large: "2rem", pill: "99rem" },
  text: {
    default: {
      lineHeight: 1.4,
      letterSpacing: "body",
      fontSize: [2, 2, 2],
    },
    heading: {
      mt: "2.5rem",
      mb: "1rem",
    },
    paragraph: {
      variant: "text.default",
      mt: "1.5rem",
      mb: "1rem",
    },
    block: {
      variant: "text.paragraph",
      lineHeight: 1.48,
      my: "1.5rem",
    },
    label: {
      lineHeight: 1.4,
      letterSpacing: "body",
      fontSize: ["14px", "16px", "18px"],
    },
    small: {
      fontSize: "14px",
      fontWeight: 500,
      letterSpacing: "0.02em",
    },
    link: {
      color: "inherit",
      textDecoration: "underline",
      cursor: "pointer",
      ...focusStyle,
      "&:hover": { textDecoration: "none" },
    },
    navlink: {
      variant: "text.link",
      textDecoration: "none",
      ...maskTransition,
      ...focusStyle,
      highlighted: {
        ...buttonBase,
        fontWeight: "inherit",
        boxShadow: "0 0 0 1px currentColor inset",
        px: "0.85rem",
        py: "0.25rem",
        ...maskTransition,
      },
    },
  },
  buttons: {
    primary: {
      ...buttonBase,
      background: "text",
      color: "#fff",
      ...buttonHover,
    },
    secondary: {
      ...buttonBase,
      background: "#fff",
      color: "text",
      ...buttonHover,
    },
    primarySmall: {
      ...buttonBase,
      background: "text",
      color: "#fff",
      px: "1rem",
      py: "0.4rem",
      ...buttonHover,
    },
    secondarySmall: {
      ...buttonBase,
      background: "#fff",
      color: "text",
      px: "1rem",
      py: "0.4rem",
      ...buttonHover,
    },
  },
  styles: {
    root: {
      ...scroll,
      fontSize: `clamp(15px, 1vw + 8px, 18px)`,
      color: "text",
      bg: "background",
      fontWeight: "normal",
      fontFamily: "body",
      letterSpacing: "body",
      WebkitFontSmoothing: "antialiased",
      MozOsxFontSmoothing: "grayscale",
      "&.add-snap": {
        scrollSnapType: ["none", "y proximity"],
      },
    },

    h1: {
      variant: "text.heading",
      fontFamily: "heading",
      fontWeight: "500",
      lineHeight: 1.02,
      letterSpacing: "heading",
      fontSize: [4, 5, 6, 6],
    },
    h2: {
      variant: "text.heading",
      lineHeight: 1.2,
      fontWeight: "normal",
      letterSpacing: "subheading",
      fontSize: [3, 4, 4, 5],
    },
    h3: {
      variant: "text.heading",
      lineHeight: 1.32,
      fontWeight: "normal",
      letterSpacing: "lead",
      fontSize: [3, 3, 3, 4],
    },
    h4: {
      variant: "text.default",
      fontWeight: "normal",
      // letterSpacing: ["body", "lead"],
      fontSize: [2, 2, 2, 3],
    },
    a: {
      variant: "text.link",
    },
    img: {
      maxWidth: "100%",
    },

    //globals

    buttonReset: {
      all: "unset",
      color: "inherit",
      cursor: "pointer",
    },
  },
};
export default theme;
