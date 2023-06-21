import { Box } from "@chakra-ui/react"
import { Header } from "./features/Header"
import { Landing } from "./features/Landing"
import { LatestProjects } from "./features/LatestProjects"
import { Footer } from "./features/Footer"
import { useTranslation } from "react-i18next";

export const App = () => {
    const { i18n } = useTranslation();

    return (
      <>
        <Box px={["4", "4", "6", "6"]} pb={8} pt={8} dir={i18n.language === "en" ? 'ltr' : 'rtl'}>
          <Header />
          <Landing />
          <LatestProjects />
        </Box>
        <Footer />
      </>
    );
}