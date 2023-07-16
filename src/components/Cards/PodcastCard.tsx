import { Box, Button, Flex, Text } from "@chakra-ui/react";
import React from "react";
import Tags from "../Common/Tags";
import { FiCopy } from "react-icons/fi";
import { BsFacebook, BsLinkedin, BsTwitter } from "react-icons/bs";

interface PodcastCardProps {
  type: string;
  date: string;
  title: string;
  authors: string[];
  tags: string[];
  link: string;
  twitterLink?: string;
  linkedInLink?: string;
  facebookLink?: string;
}

function PodcastCard({
  type,
  date,
  title,
  authors,
  tags,
  link,
  twitterLink,
  linkedInLink,
  facebookLink,
}: PodcastCardProps) {
  return (
    <Box
      width={"100%"}
      borderTop={"1px solid #ddd"}
      borderStyle={"dashed"}
      py={6}
    >
      <Flex justifyContent={"space-between"}>
        <Box>
          <Text color={"#4C545A"} fontSize={16} fontFamily={"PowerGrotesk"}>
            {type} / {date}
          </Text>

          <Text
            fontSize={24}
            color={"#4C545A"}
            fontWeight={500}
            mb={2}
            fontFamily={"PowerGrotesk"}
          >
            {title}
          </Text>

          <Flex gap={5}>
            {authors.map((author, index) => {
              return (
                <Text
                  key={index}
                  fontSize={14}
                  color={"#8C9295"}
                  textTransform={"uppercase"}
                  fontWeight={500}
                  fontFamily={"PowerGrotesk"}
                >
                  <Text as="span" display="inline-block" marginRight={2}>
                    &bull;
                  </Text>
                  {author}
                </Text>
              );
            })}
          </Flex>

          <Flex gap={2} mt={3}>
            {tags.map((tag, index) => {
              return <Tags key={index}>{tag}</Tags>;
            })}
          </Flex>
        </Box>

        <Flex alignItems={"center"} gap={3}>
          <Text color={"#4C545A"} fontSize={20} fontWeight={500}>
            Share:{" "}
          </Text>
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
      </Flex>
    </Box>
  );
}

export default PodcastCard;
