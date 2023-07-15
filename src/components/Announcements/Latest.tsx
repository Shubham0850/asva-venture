import { Text, Box, Container } from "@chakra-ui/react";
import React from "react";
import LatestCard from "../Cards/LatestCard";

function Latest() {
  return (
    <Container maxW="1300">
      <Box background={"#fff"}>
        <Text
          color="#4C545A"
          fontSize="24px"
          fontWeight="700"
          textTransform="uppercase"
        >
          Latest
        </Text>
        <LatestCard
          title={""}
          link={""}
          date={""}
          tags={[]}
          authers={[]}
          type={""}
        />
      </Box>
    </Container>
  );
}

export default Latest;
