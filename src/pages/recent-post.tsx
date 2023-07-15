import Subscribe from "@/components/Common/Subscribe";
import Featured from "@/components/RecentPosts/Featured";
import Latest from "@/components/RecentPosts/Latest";
import { Box, Container, Text } from "@chakra-ui/react";
import React from "react";

function RecentPosts() {
  return (
    <Box background={"#fff"}>
      <Box py={100} borderBottom={"1px solid #ddd"} borderStyle={"dashed"}>
        <Container maxW={1300}>
          <Box w={"80%"}>
            <Text mb={"18px"} fontWeight={700} fontSize={"64px"} color={"#000"}>
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

      <Featured />
      <Latest />
      <Subscribe/>
    </Box>
  );
}

export default RecentPosts;
