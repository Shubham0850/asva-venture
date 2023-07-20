import { Container, Image } from "@chakra-ui/react";
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
            We are backing <span style={{ color: "#80FF7D" }}>visionary</span>{" "}
            founders Build on next-generation internet
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
            A thesis-driven blockchain-focused venture fund strategically
            investing in pre-seed and seed companies we lead, co-investments and
            bring our invaluable expertise to our portfolio projects to grow
            beyond.
          </Text>

          <Button
            gap={2}
            mt={"50px"}
            
            backgroundColor="#80FF7D"
            color="#111111"
            padding={["16px", "20px 24px"]}
            fontSize={["14px", "16px"]}
            rounded={0}
            margin={""}
         
          >
            Talk with Us
            <Icon className="blink" as={BsArrowRight} width={'20px'} height={'20px'} color={"#111111"} />
          </Button>
        </Box>
      </Container>

      <Image
        src="/heroBg.png"
        width={"90%"}
        position={"absolute"}
        top={[30, 0]}
        right={0}
        zIndex={1}
      />
    </Box>
  );
}

export default Hero;
