import { Box, Flex, Heading, Image, Text, Wrap, WrapItem } from "@chakra-ui/react";
import humanImg from "@/assets/images/human.png";
import { useTranslation } from "react-i18next";
import { Badge } from "@/components/badge/Badge";
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
  const leftSection = (
    <Box>
      <Heading
        fontSize={{ base: "2xl", md: "5xl", xl: "7xl" }}
        color={"secondary"}
        whiteSpace={"pre-line"}
      >
        {t("greetings")}
        <Text as={"span"} color={"primary.dark"}>
          .
        </Text>
      </Heading>
      <Text fontSize={"lg"} color={"secondary"}>
        {t("iAm")}
        <Text as={"span"} fontWeight={"bold"}>
          {t("job")}
        </Text>
        <br /> {t("location")}
      </Text>
      {/* move it later to BadgeList component */}
      {/* <BadgeList list={SKILLS} mt={"14"}/> */}
      <Wrap mt={"14"} p={2} >
        {SKILLS.map((skill) => (
            <WrapItem key={skill.label}>
                <Badge bg={skill.label}>{skill.label}</Badge>
            </WrapItem>
        ))}
      </Wrap>
    </Box>
  );

  const badgeExperience = (
    <Badge bg={"primary.light"} shadow={false} borderRadius={7} p={3} textAlign={"center"}>
      <Text fontSize={"xl"}>{new Date().getFullYear() - 2022}</Text>
      <Text>{t("yearsExp")}</Text>
    </Badge>
  );

  const rightSection = (
    <Box mt={{ base: 10, md: 0 }}>
      <Flex justify={"flex-end"}>{badgeExperience}</Flex>
      <Image src={humanImg} w={400} />
    </Box>
  );

  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      justify={"space-evenly"}
      mt={{ base: 50, md: 150 }}
      id="landing"
    >
      {leftSection}
      {rightSection}
    </Flex>
  );
};
