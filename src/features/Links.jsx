import { Link, MenuItem } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

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
      },
      {
        label: t("projects"),
        id: "projects",
      },
      {
        label: t("contact"),
        id: "contact",
      },
    ];

    return links.map((link) => isMobile ? 
        (<MenuItem onClick={() => handleScrollTo(link.id)} key={link.id}>{link.label}</MenuItem>) : 
        (<Link 
          onClick={() => handleScrollTo(link.id)}
          key={link.id}
          fontSize={"lg"}
          fontWeight={"bold"}
          mr={4}
        >
            {link.label}            
        </Link>));
}