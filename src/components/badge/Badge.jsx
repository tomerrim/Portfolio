import { Flex, Heading } from "@chakra-ui/react";

export const Badge = ({ bg, children }) => {
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
      >
        {children}
      </Heading>
    </Flex>
  );
};
