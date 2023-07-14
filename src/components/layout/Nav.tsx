import { Box, Container, Flex, Link, Divider } from "@chakra-ui/react";

function NavBar() {
  return (
    <Box bg={"#fff"}>
      <Container maxW={1300}>
        <Flex
          as="nav"
          align="center"
          justify="space-between"
          wrap="wrap"
          py={4}
          px={10}
          color="white"
        >
          {/* Logo */}
          <Flex>
            <img src="/dark-logo.png" alt="asva-venture logo" />
          </Flex>

          {/* Links */}
          <Flex
            gap={20}
            display={{ base: "none", md: "flex" }}
            alignItems="center"
          >
            <Link
              href="/"
              mr={4}
              color="black"
              _hover={{
                color: "black",
                textDecoration: "underline",
                fontWeight: "bold",
              }}
            >
              Home
            </Link>
            <Link href="#" mr={4} color="black">
              Our Thesis
            </Link>
            <Link href="#" mr={4} color="black">
              Blog
            </Link>
            <Link href="#" mr={4} color="black">
              Contact
            </Link>
          </Flex>
        </Flex>
      </Container>
        <Divider borderColor={"#888888"} />
    </Box>
  );
}

export default NavBar;
