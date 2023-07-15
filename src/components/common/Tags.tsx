import { Box, Text } from "@chakra-ui/react";
import React from "react";

function Tags({ children }) {
  return (
    <Box bg={"#6EFE96"} borderRadius={12} padding={"2px 12px"}>
      <Text color={"#1F1F1F"} fontSize={12} fontWeight={400}>{children}</Text>
    </Box>
  );
}

export default Tags;
