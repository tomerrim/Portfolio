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
        bg={"gray.800"}
        id="contact"
        spacing={4}
        zIndex={2}
        position={"relative"}
      >
        <Heading as={"h3"} size={isMobile ? "md" : "lg"} color={"white"} textAlign={"center"} p={4} pb={1} zIndex={2}>
          {t("contactDesc")}
        </Heading>
        <HStack justify={"center"} zIndex={2}>
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