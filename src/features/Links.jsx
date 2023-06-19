import { Link, MenuItem, Flex, Spacer } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { BsInfoCircle, BsBriefcase, BsEnvelope } from "react-icons/bs";

export const Links = ({isMobile}) => {
    const { t } = useTranslation("home");

    const handleScrollTo = (id) => {
        const element = document.getElementById(id);
        element.scrollIntoView({behavior:"smooth"})
    }

    const links = [
      {
        label: t("about"),
        id: "landing",
        icon: <BsInfoCircle size="1.5em" />,
      },
      {
        label: t("projects"),
        id: "projects",
        icon: <BsBriefcase size="1.5em" />,
      },
      {
        label: t("contact"),
        id: "contact",
        icon: <BsEnvelope size="1.5em" />,
      },
    ];

    return links.map((link) =>
      isMobile ? (
        <MenuItem onClick={() => handleScrollTo(link.id)} key={link.id}>
          <Flex>
            {link.icon}
            <Spacer px={2} />
            {link.label}
          </Flex>
        </MenuItem>
      ) : (
        <Link
          onClick={() => handleScrollTo(link.id)}
          key={link.id}
          fontSize={"lg"}
          fontWeight={"bold"} 
        >
          <Flex>
            {link.icon}
            <Spacer px={1} />
            {link.label}
          </Flex>
        </Link>
      )
    );
}