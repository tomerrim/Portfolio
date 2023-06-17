import { Flex, HStack, IconButton, Image, Menu, MenuButton, MenuList, useBreakpointValue } from "@chakra-ui/react";
import { Links } from "./Links";
// import bubbleImg from "@/assets/images/bubble.png";
import flagENImg from "@/assets/images/flag-en.png";
import flagIlImg from "@/assets/images/flag-il.png";
import logo from "@/assets/images/tr-logo.jpeg";
import { useTranslation } from "react-i18next";
import { HamburgerIcon } from "@chakra-ui/icons";

export const Header = () => {
  const { i18n } = useTranslation("home");

  const switchLanguage = () => {
    i18n.changeLanguage(i18n.language === "en" ? "il" : "en");
  };

  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Flex justify={"space-between"}>
      <Image src={logo} h={10} />
      <HStack>
        {/* <Image src={bubbleImg} h={10} /> */}
        {/* <Link
          href="#landing"
          fontSize={"lg"}
          fontWeight={"bold"}
          mr={"4"}>
            About Me
        </Link>
        <Link
          href="#projects"
          fontSize={"lg"}
          fontWeight={"bold"}
          mr={"4"}>
            Projects
        </Link>
        <Link
          href="mailto:tomerrim@gmail.com?subject-Contacting you from your portfolio"
          fontSize={"lg"}
          fontWeight={"bold"}
        >
          {t("hireMe")}
        </Link> */}
        {isMobile ? (
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={<HamburgerIcon />}
              size={"lg"}
              variant={"outline"}
            />
            <MenuList>{<Links isMobile={isMobile} />}</MenuList>
          </Menu>
        ) : (
          <Links isMobile={isMobile} />
        )}
        <Image
          onClick={switchLanguage}
          pl={isMobile ? 5 : i18n.language === "en" ? 20 : 5}
          pr={isMobile ? 5 : i18n.language === "en" ? 5 : 20}
          src={i18n.language === "en" ? flagENImg : flagIlImg}
          h={8}
          cursor={"pointer"}
        />
      </HStack>
    </Flex>
  );
};
