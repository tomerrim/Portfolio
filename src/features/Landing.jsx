import { Box, Flex, Heading, Image, Text, Wrap, WrapItem } from "@chakra-ui/react";
import humanImg from "@/assets/images/human.png";
import { useTranslation } from "react-i18next";
import { Badge } from "@/components/badge/Badge";
import { useBreakpointValue } from "@chakra-ui/react";
import "./features.css"
import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

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

const setOffScreen = (side="left", px=200) => {
  let from = -1;  //from left
  const fromSide = side.toLowerCase();
  if (fromSide === "right") {
    from = 1
  }
  return {
    opacity: 0,
    transform: `translateX(${from * px}px)`
  }
}

const appearsOnScreen = (delay) => {
  return {
    opacity: 1,
    transform: "translateX(0)",
    delay: delay,
  };
}

export const Landing = () => {
  const { t } = useTranslation(["home"]);
  const leftSectionWidth = useBreakpointValue({ base: "100%", md: "80%" });
  const justifyContentSkills = useBreakpointValue({ base: "center", md: "flex-start" });   

  const [refRight, inViewRight] = useInView({ triggerOnce: true });
  const [aboutTitleRef, inViewAboutTitle] = useInView({ triggerOnce: true });
  const [aboutTextRef, inViewAboutText] = useInView({ triggerOnce: true });
  const [skillsTitleRef, inViewSkillsTitle] = useInView({ triggerOnce: true });
  const [skillsRef, inViewskills] = useInView({ triggerOnce: true });

  const [appearsFromRight, setAppearsFromRight] = useSpring(() => (setOffScreen("right")));
  const [aboutTitleFromLeft, setAboutTitleFromLeft] = useSpring(() => (setOffScreen()));
  const [aboutTextFromLeft, setAboutTextFromLeft] = useSpring(() => (setOffScreen()));
  const [skillsTitleFromLeft, setSkillsTitleFromLeft] = useSpring(() => (setOffScreen()));
  const [skillsFromLeft, setSkillsFromLeft] = useSpring(() => (setOffScreen()));

  useEffect(() => {
    if (inViewRight) {
      setAppearsFromRight(appearsOnScreen(1250));
    }
    if (inViewAboutTitle) {
      setAboutTitleFromLeft(appearsOnScreen(500));
    }
    if (inViewAboutText) {
      setAboutTextFromLeft(appearsOnScreen(750));
    }
    if (inViewSkillsTitle) {
      setSkillsTitleFromLeft(appearsOnScreen(1000));
    }
    if (inViewskills) {
      setSkillsFromLeft(appearsOnScreen(1250));
    }
  }, [inViewRight, inViewAboutTitle, inViewAboutText, inViewSkillsTitle, inViewskills,
     setAppearsFromRight, setAboutTitleFromLeft, setAboutTextFromLeft, setSkillsTitleFromLeft, setSkillsFromLeft]);

  const leftSection = (
    <Box zIndex={2} width={leftSectionWidth}>
      <animated.div style={aboutTitleFromLeft} ref={aboutTitleRef}>  
        <Heading color={"white"} pb={5}>
          {t("aboutMe")}
        </Heading>
      </animated.div>
      <animated.div style={aboutTextFromLeft} ref={aboutTextRef}>
        <Text fontSize={"lg"} color={"white"} pb={8} maxW={"1100px"}>
          {t("aboutMeText")}
        </Text>
      </animated.div>
      <animated.div style={skillsTitleFromLeft} ref={skillsTitleRef}>
        <Heading zIndex={2} color={"white"}>
          {t("skills")}
        </Heading>
      </animated.div>
      <animated.div style={skillsFromLeft} ref={skillsRef}>
        <Wrap mt={"8"} justify={justifyContentSkills} maxW={"900px"}>
          {SKILLS.map((skill) => (
            <WrapItem key={skill.label}>
              <Badge bg={"gray.700"}>{skill.label}</Badge>
            </WrapItem>
          ))}
        </Wrap>
      </animated.div>
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
      pt={5}
      overflowX={"hidden"}
      id="landing"
    >
      {leftSection}
      <animated.div style={appearsFromRight} ref={refRight}>{rightSection}</animated.div>
    </Flex>
  );
};
