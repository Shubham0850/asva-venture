import { Container, Flex, Heading, Box, Input, Button,Text } from "@chakra-ui/react";
import React from "react";

function Subscribe() {
  return (
    <Container maxW={1300}>
      <Box p={4} maxWidth="600px" mx="auto">
        <Flex direction="column" alignItems="center" textAlign="center" my={8}>
          <Heading as="h1" size="xl" mb={4} fontWeight={500} fontSize={'48px'} color={'#4C545A'} width={'770px'} height={'60px'}>
            The Ventures & The Builders
          </Heading>
          <Box mb={4}>
            <Text width={'1000px'} height={'60px'} fontWeight={400 }  fontSize={['16px', '20px']}  color={'#888888'}>
              A monthly <Text as="span" color="#0075FF">newsletter</Text> for web3 builders & investors. The only
              newsletter you need to stay updated on web3 fundraising, major
              events & conferences, best VC reads, and a lot more
            </Text>
          </Box>
          <Flex gap={0} p={8}>
            <Input placeholder="Enter your email" rounded={0} />
            <Button background="#80FF7D" rounded={0} color={'#1F1F1F'}>Subscribe</Button>
          </Flex>
        </Flex>
      </Box>
    </Container>
  );
}

export default Subscribe;
