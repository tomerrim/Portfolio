import { Box, Heading, Link, Text, VStack } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import "./features.css"
import { useCallback } from "react";
import { ArrowDownIcon } from "@chakra-ui/icons"

export const Home = () => {
    const { t } = useTranslation(["home"]);

    const particlesInit = useCallback(async (engine) => {
      await loadFull(engine);
    }, []);

    const handleScrollTo = (id) => {
      const element = document.getElementById(id);
      element.scrollIntoView({ behavior: "smooth" });
    };

    return (
      <Box position="relative" h="100vh" w="100%">
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={{
            background: {
              color: {
                value: "#151515",
              },
            },
            fpsLimit: 120,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: "push",
                },
                onHover: {
                  enable: true,
                },
                resize: true,
              },
              modes: {
                push: {
                  quantity: 2,
                },
                // repulse: {
                //   distance: 200,
                //   duration: 0.2,
                // },
              },
            },
            particles: {
              color: {
                value: "#ffffff",
              },
              links: {
                color: "#ffffff",
                distance: 150,
                enable: true,
                opacity: 0.3,
                width: 1,
              },
              collisions: {
                enable: true,
              },
              move: {
                direction: "none",
                enable: true,
                // outModes: {
                //   default: "bounce",
                // },
                out_mode: "out",
                bounce: false,
                random: false,
                speed: 2,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                },
                value: 80,
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 1, max: 5 },
              },
            },
            detectRetina: true,
          }}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: -1,
          }}
        />
        <VStack
          h="100%"
          p={2}
          spacing={8}
          justifyContent="center"
          alignItems="center"
          style={{ position:"relative", zIndex: 2}}
        >
          <Heading
            fontSize={{ base: "4xl", md: "6xl", xl: "8xl" }}
            color={"white"}
            whiteSpace={"pre-line"}
            p={5}
            textAlign={"center"}
          >
            {t("greetings")}
            <Text as={"span"} color={"primary.light"}>
              {t("name")}
            </Text>
          </Heading>
          <Text fontSize={{ base: "2xl", md: "4xl", xl: "6xl" }} color={"white"} textAlign={"center"}>
            {t("iAm")}
            <Text as={"span"} fontWeight={"bold"}>
              {t("job")}
            </Text>
          </Text>
          <Link
            position={"absolute"}
            zIndex={2}
            color={"white"}
            bottom={20}
            onClick={() => handleScrollTo("header")}><ArrowDownIcon fontSize={45}/></Link>
        </VStack>
      </Box>
    );
}