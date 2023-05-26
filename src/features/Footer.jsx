import { HStack, Link, Icon } from "@chakra-ui/react";
import { BsLinkedin, BsInstagram, BsGithub } from "react-icons/bs";
export const Footer = () => {
    return (
      <HStack justify={"center"} h={130} bg={"secondary"}>
        <Link href="https://www.instagram.com/" isExternal>
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
      </HStack>
    );
}