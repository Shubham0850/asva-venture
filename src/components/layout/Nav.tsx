import { Box, Container, Flex, Link, Divider } from "@chakra-ui/react";

function NavBar() {
  return (
    <Box bg={"#F8F8F8"}>
      <Container maxW={1300}  >
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
          
            <img src="/dark-logo.png" alt="asva-venture logo" />
        

          {/* Links */}
          <Flex
            gap={20}
            display={{ base: "none", md: "flex" }}
            alignItems="center"
          >
            <Link
              href="#"
              mr={4}
              color="black"
              _hover={{
                textDecoration: "underline",
                fontWeight: "bold",
              }}
              fontWeight={500}
            >
              Home
            </Link>
            <Link href="#" mr={4} color="#888888" fontWeight={500} >
              About Us
            </Link>
            <Link href="#" mr={4} color="#888888" fontWeight={500}>
              Resources
            </Link>
            <Link href="#" mr={4} color="#888888" fontWeight={500}>
              Portfolio
            </Link>
          </Flex>
        </Flex>
      </Container>
      <Divider borderColor={"#888888"} />
    </Box>
  );
}

export default NavBar;
