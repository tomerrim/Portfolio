import { Flex, Heading } from "@chakra-ui/react";

export const Badge = ({ bg, children, shadow = true }) => {
  return (
    <Flex justify={"center"} alignItems={"center"}>
      <Heading
        w={130}
        textAlign={"center"}
        size={"sm"}
        bg={bg}
        color={"white"}
        borderRadius={3}
        p={3}
        boxShadow={shadow ? "3px 3px 6px rgba(0,0,0,0.6)" : "none"}
      >
        {children}
      </Heading>
    </Flex>
  );
};
