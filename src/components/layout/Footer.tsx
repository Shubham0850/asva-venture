import { Box, Container, Divider, Flex, Text } from "@chakra-ui/react";
import Link from "next/link";
import { BsDiscord, BsMedium, BsTwitter } from "react-icons/bs";

function Footer() {
  return (
    <Box backgroundColor={"#1A1A1A"}>
      <Container  maxW={1300}>
        <Box p={10}>
          <Flex p={10} justify={"space-between"}>
            <Box>
              <Box>
                <img src="/white-logo.png" alt="asva logo" />
                <Text color={"#888888"} fontSize={"16px"}>
                  Backing and accelerating web3 founders
                </Text>
              </Box>
              <Flex
                color={"#FFFFFF"}
                gap={10}
                py={20}
                direction={{ base: "column", md: "row" }}
              >
                <Text fontSize={"20px"}>Home</Text>
                <Text fontSize={"20px"}>Insights</Text>
                <Text fontSize={"20px"}>Career</Text>
                <Text fontSize={"20px"}>About</Text>
              </Flex>
            </Box>

            <Box>
              <Box color={"#FFFFFF"}>
                <Text p={2} fontSize={"20px"}>
                  Contact Us
                </Text>
                <Text p={2} fontSize={"20px"}>
                  info@asvalabs.com
                </Text>
              </Box>
              <Flex
                color={"#FFFFFF"}
                justify={{ base: "center", md: "initial" }}
                gap={6}
                style={{ width: "256px", height: "30px" }}
                direction={{ base: "column", md: "row" }}
                py={20}
              >
                <Text fontSize={"20px"}>Follow Us :</Text>
                <Link href={"#"}>
                  <BsTwitter style={{fontSize: "24px"}} />
                </Link>
                <Link href={"#"}>
                  <BsDiscord style={{fontSize: "24px"}}  />
                </Link>
                <Link href={"#"}>
                  <BsMedium style={{fontSize: "24px"}}  />
                </Link>
              </Flex>
            </Box>
          </Flex>

          <Divider backgroundColor={"#888888"} />

          <Flex
            color={"#888888"}
            align="center"
            justify={"center"}
            gap={10}
            p={2}
          >
            <Text>asvaventures © 2022 All rights reserved</Text>
            <Text>terms of use</Text>
            <Text>privacy policy</Text>
          </Flex>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;
