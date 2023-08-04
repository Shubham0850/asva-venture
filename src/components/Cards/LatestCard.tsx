import { Box, Flex, Tag, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { BsSpotify, BsTwitter } from "react-icons/bs";

interface LatestCardProps {
  spotifyLink?: string;
  twitterLink?: string;
  title: string;
  link: string;
  date: string;
  tags: string[];
  authers: string[];
  type: string;
}

function LatestCard({
  spotifyLink,
  twitterLink,
  title,
  link,
  date,
  tags,
  authers,
  type,
}: LatestCardProps) {
  return (
    <Box width={"100%"} className="border" py={6}>
      <Flex
        justifyContent={"space-between"}
        flexDirection={{ base: "column", md: "row" }}
      >
        <Flex
          width={{ base: "100%", md: "25%" }}
          flexDirection={{ base: "row", md: "column" }}
          justifyContent={{ base: "space-between", md: "" }}
        >
          <Text color={"#4C545A"} fontSize={"16px"} fontFamily={"PowerGrotesk"}>
            {type} / {date}
          </Text>

          <Flex gap={5} mt={{ base: "0px", md: 4 }}>
            {twitterLink && (
              <Link href={twitterLink} target="_blank">
                <BsTwitter style={{ color: "#1D9BF0", fontSize: "32px" }} />
              </Link>
            )}
            {spotifyLink && (
              <Link href={spotifyLink} target="_blank">
                <BsSpotify style={{ color: "#1ED760", fontSize: "32px" }} />
              </Link>
            )}
          </Flex>
        </Flex>

        <Box width={{ base: "100%", md: "75%" }} mt={{ base: "10px", md: 0 }}>
          <Link href={link} className="title-hover">
            <Text
              fontSize={{ base: "20px", md: "24px" }}
              color={"#4C545A"}
              fontWeight={500}
              mb={2}
              fontFamily={"PowerGrotesk"}
            >
              {title}
            </Text>
          </Link>

          <Flex gap={5}>
            {authers.map((auther, index) => {
              return (
                <Text
                  fontSize={14}
                  color={"#8C9295"}
                  textTransform={"uppercase"}
                  fontWeight={500}
                  fontFamily={"PowerGrotesk"}
                  key={index}
                >
                  <Text as="span" display="inline-block" marginRight={2}>
                    &bull;
                  </Text>
                  {auther}
                </Text>
              );
            })}
          </Flex>

          <Flex gap={{ base: 2, md: 2 }} mt={3} wrap={"wrap"}>
            {tags.map((tag, index) => {
              return (
                <Tag
                  key={index}
                  size={{ base: "sm", md: "md" }}
                  variant="solid"
                  background="#6EFE96"
                  color={"#1F1F1F"}
                  rounded={"full"}
                  padding={{ base: "2px 8px", md: "2px 12px" }}
                  fontSize={{ base: "12px", md: "14px" }}
                >
                  {tag}
                </Tag>
              );
            })}
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}

export default LatestCard;
