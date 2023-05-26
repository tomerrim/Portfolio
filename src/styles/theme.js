import { extendTheme } from "@chakra-ui/react";

const colors = {
  primary: {
    dark: "#FF7308",
    light: "#FFCD69",
  },
  secondary: "0F1B61",
  black: "#000000",

  React: "#1a1aff",
  Redux: "#993399",
  Javascript: "#e6e600",
  Typescript: "#0066ff",
  "Node.JS": "#00b33c",
  HTML: "#E72F09",
  CSS: "#3878F4",
  "C#": "#8533ff",
  ".NET": "#9966ff",
  MSSQL: "#b30000",
  MongoDB: "#00b300",
  Git: "#ff751a",
  ES6: "#009999",
  Bootstrap: "#9038f4",
  FireBase: "#feba54",
  Vercel: "#00cc99",
  ChakraUI: "#31b03e",
};

const fonts = {
    heading: `'Poppins', 'sans-serif'`,
    body: `'Inter', 'sans-serif'`,
}

export const myTheme = extendTheme({colors,fonts});