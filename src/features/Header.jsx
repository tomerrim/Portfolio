import { Flex, HStack, Image, Link } from "@chakra-ui/react";
import logoImg from "@/assets/images/logo.png";
import bubbleImg from "@/assets/images/bubble.png";
import flagENImg from "@/assets/images/flag-en.png";
import { useTranslation } from "react-i18next";


export const Header = () => {
  const {t} = useTranslation("home");
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
          <Image pl={20} src={flagENImg} h={8} />
        </HStack>
      </Flex>
    );
}