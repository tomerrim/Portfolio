import { Box } from "@chakra-ui/react"
import { Header } from "./features/Header"
import { Landing } from "./features/Landing"
import { LatestProjects } from "./features/LatestProjects"
import { Footer } from "./features/Footer"
import { useTranslation } from "react-i18next";
import { Home } from "./features/Home"
// import { Parallax, ParallaxLayer } from "@react-spring/parallax"

export const App = () => {
    const { i18n } = useTranslation();

    return (
      <>
        <Home/>
        <Box px={0} pb={8} pt={8} dir={i18n.language === "en" ? 'ltr' : 'rtl'}>
          <Header />
          <Landing />
          <LatestProjects />
        </Box>
        <Footer />
      </>
    );
}