import { Flex, HStack, Image, Link } from "@chakra-ui/react";
import logoImg from "@/assets/images/logo.png";
import bubbleImg from "@/assets/images/bubble.png";
import flagENImg from "@/assets/images/flag-en.png";
import flagIlImg from "@/assets/images/flag-il.png";
import { useTranslation } from "react-i18next";

export const Header = () => {
  const { t, i18n } = useTranslation("home");

  const switchLanguage = () => {
    i18n.changeLanguage(i18n.language === "en" ? "il" : "en");
  };

  return (
    <Flex justify={"space-between"}>
      <Image src={logoImg} h={10} />
      <HStack>
        <Image src={bubbleImg} h={10} />
        <Link
          href="mailto:tomerrim@gmail.com?subject-Cantacting you from your portfolio"
          fontSize={"lg"}
          fontWeight={"bold"}
        >
          {t("hireMe")}
        </Link>
        <Image
          onClick={switchLanguage}
          pl={20}
          src={i18n.language === "en" ? flagENImg : flagIlImg}
          h={8}
          cursor={"pointer"}
        />
      </HStack>
    </Flex>
  );
};
