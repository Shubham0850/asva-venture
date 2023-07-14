import { Container, Image } from "@chakra-ui/react";
import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { Box, Button, Text, Icon } from "@chakra-ui/react";

function Hero() {
  return (
    <Box position={"relative"} bg={"white"}>
      <Container maxW={1300} position={"relative"} zIndex={2}>
        <Box py={"100px"} px={5}>
          <Box py={20}>
            <Box mb={6}>
              <Text
                width={["100%", "930px"]}
                fontSize={["26px", "48px"]}
                style={{
                  height: "130px",
                  fontWeight: 700,
                }}
                color={"#000"}
              >
                We are backing{" "}
                <span style={{ color: "#80FF7D" }}>visionary</span> founders
                Build on next-generation internet
              </Text>
            </Box>
            <Box mb={6}>
              <Text
                width={["100%", "930px"]}
                fontSize={["12px", "20px"]}
                style={{
                  height: "92px",
                  fontWeight: 400,
                }}
                color={"#000"}
              >
                A thesis-driven blockchain-focused venture fund strategically
                investing in pre-seed and seed companies we lead, co-investments
                and bring our invaluable expertise to our portfolio projects to
                grow beyond.
              </Text>
            </Box>
            <Button
              backgroundColor="#80FF7D"
              color="#111111"
              padding={["16px", "20px 24px"]}
              fontSize={["12px", "16px"]}
            >
              Talk with Us
              <Icon
                className="blink"
                as={BsArrowRight}
                color={"#111111"}
                m={2}
              />
            </Button>
          </Box>
        </Box>
      </Container>

      <Image
        src="/heroBg.png"
        width={"90%"}
        position={"absolute"}
        top={0}
        right={0}
        zIndex={1}
      />
    </Box>
  );
}

export default Hero;
