import { Box, Container, Text } from "@chakra-ui/react";
import React from "react";
import Subscribe from "@/components/common/Subscribe";
import Featured from "@/components/Research/Featured";
import Latest from "@/components/Research/Latest";

function Research() {
  return (
    <Box background={"#fff"} pt={"105px"}>
      <Box py={100} borderBottom={"1px solid #ddd"} borderStyle={"dashed"}>
        <Container maxW={1300} padding="0px 25px">
          <Box w={{ base: "100%", md: "80%" }}>
            <Text
              mb={"18px"}
              fontWeight={500}
              fontSize={{ base: "36px", md: "64px" }}
              color={"#000"}
            >
              Research
            </Text>
            <Text
              fontSize={{ base: "14px", md: "20px" }}
              fontWeight={400}
              color={"#888"}
            >
              Stay in the loop with our latest insights, thought leadership, and
              informative content. Our Research section keeps you current on
              industry developments and emerging trends.
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

export default Research;
