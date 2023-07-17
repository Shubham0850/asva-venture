import {
  Container,
  Flex,
  Heading,
  Box,
  Input,
  Button,
  Text,
} from "@chakra-ui/react";
import React from "react";

function Subscribe() {
  return (
    <Box bg={"#F8F8F8"}>
      <Container maxW={1300} py={"125px"}>
        <Box mx="auto">
          <Flex
            direction="column"
            alignItems="center"
            textAlign="center"
            my={8}
          >
            <Heading
              as="h1"
              size="xl"
              mb={"24px"}
              fontWeight={500}
              fontSize={"48px"}
              color={"#4C545A"}
              fontFamily={"PowerGrotesk"}
            >
              The Ventures & The Builders
            </Heading>
            <Box mb={4}>
              <Text
                 width={["100%", "1000px"]}
                height={"60px"}
                fontWeight={400}
                fontSize={["16px", "20px"]}
                color={"#888888"}
              >
                A monthly{" "}
                <Text as="span" color="#0075FF">
                  newsletter
                </Text>{" "}
                for web3 builders & investors. The only newsletter you need to
                stay updated on web3 fundraising, major events & conferences,
                best VC reads, and a lot more
              </Text>
            </Box>
            <Flex gap={0} mt={"50px"} className="subscribe-input">
              <Input
                placeholder="Enter your email"
                rounded={0}
                fontSize={18}
                color={"#888"}
                outline={"none"}
                border={"none"}
                focusBorderColor="transparent"
              />
              <Button
                background="#80FF7D"
                px={"24px"}
                py={"12px"}
                rounded={0}
                _hover={{ bg: "#80ff7d" }}
                color={"#1F1F1F"}
              >
                Subscribe
              </Button>
            </Flex>
          </Flex>
        </Box>
      </Container>
    </Box>
  );
}

export default Subscribe;
