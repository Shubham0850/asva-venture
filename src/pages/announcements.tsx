import { Box, Container, Text } from "@chakra-ui/react";
import Featured from "@/components/Announcements/Featured";
import Latest from "@/components/Announcements/Latest";
import React from "react";

function Announcements() {
  return (
    <Box background={"#fff"} pt={'105px'}>
      <Box py={100} borderBottom={"1px solid #ddd"} borderStyle={"dashed"}>
        <Container maxW={1300} padding="0px 50px">
          <Box w={"80%"}>
            <Text mb={"18px"} fontWeight={500} fontSize={"64px"} color={"#000"}>
              Announcements
            </Text>
            <Text fontSize={20} fontWeight={400} color={"#888"}>
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
    </Box>
  );
}

export default Announcements;
