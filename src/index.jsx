import "@fontsource/inter";
import "@fontsource/poppins";
import "@/locals/i18n-config.js"
import ReactDOM from "react-dom/client";
import { App } from "./App.jsx";
import { ChakraProvider } from "@chakra-ui/react";
import { myTheme } from "@/styles/theme.js";
import { FireBaseApp } from "./utils/firebase.js";

FireBaseApp.init();

ReactDOM.createRoot(document.getElementById("root")).render(
  <ChakraProvider theme={myTheme}>
    <App />
  </ChakraProvider>
);
