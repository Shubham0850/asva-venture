import { Container } from "@chakra-ui/react";
import React from "react";
import { Box, ChakraProvider, Button, Text } from "@chakra-ui/react";

function Hero() {
  return (
    <Container maxW={1300}>
      <ChakraProvider>
        <Box p={4}>
          <Box mb={4}>
            <Text>
              We are backing visionary founders Build on next-generation
              internet
            </Text>
          </Box>
          <Box mb={4}>
            <Text>
              A thesis-driven blockchain-focused venture fund strategically
              investing in pre-seed and seed companies we lead, co-investments
              and bring our invaluable expertise to our portfolio projects to
              grow beyond.
            </Text>
          </Box>
          <Button colorScheme="blue">Click me</Button>
        </Box>
      </ChakraProvider>
    </Container>
  );
}

export default Hero;
