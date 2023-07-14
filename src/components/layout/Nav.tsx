import {
  Box,
  Container,
  Flex,
  IconButton,
  Link,
  Text,
  Button,
  Divider
} from "@chakra-ui/react";
import { useState } from "react";

function NavBar() {
  return (
    <Container maxW={1300}>
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        wrap="wrap"
        py={4}
        px={10}
        bg="transparent"
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
      <Divider borderColor={'#888888'}/>
    </Container>
  );
}

export default NavBar;
