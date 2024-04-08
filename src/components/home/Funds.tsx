import {
        Box,
        Button,
        Center,
        Container,
        Divider,
        Flex,
        Heading,
        Image,
        Text,
      } from "@chakra-ui/react";
      import Link from "next/link";
      import React from "react";
      type CardProps = {
        isLast?: boolean;
      };
      
      const Funds = ({ isLast }: CardProps) => {
        return (
          <Box
            bg="#F8F8F8"
            borderTop={"1px dashed #4C545A"}
            pt={"50px"}
            pb={'10px'}
            id="OurFunds"
          >
            <Container  maxW={1300}  px=" 25px">
             
                <Heading
                  as="h1"
                  size="xl"
                  mb="24px"
                  textAlign={{base:'start',md:'center'}}
                  fontWeight={700}
                  fontSize={["36px", "40px"]}
                  color="#4C545A"
                  height="60px"
                  fontFamily="PowerGrotesk"
                >
                  Our Funds
                </Heading>
           
              <Flex
                mb={{base:0,md:20}}
                gap={6}
                pt={{base:'0',md:'46px'}}
               
                justifyContent="space-between"
                flexDirection={{ base: "column", md: "row" }}
              >
                <Flex
                  flex={1}
                  flexDirection="column"
                  borderRight={{
                    base: "none",
                    md: isLast ? "none" : "1px dashed #4C545A",
                  }}
                  borderBottom={{
                    base: isLast ? "none" : "1px dashed #4C545A",
                    md: "none",
                  }}
                  px={{ base: 0, md: 8 }}
                  pb={{ base: 0, md: 0 }}
                ><Box >
                  <Image
                    src={"/circle1.png"}
                    alt="Card Image"
                    mb={4}
                    boxSize={{ base: "70px", md: "70px" }}
                    objectFit="contain"
                  />
                  </Box>
                  <Heading
                    fontSize="24px"
                    fontWeight="500"
                    lineHeight="150%"
                    color="#4C545A"
                    mb={2}
                    fontFamily={"PowerGrotesk"}
                  >
                    Venture Fund
                  </Heading>
                  <Text
                    color="#8C9295              "
                    mt={"20px"}
                    mb={"50px"}
                    fontSize="16px"
                    fontWeight="400"
                    lineHeight="150%"
                  >
                    Asva Capital Venture Fund is focusing on early-stage  Web3
                    innovations set to redefine the Blockchain landscape. Our
                    thesis-driven approach strategically captures the vast potential
                    of decentralized technology, Guided by a philosophy of adding
                    substantial value, our team leverages its multifaceted expertise
                    to foster credible and consistent growth within our investment
                    portfolio
                  </Text>
                </Flex>
                <Flex
                  flex={1}
                  pt={{base:4,md:0}}
                  flexDirection="column"
                  px={{ base: 0, md: 8 }}
                  pb={{ base: 4, md: 0 }}
                ><Box pb={6} pt={3} >
                  <Image
                    src={"/circle2.png"}
                    alt="Card Image"
                    mb={4}
                    boxSize={{ base: "42px", md: "42px" }}
                    objectFit="contain"
                  /></Box>
                  <Heading
                    fontSize="24px"
                    fontWeight="400"
                    lineHeight="150%"
                    color="#4C545A"
                    mb={2}
                    fontFamily={"PowerGrotesk"}
                  >
                    Digital Asset Alpha Fund
                  </Heading>
                  <Text
                    color="#8C9295"
                    mt={"20px"}
                    mb={"50px"}
                    fontSize="16px"
                    fontWeight="400"
                    lineHeight="150%"
                  >
                    Our flagship offering the “Digital Asset Alpha Fund”, where we
                    focus on potential alpha-based investments, targeting tokens with
                    robust fundamentals and promising on-chain metrics. We prioritize
                    long-term asset growth and risk-aware investing, utilizing a
                    multi-strategy approach to navigate diverse market conditions
                    effectively and achieve consistent, market-leading results
                  </Text>
                </Flex>
              </Flex>
            </Container>
          </Box>
        );
      };
      
      export default Funds;
      
      