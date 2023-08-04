import { Box, Flex, Image, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { HiOutlineArrowUpRight } from "react-icons/hi2";

interface RecenCardPropsType {
  bannerImg: string;
  description: string | JSX.Element | JSX.Element[];
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
        <Image
          src={bannerImg}
          width={"100%"}
          objectFit={"cover"}
          alt="banner"
          mb={"20px"}
        />
      </Link>
      <Flex alignItems={"flex-start"}>
        <Box minW={"90%"}>
          <Text
            color={"#4C545A"}
            fontSize={{ base: "20px", md: "24px" }}
            fontFamily={"PowerGrotesk"}
            fontWeight={500}
            mb={2}
            maxH="3em"
            overflow="hidden"
            textOverflow="ellipsis"
            display="-webkit-box"
            style={{
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
            }}
          >
            {title}
          </Text>
          <Text
            color={"#8C9295"}
            fontSize={16}
            fontFamily={"PowerGrotesk"}
            fontWeight={400}
            mb={"16px"}
            maxH="5em"
            overflow="hidden"
            textOverflow="ellipsis"
            display="-webkit-box"
            style={{
              WebkitLineClamp: 3,
              WebkitBoxOrient: "vertical",
            }}
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

        <Link href={postLink}>
          <HiOutlineArrowUpRight
            style={{ fontSize: 28, color: "#4C545A", marginLeft: 5 }}
          />
        </Link>
      </Flex>
    </Box>
  );
}

export default RecentCard;
