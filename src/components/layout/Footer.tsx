import { Box, Container, Divider, Flex, Image, Text } from "@chakra-ui/react";
import Link from "next/link";
import {
  BsDiscord,
  BsLinkedin,
  BsMedium,
  BsTelegram,
  BsTwitter,
} from "react-icons/bs";

function Footer() {
  return (
    <Box backgroundColor={"#1A1A1A"} position={"relative"}>
      <Container maxW={1300} padding="0px 25px" position={"relative"} zIndex={100}>
        <Box>
          <Flex
            py={20}
            direction={{ base: "column", md: "row" }}
            justify={"space-between"}
          >
            <Box>
              <Box>
                <Image
                  src="/asva-venture-logo-white.svg"
                  alt="asva logo"
                  width={100}
                />
                <Text color={"#888888"} fontSize={"16px"}>
                  Backing and accelerating web3 founders
                </Text>
              </Box>
              <Flex
                gap={[4, 10]}
                pt={20}
                mb={[4, 0]}
                direction={{ base: "row", md: "row" }}
              >
                <Link href={"/"}>
                  <Text
                    fontSize={"20px"}
                    color={"#FFFFFF"}
                    fontFamily={"PowerGrotesk"}
                  >
                    Home
                  </Text>
                </Link>
                <Link href={"/#insights"}>
                  <Text
                    fontSize={"20px"}
                    color={"#FFFFFF"}
                    fontFamily={"PowerGrotesk"}
                  >
                    Insights
                  </Text>
                </Link>
                <Link
                  href={
                    "https://asvalabs.notion.site/asvalabs/Asva-Ventures-c430110ad71c4e9cbe530c5ccb512e9d#"
                  }
                  target="_blank"
                >
                  <Text
                    fontSize={"20px"}
                    color={"#FFFFFF"}
                    fontFamily={"PowerGrotesk"}
                  >
                    Career
                  </Text>
                </Link>
                <Link href={"#"}>
                  <Text
                    fontSize={"20px"}
                    color={"#FFF"}
                    fontFamily={"PowerGrotesk"}
                  >
                    About
                  </Text>
                </Link>
              </Flex>
            </Box>

            <Box pr="30px">
              <Box>
                <Text py={2} fontSize={"20px"} color={"#FFFFFF"}>
                  Contact Us
                </Text>
                <Link href={"mailto:contact@asvaventures.com"}>
                  <Text
                    fontSize={20}
                    pb={[4, 0]}
                    color={"#FFFFFF"}
                    textDecoration={"underline"}
                  >
                    contact@asvaventures.com
                  </Text>
                </Link>
              </Box>
              <Flex
                color={"#FFFFFF"}
                justify={{ base: "initial", md: "initial" }}
                gap={6}
                style={{ width: "256px", height: "30px" }}
                direction={{ base: "row", md: "row" }}
                pt={[0, 20]}
              >
                <Text fontSize={"20px"}>Follow Us :</Text>
                <Link href={"https://twitter.com/asvaventures"} target="_blank">
                  <BsTwitter
                    style={{
                      fontSize: "24px",
                      color: "#fff",
                      background: "transparent",
                    }}
                  />
                </Link>
                <Link href={"https://t.me/AsvaVenturesANN"} target="_blank">
                  <BsTelegram
                    style={{
                      fontSize: "24px",
                      color: "#fff",
                      background: "transparent",
                    }}
                  />
                </Link>
                <Link
                  href={"https://www.linkedin.com/company/asvaventures/"}
                  target="_blank"
                >
                  <BsLinkedin
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
            py={8}
          >
            <Text
              fontSize={["12px", "16px"]}
              letterSpacing={"-1px"}
              lineHeight={"150%"}
            >
              {" "}
              <span className="hidden">Asvaventures © </span>2022 All rights
              reserved
            </Text>
            <Text fontSize={["12px", "16px"]} letterSpacing={"-1px"}>
              {" "}
              <Link href={"#"}>Terms Of Use</Link>
            </Text>
            <Text fontSize={["12px", "16px"]} letterSpacing={"-1px"}>
              {" "}
              <Link href={"#"}>Privacy Policy</Link>
            </Text>
          </Flex>
        </Box>
      </Container>

      <Image
        width={"100%"}
        height={{base: "100%", md: "auto"}}
        position={"absolute"}
        objectFit={"cover"}
        top={0}
        right={0}
        zIndex={1}
        src="/footer-bg.svg"
        alt="bg"
        opacity={"10%"}
      />
    </Box>
  );
}

export default Footer;
