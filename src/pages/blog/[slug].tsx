import Subscribe from "@/components/common/Subscribe";
import {
  Box,
  Button,
  Container,
  Flex,
  Text,
  Divider,
  Tag,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { BsFacebook, BsLinkedin, BsTwitter } from "react-icons/bs";
import { FiCopy } from "react-icons/fi";

function Blog() {
  const tags = [
    "Policy & Regulation",
    "Code & Engineering",
    "What We’re Reading",
  ];
  return (
    <Box pt={'105px'}>
      <Box py={100} borderBottom={"1px solid #ddd"} borderStyle={"dashed"}>
        <Container maxW={1300} p='0px 25px'>
          <Box  w={{ base: "100%", md: "80%" }} >
            <Text
              fontFamily={" Space Grotesk"}
              mb={"18px"}
              fontWeight={700}
              fontSize={{base:'36px',md:'64px'}}
              color={"#000"}
            >
              Crypto{" "}
              <Text as={"span"} color={"#0075FF"}>
                Startup School
              </Text>
              : relaunched and expanded
            </Text>

            <Flex gap={4} mt={"25px"} wrap={'wrap'}>
              {tags.map((tag, index) => {
                return (
                  <Tag
                    key={index}
                    size={"sm"}
                    variant="solid"
                    background="#6EFE96"
                    color={"#1F1F1F"}
                    rounded={"full"}
                    padding={"2px 12px"}
                  >
                    {tag}
                  </Tag>
                );
              })}
            </Flex>
            <Text
              color={"#7A7A7A"}
              fontSize={"20px"}
              fontWeight={500}
           
              py={4}
            >
              Phoenix Baker / Jeff Bannniker
            </Text>
          </Box>
        </Container>
      </Box>
      <Container maxW={1300} py={20} p='0px 25px'>
        <Box pt='40px'>
          <Flex justifyContent={"space-between"}>
            <Text  >February 14,2023 . 4 minutes</Text>
            <Box className="hidden"> 
             <Button
              color={"#4C545A"}
              border={"0.5px solid #4C545A"}
              rounded={"full"}
              gap={2}
              fontSize={'20px'}
            >
              Share
            </Button></Box>
          
          </Flex>
        </Box>

        <Box px={{ base: "16px", md: "32px" }} py={8} w={{ base: "100%", md: "80%" }} mx="auto">
          <Text py={4} fontSize={{ base: "24px", md: "32px" }}  className="titleai">AI use cases in DeFi</Text>
          <Text fontSize={{ base: "16px", md: "20px" }}>
            <Text pb={{ base: "20px", md: "38px" }} className="crypto">
              We are thrilled to announce that we are relaunching Crypto Startup
              School and expanding it into a full accelerator program. We
              launched in February 2020 with the goal of helping builders get
              started on new web3 projects. Over seven weeks, we coached teams
              on the fundamentals of building a web3 startup from the ground up,
              including the underlying infrastructure, applications & business
              strategy, operational best practices, and more.

             The 40 founders in
              that cohort went on to build some of the industrys leading
              companies They have raised over $300M in venture funding and built
              products that users love from the program has been viewed over 1M
              times by people interested in building web3 projects.
              
              </Text>
              <Text pb={{ base: "20px", md: "38px" }} className="crypto"> The rapidly
              since then, even by technology standards, and yet the tools
              necessary to build an enduring web3 product are still poorly
              defined and distributed. This is particularly true for new
              founders entering the space from other fields who are compelled by
              the promise of web3  a more open internet  but are not sure how
              to navigate the terrain. We have seen accelerator programs provide
              this type of launchpad successfully in other tech categories for
              many years. However, none are tailored to the specific needs of
              web3 founders, who require a novel set of tools and resources as
              they scale.
            </Text>
          </Text>
      
        </Box>
        <Divider borderColor={"black"} />

        <Box pt={'28px'} pb={'165px'}>
          <Text color={"#4C545A"} fontSize={20} py={2} fontWeight={500}>
            Share:{" "}
          </Text>
          <Flex alignItems={"center"} gap={3}>
            <Button
              color={"#4C545A"}
              border={"0.5px solid #4C545A"}
              rounded={"full"}
              gap={2}
            >
              <FiCopy style={{ fontSize: 20 }} />
              <Text fontSize={14}>Copy link</Text>
            </Button>

            <BsTwitter style={{ color: "#4C545A", fontSize: 20 }} />
            <BsFacebook style={{ color: "#4C545A", fontSize: 20 }} />
            <BsLinkedin style={{ color: "#4C545A", fontSize: 20 }} />
          </Flex>
        </Box>
      </Container>
      <Subscribe />
    </Box>
  );
}

export default Blog;
