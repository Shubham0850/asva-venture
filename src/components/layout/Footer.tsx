import { Box, Container, Divider, Flex, Text } from "@chakra-ui/react";
import Link from "next/link";
import { BsDiscord, BsMedium, BsTwitter } from "react-icons/bs";

function Footer() {
  return (
    <Box backgroundColor={"#1A1A1A"}>
      <Container maxW={1300}>
        <Box>
          <Flex py={20} direction={{ base: "column", md: "row" }} justify={"space-between"}>
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
                pt={20}
                mb={[20,0]}
                direction={{ base: "row", md: "row" }}
              >
                <Link href={"#"}>
                  <Text fontSize={"20px"}>Home</Text>
                </Link>
                <Link href={"#"}>
                  <Text fontSize={"20px"}>Insights</Text>
                </Link>
                <Link href={"#"}>
                  <Text fontSize={"20px"}>Career</Text>
                </Link>
                <Link href={"#"}>
                  <Text fontSize={"20px"}>About</Text>
                </Link>
              </Flex>
            </Box>

            <Box >
              <Box color={"#FFFFFF"}>
                <Text py={2} fontSize={"20px"}>
                  Contact Us
                </Text>
                <Link href={"#"}>
                  <Text fontSize={20} pb={[4,0]} textDecoration={"underline"}>
                    info@asvalabs.com
                  </Text>
                </Link>
              </Box>
              <Flex
                color={"#FFFFFF"}
                justify={{ base: "initial", md: "initial" }}
                gap={6}
                style={{ width: "256px", height: "30px" }}
                direction={{ base: "row", md: "row" }}
                pt={[0,20]}
              >
                <Text fontSize={"20px"}>Follow Us :</Text>
                <Link href={"#"}>
                  <BsTwitter
                    style={{
                      fontSize: "24px",
                      color: "#fff",
                      background: "transparent",
                    }}
                  />
                </Link>
                <Link href={"#"}>
                  <BsDiscord
                    style={{
                      fontSize: "24px",
                      color: "#fff",
                      background: "transparent",
                    }}
                  />
                </Link>
                <Link href={"#"}>
                  <BsMedium
                    style={{
                      fontSize: "24px",
                      color: "#fff",
                      background: "transparent",
                    }}
                  />
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
            p={5}
          >
            <Text fontSize={['12px','14px']} letterSpacing={'-1px'} lineHeight={'150%'}> <span className="hidden">asvaventures © </span>2022 All rights reserved</Text>
            <Text fontSize={['12px','14px']} letterSpacing={'-1px'}> <Link href={"#"} >Terms Of Use</Link></Text>
            <Text fontSize={['12px','14px']} letterSpacing={'-1px'}> <Link href={"#"}>Privacy Policy</Link></Text>
           
          </Flex>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;
