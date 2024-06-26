import { Box, Text, Flex } from "@chakra-ui/react";
import Link from "next/link";

import React from "react";
import { HiOutlineArrowUpRight } from "react-icons/hi2";

interface RecentResearchPropsType {
  category: string;
  title: string;
  link: string;
  description: string | JSX.Element | JSX.Element[];
  date: string;
  writer: string;
}

function ResearchCard({
  category,
  title,
  link,
  description,
  date,
  writer,
}: RecentResearchPropsType) {
  return (
    <Box
      border={"1px solid #D9D9D9"}
      padding={"32px 24px"}
      position={"relative"}
      bg={"#fff"}
    >
      <Text color={"#0075FF"} fontSize={14} fontWeight={700}>
        {category}
      </Text>

      <Link href={link}>
        <Text
          color={"#4C545A"}
          fontSize={24}
          fontFamily={"PowerGrotesk"}
          fontWeight={500}
          mb={2}
          maxH="5em" 
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
      </Link>
      <Text
        color={"#8C9295"}
        fontSize={16}
        fontFamily={"PowerGrotesk"}
        fontWeight={400}
        mb={"70px"}
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

      <Box position={"absolute"} top={"12px"} right={"12px"}>
        <Link href={link}>
          <HiOutlineArrowUpRight
            style={{ fontSize: 20, color: "#4C545A", marginLeft: 5 }}
          />
        </Link>
      </Box>
    </Box>
  );
}

export default ResearchCard;
