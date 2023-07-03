import { Box, Flex, Heading, Image, Text, Wrap, WrapItem } from "@chakra-ui/react";
import humanImg from "@/assets/images/human.png";
import { useTranslation } from "react-i18next";
import { Badge } from "@/components/badge/Badge";
import { useBreakpointValue } from "@chakra-ui/react";
import "./features.css"
//import { BadgeList } from "@/components/badgeList/BadgeList";

const SKILLS = [
  { label: "React" },
  { label: "Redux" },
  { label: "Javascript" },
  { label: "Typescript" },
  { label: "Node.JS" },
  { label: "C#" },
  { label: ".NET" },
  { label: "MSSQL" },
  { label: "MongoDB" },
  { label: "Git" },
  { label: "HTML" },
  { label: "CSS" },
];

export const Landing = () => {
  const { t } = useTranslation(["home"]);
  const leftSectionWidth = useBreakpointValue({ base: "100%", md: "80%" });
  const justifyContentSkills = useBreakpointValue({ base: "center", md: "flex-start" });

  const leftSection = (
    <Box zIndex={2} width={leftSectionWidth}>
      <Heading color={"white"} pb={5}>
        {t("aboutMe")}
      </Heading>
      <Text fontSize={"lg"} color={"white"} pb={8} maxW={"1100px"}>
        {t("aboutMeText")}
      </Text>
      {/* move it later to BadgeList component */}
      {/* <BadgeList list={SKILLS} mt={"14"}/> */}
      <Heading zIndex={2} color={"white"}>
        {t("skills")}
      </Heading>
      <Wrap mt={"8"} justify={justifyContentSkills} maxW={"900px"}>
        {SKILLS.map((skill) => (
          <WrapItem key={skill.label}>
            <Badge bg={"gray.700"}>{skill.label}</Badge>
          </WrapItem>
        ))}
      </Wrap>
    </Box>
  );

  const badgeExperience = (
    <Badge className="animateFloat" bg={"primary.light"} shadow={false} borderRadius={7} p={3} textAlign={"center"}>
      <Text fontSize={"xl"}>{new Date().getFullYear() - 2022}</Text>
      <Text>{t("yearsExp")}</Text>
    </Badge>
  );

  const rightSection = (
    <Box mt={{ base: 10, md: 0 }} zIndex={2}>
      <Flex justify={"flex-end"}>{badgeExperience}</Flex>
      <Image src={humanImg} w={400} />
    </Box>
  );

  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      justify={"space-evenly"}
      mt={{ base: 50, md: 150 }}
      px={["4", "4", "6", "6"]}
      id="landing"
    >
      {leftSection}
      {rightSection}
    </Flex>
  );
};
