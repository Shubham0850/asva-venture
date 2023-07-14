import { Center, Container } from "@chakra-ui/react";
import React from "react";
import {BsArrowRight} from "react-icons/bs"
import { Box, ChakraProvider, Button, Text,Icon } from "@chakra-ui/react";

function Hero() {
  return (
    <Container maxW={1300} >

      <Box p={4} paddingTop={['90px', '40px']} backgroundImage={'/heroBg.png'}>  
        <Box py={20}>
        <Box mb={6} >
          <Text
          width={['100%', '930px']}
          fontSize={['26px', '48px']}
            style={{           
              height: '130px',
              fontWeight: 700,
            }}
          >
            We are backing{' '}
            <span style={{ color: '#80FF7D' }}>visionary</span> founders Build on next-generation
            internet
          </Text>
        </Box>
        <Box mb={6}>
          <Text
           width={['100%', '930px']}
           fontSize={['12px', '20px']}
            style={{
              height: '92px',
              fontWeight: 400,
            }}
          >
            A thesis-driven blockchain-focused venture fund strategically investing in pre-seed and
            seed companies we lead, co-investments and bring our invaluable expertise to our
            portfolio projects to grow beyond.
          </Text>
        </Box>
        <Button
          backgroundColor="#80FF7D"
          color="#111111"
          padding={['16px', '20px 24px']}
          fontSize={['12px', '16px']}
        >
          Talk with Us
          <Icon className="blink" as={BsArrowRight} color={"#111111"} m={2}  />
        </Button>
      </Box>
      </Box>
 <Center p={4}>
      <Text   width={'410px'} height={'50px'} fontSize={'40px'} color={'#4C545A'} fontWeight={700}>Explore Our Insights</Text>
 </Center>
  </Container>
  );
}

export default Hero;
