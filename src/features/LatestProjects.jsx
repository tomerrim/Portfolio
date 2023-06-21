import { ImageSlider } from "@/components/imageSlider/ImageSlider";
import { Box, Flex, Heading, Wrap, WrapItem,Text } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { Badge } from "@/components/badge/Badge";
import { ProjectsAPI } from "@/api/projects";
//import { BadgeList } from "@/components/badgeList/BadgeList";

export const LatestProjects = () => {
    const { t, i18n } = useTranslation(["home"]);
    const [projects, setProjects] = useState();

    const fetchAll = async () => {
      const projectsResponse = await ProjectsAPI.fetchAll();
      setProjects(projectsResponse);
    }

    useEffect(() => {
      fetchAll();
    },[])

    const renderProject = ({ id, images, title, desc, technologies }) => {
    return (
      <WrapItem key={id} flexDir={"column"}>
        <ImageSlider imageList={images.map(img => img.downloadURL)} />
        <Heading size={"md"} color={"secondary"} mt={3}>
          <Box
            display={"inline-block"}
            bg={"primary.dark"}
            w={25}
            h={1}
            mr={3}
            verticalAlign={"middle"}
          />
          {title}
        </Heading>
        <Text maxW={350}>{desc[i18n.language]}</Text>
        {/* <BadgeList list={technologies} mt={2} maxW={350}/> */}
        <Wrap mt={"4"} maxW={350}>
          {technologies.sort((a,b) => {
            if(a === ".NET") return -1;
            if(b === ".NET") return 1;
            return b.localeCompare(a)
          }).map((tech) => (
            <WrapItem key={tech}>
              <Badge bg={tech}>{tech}</Badge>
            </WrapItem>
          ))}
        </Wrap>
      </WrapItem>
    );
  };

  return (
    <Flex direction={"column"} w={"100%"} mt={4} id="projects">
      <Heading>{t("latestProjects")}</Heading>
      <Wrap mt={10} spacing={16} justify={"center"}>
        {projects?.map(renderProject)}
      </Wrap>
    </Flex>
  );
};
