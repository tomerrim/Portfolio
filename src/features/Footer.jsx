import { HStack, Link, Icon, Heading, VStack, useBreakpointValue } from "@chakra-ui/react";
import { BsLinkedin, BsInstagram, BsGithub,BsEnvelopeFill } from "react-icons/bs";
import { useTranslation } from "react-i18next";

export const Footer = () => {
  const { t } = useTranslation("home");
  const isMobile = useBreakpointValue({ base: true, md: false });
    return (
      <VStack
        justify={"center"}
        h={170}
        bg={"secondary"}
        id="contact"
        spacing={4}
      >
        <Heading as={"h3"} size={isMobile ? "md" : "lg"} color={"white"} p={4} pb={1}>
          {t("contactDesc")}
        </Heading>
        <HStack justify={"center"}>
          <Link href="https://instagram.com/tomer_rimler" isExternal>
            <Icon as={BsInstagram} w={8} h={8} color={"white"} />
          </Link>
          <Link href="https://www.linkedin.com/in/tomer-rimler/" isExternal>
            <Icon
              borderRadius={5}
              as={BsLinkedin}
              w={8}
              h={8}
              color={"#0D73C6"}
              bg={"white"}
            />
          </Link>
          <Link href="https://github.com/tomerrim" isExternal>
            <Icon as={BsGithub} w={8} h={8} color={"white"} />
          </Link>
          <Link
            href="mailto:tomerrim@gmail.com?subject-Contacting you from your portfolio"
            isExternal
          >
            <Icon as={BsEnvelopeFill} w={8} h={8} color={"white"} />
          </Link>
        </HStack>
      </VStack>
    );
}