import {
  Box,
  Button,
  Container,
  IconButton,
  Image,
  Text,
} from "@chakra-ui/react";
import { BsArrowDown } from "react-icons/bs";

function Hero() {
  return (
    <Container maxW={1300} pt={"20px"} position={"relative"}>
      <Box position={"relative"}>
        <Image width={"100%"} src="/hero-bg.png" />

        <Box
          position={"absolute"}
          bg={"transparent"}
          top={"0"}
          left={"0"}
          padding={"100px 0 0 80px"}
        >
          <Text
            fontWeight={500}
            bg="rgba(0, 0, 0, 0)"
            style={{ fontSize: "60px", width: "626px" }}
            color="#DDFF55"
          >
            Convergence of Web3 & AI Venture Studio
          </Text>

          <Box bg="rgba(0, 0, 0, 0)" display={"flex"} py={10} zIndex={10}>
            <Text
              fontSize="40px"
              bg="rgba(0, 0, 0, 0)"
              fontWeight="600"
              color="white"
              p={4}
            >
              Let’s
            </Text>
            <Text
              fontSize="60px"
              bg="rgba(0, 0, 0, 0)"
              fontWeight="600"
              color="#DDFF55"
            >
              Envision.
            </Text>
          </Box>

          <Button colorScheme="yellow" size="lg">
            Build With Us
          </Button>
        </Box>
      </Box>

      <IconButton
        ml={2}
        icon={
          <BsArrowDown
            style={{
              background: "transparent",
              color: "black",
              fontSize: 22,
            }}
          />
        }
        aria-label="User Profile"
        variant="ghost"
        size="md"
        background={"white"}
        rounded={"full"}
        position={"absolute"}
        bottom={"-20px"}
        left={"calc(50% - 20px)"}
        zIndex={10}
      />
    </Container>
  );
}

export default Hero;

{
  /* */
}
