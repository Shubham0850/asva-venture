import PodcastCard from "@/components/Cards/PodcastCard";
import Subscribe from "@/components/Common/Subscribe";
import Tags from "@/components/Common/Tags";
import { podcastData } from "@/data/podcastData";
import { Box, Container, Flex, Text } from "@chakra-ui/react";
import React from "react";

function AmaAndPodcast() {
  const tags = [
    "Policy & Regulation",
    "Code & Engineering",
    "What We’re Reading",
  ];

  return (
    <Box background={"#fff"}>
      <Box py={100} borderBottom={"1px solid #ddd"} borderStyle={"dashed"}>
        <Container maxW={1300}>
          <Box w={"80%"}>
            <Text mb={"18px"} fontWeight={700} fontSize={"64px"} color={"#000"}>
              Podcasts
            </Text>
            <Text fontSize={30} fontWeight={700} color={"#4C545A"}>
              AI use cases in DeFi
            </Text>

            <Flex gap={2} mt={"25px"}>
              {tags.map((tag, index) => {
                return <Tags key={index}>{tag}</Tags>;
              })}
            </Flex>
          </Box>
        </Container>
      </Box>

      <Container maxW={1300} py={20}>
        <Box>
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
