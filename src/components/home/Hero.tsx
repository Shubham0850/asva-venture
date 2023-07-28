import { Container, Image, Link } from "@chakra-ui/react";
import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { Box, Button, Text, Icon } from "@chakra-ui/react";

function Hero() {
  return (
    <Box position={"relative"} bg={"#F8F8F8"} pt="105px">
      <Container
        maxW={1300}
        position={"relative"}
        zIndex={2}
        padding="0px 25px"
      >
        <Box
          pt={["90px", "130px"]}
          pb={["120px", "180px", "320px"]}
          justifyContent={"flex-start"}
        >
          <Text
            width={["100%", "100%", "930px"]}
            fontSize={["36px", "48px"]}
            height={"auto"}
            style={{
              fontWeight: 700,
            }}
            color={"#000"}
          >
            {/* We are backing{" "}
            <span
              className="green-gradient-text"
            >
              visionary
            </span>{" "}
            founders Build on next-generation internet */}
            A thesis-driven Web3 fund supporting{" "}
            <span className="green-gradient-text">ambitious</span> founders
            shaping the next iteration of the Internet
          </Text>

          <Text
            mt={"28px"}
            width={["100%", "100%", "899px"]}
            fontSize={["14px", "20px"]}
            style={{
              height: "auto",
              fontWeight: 400,
            }}
            color={"#888"}
          >
            A venture fund focused on blockchain, strategically investing in
            pre-seed and seed companies. We lead, as well as co-invest, while
            leveraging our invaluable expertise to propel growth in portfolio
            companies
          </Text>

          <Link href="http://pitch.asvaventures.com/">
            <Button
              gap={2}
              mt={"50px"}
              bg="linear-gradient(135deg, #80FE7E 0%, #62FEA5 51.56%, #52FFBC 100%)"
              color="#111111"
              padding={["16px", "20px 24px"]}
              fontSize={["14px", "16px"]}
              rounded={0}
              fontFamily={"PowerGrotesk"}
              fontWeight={"normal"}
              letterSpacing={"1px"}
              _hover={{}}
            >
              Talk with Us
              <Icon
                className="blink"
                as={BsArrowRight}
                width={"20px"}
                height={"20px"}
                color={"#111111"}
              />
            </Button>
          </Link>
        </Box>
      </Container>

      <Image
        src="/heroBg.png"
        width={"90%"}
        height={{ base: "100vh", md: "100%" }}
        objectFit={"cover"}
        position={"absolute"}
        top={[30, 0]}
        right={0}
        zIndex={1}
      />
    </Box>
  );
}

export default Hero;
