import { Box, Text, Link, Flex } from "@chakra-ui/react";
import React from "react";
import { HiOutlineArrowUpRight } from "react-icons/hi2";
import Tags from "../Common/Tags";

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
        width={"296px"}
        height={"64px"}
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
            <div key={index}>
              <Tags>{tag}</Tags>
            </div>
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
        <Link href={"#"}>
          <HiOutlineArrowUpRight
            style={{ fontSize: 20, color: "#4C545A", marginLeft: 5 }}
          />
        </Link>
      </Box>
    </Box>
  );
}

export default AnnouncementCard;
