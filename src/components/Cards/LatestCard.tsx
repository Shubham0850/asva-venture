import { Box, Flex, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { BsSpotify, BsTwitter } from "react-icons/bs";
import Tags from "../common/Tags";

interface LatestCardProps {
  spotifyLink?: string;
  twitterLink?: string;
  title: string;
  link: string;
  date: string;
  tags: [string];
  authers: [string];
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
    <Box
      width={"100%"}
      borderTop={"1px solid #ddd"}
      borderStyle={"dashed"}
      py={6}
    >
      <Flex justifyContent={"space-between"}>
        <Box width={"25%"}>
          <Text color={"#4C545A"} fontSize={16} fontFamily={"PowerGrotesk"}>
            {type} / {date}
          </Text>

          <Flex gap={5} mt={4}>
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
        </Box>

        <Box width={"75%"}>
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
            {authers.map((auther) => {
              return (
                <Text
                  fontSize={14}
                  color={"#8C9295"}
                  textTransform={"uppercase"}
                  fontWeight={500}
                  fontFamily={"PowerGrotesk"}
                >
                  <Text as="span" display="inline-block" marginRight={2}>
                    &bull;
                  </Text>
                  {auther}
                </Text>
              );
            })}
          </Flex>

          <Flex gap={2} mt={3}>
            {tags.map((tag) => {
              return <Tags>{tag}</Tags>;
            })}
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}

export default LatestCard;
