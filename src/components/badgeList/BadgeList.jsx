import { Wrap, WrapItem } from "@chakra-ui/react"
import { Badge } from "../badge/Badge"

export const BadgeList = ({ list, mt, maxW }) => {
    if(list === "SKILLS") {
      return (
        <Wrap mt={mt} maxW={maxW}>
          {list.map((item) => (
            <WrapItem key={item.label}>
              <Badge bg={item.label}>{item.label}</Badge>
            </WrapItem>
          ))}
        </Wrap>
      );
    }
    return (
      <Wrap mt={mt} maxW={maxW}>
        {list.map((item) => (
          <WrapItem key={item}>
            <Badge bg={item}>{item}</Badge>
          </WrapItem>
        ))}
      </Wrap>
    );
}