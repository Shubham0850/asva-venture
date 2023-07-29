import { Box, Button, Flex, Tag, Text } from "@chakra-ui/react";
import React from "react";
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
    <Box className="border" py={10}>
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
                  fontSize={{ base: "12px", md: "14px" }}
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

          <Flex gap={2} mt={3} wrap={"wrap"}>
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
        </Box>

        <Box className="hidden">
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
        </Box>
      </Flex>

      {/* <Box p={4}>
        <Text><iframe style={{borderRadius:'12px'}} src="https://open.spotify.com/embed/album/1s1hg0fDxYubOCjG5dJT4s?utm_source=generator" width="100%" height="200px"  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe></Text>
      </Box> */}

      <Box className="Hidden">
        <Flex alignItems={"center"} gap={3} mt={{ base: 10, md: 0 }}>
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
      </Box>
    </Box>
  );
}

export default PodcastCard;
