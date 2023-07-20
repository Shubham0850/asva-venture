import PodcastCard from "@/components/Cards/PodcastCard";
import Subscribe from "@/components/common/Subscribe";
import { podcastData } from "@/data/podcastData";
import { Box, Container, Divider, Flex, Tag, Text } from "@chakra-ui/react";
import React from "react";

function AmaAndPodcast() {
  const tags = [
    "Policy & Regulation",
    "Code & Engineering",
    "What We’re Reading",
  ];

  return (
    <Box background={"#fff"} pt={"105px"}>
      <Box py={100} borderBottom={"1px solid #ddd"} borderStyle={"dashed"}>
        <Container maxW={1300} padding="0px 25px">
          <Box w={{ base: "100%", md: "80%" }}>
            <Text
              mb={"18px"}
              fontWeight={700}
              fontSize={{ base: "36px", md: "64px" }}
              color={"#000"}
            >
              Podcasts
            </Text>
            <Text
              fontSize={30}
              fontWeight={700}
              className="hidden"
              color={"#4C545A"}
            >
              AI use cases in DeFi
            </Text>

            <Text className="Hidden" fontSize='14px' font-family='Power Grotesk Trial' color= '#888'>
              A thesis-driven blockchain-focused venture fund strategically
              investing in pre-seed and seed companies we lead, co-investments
              and bring our invaluable expertise to our portfolio projects to
              grow beyond.
            </Text>

            <Box className="hidden">
              <Flex gap={2} mt={"25px"}>
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
          </Box>
        </Container>
      </Box>

      <Container maxW={1300} p={'0px 25px'} >
        <Box borderBottom="1px solid black" >
          {podcastData.map((podcast, index) => {
            const {
              type,
              date,
              title,
              auther,
              tags,
              link,
              twitterLink,
              linkedINLink,
              facebookLink,
            } = podcast;
            return (
              <div key={index}>
                <PodcastCard
                  type={type}
                  date={date}
                  title={title}
                  authors={auther}
                  tags={tags}
                  link={link}
                  twitterLink={twitterLink}
                  linkedInLink={linkedINLink}
                  facebookLink={facebookLink}
                />
              </div>
            );
          })}
        </Box>
      </Container>
      <Subscribe />
    </Box>
  );
}

export default AmaAndPodcast;
