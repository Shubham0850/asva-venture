import { Box, Flex, Image, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { HiOutlineArrowUpRight } from "react-icons/hi2";

interface RecenCardPropsType {
  bannerImg: string;
  description: string;
  title: string;
  writer: string;
  date: string;
  postLink: string;
}

function RecentCard({
  bannerImg,
  description,
  title,
  writer,
  date,
  postLink,
}: RecenCardPropsType) {
  return (
    <Box width={"100%"}>
      <Link href={postLink}>
        <Image src={bannerImg} width={"100%"} alt="banner" mb={"20px"} />
      </Link>
      <Flex alignItems={"flex-start"}>
        <Box>
          <Text
            color={"#4C545A"}
            fontSize={{base:'20px', md:'24px'}}
            fontFamily={"PowerGrotesk"}
            fontWeight={500}
            mb={2}
          >
            {title}
          </Text>
          <Text
            color={"#8C9295"}
            fontSize={16}
            fontFamily={"PowerGrotesk"}
            fontWeight={400}
            mb={"16px"}
          >
            {description}
          </Text>
          <Flex fontSize={14}>
            <Text
              textTransform={"uppercase"}
              color={"#798D9B"}
              fontWeight={800}
              mr={1}
            >
              {writer} -{" "}
            </Text>
            <Text fontWeight={400} color={"#798D9B"}>
              {date}
            </Text>
          </Flex>
        </Box>

        <Link href={"#"}>
          <HiOutlineArrowUpRight
            style={{ fontSize:32, color: "#4C545A", marginLeft: 5 }}
            
          />
        </Link>
      </Flex>
    </Box>
  );
}

export default RecentCard;
