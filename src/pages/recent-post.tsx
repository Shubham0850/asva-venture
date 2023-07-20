import Subscribe from "@/components/common/Subscribe";
import Featured from "@/components/RecentPosts/Featured";
import Latest from "@/components/RecentPosts/Latest";
import { Box, Container, Text } from "@chakra-ui/react";
import React from "react";

function RecentPosts() {
  return (
    <Box background={"#fff"} pt={'105px'}>
      <Box py={100} borderBottom={"1px solid #ddd"} borderStyle={"dashed"}>
        <Container maxW={1300} padding="0px 50px">
          <Box >
            <Text    
              mb={{ base: "12px", lg: "18px" }}
        fontWeight={700}
        fontSize={{ base: "36px", lg: "64px" }}
        color={"#000"}
        w={{ base: "100%",  md: "60%", lg: "50%" }}
        >
              Recent Post
            </Text>
            <Text   fontSize={{ base: "14px", lg: "20px" }} width={{ base: "100%", md: "80%"}} 
        fontWeight={400}
        color={"#888"}>
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
      <Subscribe />
    </Box>
  );
}

export default RecentPosts;
