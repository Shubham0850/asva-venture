import { Box, Container, Heading, Text } from "@chakra-ui/react";
import React from "react";

function RecentPosts() {
  return (
    <Box background={"#fff"}>
      <Box py={100} borderBottom={"1px solid #ddd"} borderStyle={"dashed"}>
        <Container maxW={1300}>
          <Box w={"80%"}>
            <Text
              mb={"18px"}
              fontWeight={500}
              fontSize={"64px"}
              color={"#000"}
            >
              Recent Post
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
    </Box>
  );
}

export default RecentPosts;
