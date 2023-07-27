import { Box, Text, Link, Flex, Tag } from "@chakra-ui/react";
import React from "react";
import { HiOutlineArrowUpRight } from "react-icons/hi2";

interface announcementprops {
  title: string;
  name: string;
  date: string;
  tags: string[];
  link: string;
}

function AnnouncementCard({
  title,
  name,
  date,
  tags,
  link,
}: announcementprops) {
  return (
    <Box
      border={"1px solid #D9D9D9"}
      padding={"32px 24px"}
      position={"relative"}
      bg={"#fff"}
    >
      <Text
        color={"#4C545A"}
        fontSize={24}
        fontFamily={"PowerGrotesk"}
        fontWeight={500}
        mb={2}
      >
        {title}
      </Text>

      <Flex gap={2} mt={3} mb={"70px"}>
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

      <Flex fontSize={14}>
        <Text
          textTransform={"uppercase"}
          color={"#798D9B"}
          fontWeight={800}
          mr={1}
        >
          {name} -{" "}
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

export default AnnouncementCard;
