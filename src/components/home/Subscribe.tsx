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
                width={["100%", "100%", "1000px"]}
                height="auto"
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
            <Flex
              gap={0}
              className="subscribe-input"
              mt={"50px"}
              rounded={5}
              overflow={"hidden"}
              alignItems={"center"}
            >
              <Input
                placeholder="What's your email"
                rounded={0}
                fontSize={{ base: "14px", md: "18px" }}
                color={"#888"}
                outline={"none"}
                border={"none"}
                focusBorderColor="transparent"
              />
              <Button
                background="linear-gradient(135deg, #80FE7E 0%, #62FEA5 51.56%, #52FFBC 100%);"
                px={"32px"}
                py={"24px"}
                rounded={0}
                _hover={{ bg: "#80ff7d" }}
                color={"#1F1F1F"}
                fontFamily={"PowerGrotesk"}
                fontWeight="400"
              >
                Subscribe Now
              </Button>
            </Flex>
          </Flex>
        </Box>
      </Container>
    </Box>
  );
}

export default Subscribe;
