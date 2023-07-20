import { Box, Container, Text } from "@chakra-ui/react";
import Featured from "@/components/Announcements/Featured";
import Latest from "@/components/Announcements/Latest";
import React from "react";
import Subscribe from "@/components/common/Subscribe";

function Announcements() {
  return (
    <Box background={"#fff"} pt={'105px'}>
      <Box py={100} borderBottom={"1px solid #ddd"} borderStyle={"dashed"}>
        <Container maxW={1300} padding="0px 25px">
          <Box w={{ base: "100%", md: "80%" }} >
            <Text mb={"18px"} fontWeight={500} fontSize={{base:'36px',md:'64px'}} color={"#000"}>
              Announcements
            </Text>
            <Text fontSize={{base:'14px',md:'20px'}} fontWeight={400} color={"#888"}>
              A thesis-driven blockchain-focused venture fund strategically
              investing in pre-seed and seed companies we lead, co-investments
              and bring our invaluable expertise to our portfolio projects to
              grow beyond.
            </Text>
          </Box>
        </Container>
      </Box>

      <Featured />
      <Latest />
      <Subscribe/>
    </Box>
  );
}

export default Announcements;
