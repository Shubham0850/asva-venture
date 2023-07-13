import { Container } from "@chakra-ui/react";
import React from "react";
import { Box, ChakraProvider, Button, Text, } from "@chakra-ui/react";

function Hero() {
  return (
    <Container maxW={1300}>
      <ChakraProvider>
        <Box p={4}>
          <Box mb={4} fontWeight={700} width={'930px'}>
            <Text  >
              We are backing <b color="#80FF7D">visionary</b>  founders Build on next-generation
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
          <Button backgroundColor="#80FF7D" color={'#111111'}   padding={'20px, 24px, 20px, 24px'} >Talk with Us</Button>
        </Box>
      </ChakraProvider>
    </Container>
  );
}

export default Hero;
