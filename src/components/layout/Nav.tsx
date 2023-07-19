import { Box, Container, Flex, Link, Divider } from "@chakra-ui/react";

function NavBar() {
  return (
    <Box bg={"#F8F8F8"} position="fixed" zIndex={100} width="100%">
      <Container maxW={1300}>
        <Flex
          as="nav"
          align="center"
          justify="space-between"
          wrap="wrap"
          py="5px"
          px={10}
          color="white"
        >
          {/* Logo */}

          <Link href="/" p="0px">
            <img src="/asva-venture-logo.svg" alt="asva-venture logo" />
          </Link>

          {/* Links */}
          <Flex
            gap={20}
            display={{ base: "none", md: "flex" }}
            alignItems="center"
          >
            <Link
              href="/"
              mr={4}
              color="#888888"
              _hover={{
                color: "black",
                textDecoration: "none",
              }}
              fontWeight={500}
              fontFamily={"PowerGrotesk"}
            >
              Home
            </Link>
            <Link
              href="#"
              mr={4}
              color="#888888"
              _hover={{
                color: "black",
                textDecoration: "none",
              }}
              fontFamily={"PowerGrotesk"}
              fontWeight={500}
            >
              About Us
            </Link>
            <Link
              href="#"
              mr={4}
              color="#888888"
              _hover={{
                color: "black",
                textDecoration: "none",
              }}
              fontFamily={"PowerGrotesk"}
              fontWeight={500}
            >
              Resources
            </Link>
            <Link
              href="#"
              mr={4}
              color="#888888"
              _hover={{
                color: "black",
                textDecoration: "none",
              }}
              fontFamily={"PowerGrotesk"}
              fontWeight={500}
            >
              Portfolio
            </Link>
          </Flex>
        </Flex>
      </Container>
      <Divider borderColor={"#e3e4e5"} borderWidth="1px" />
    </Box>
  );
}

export default NavBar;
