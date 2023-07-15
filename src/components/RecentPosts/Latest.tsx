import { Box, Container, Flex, Grid, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { latestPostData } from "../../data/latestPostData";
import LatestCard from "../Cards/LatestCard";
import { GoArrowRight } from "react-icons/go";

function Latest() {
  return (
    <Box
      background={"#fff"}
      pb={100}
    >
      <Container maxW={1300}>
        <Box py={10}>
          <Text
            color={"#4C545A"}
            textTransform={"uppercase"}
            fontWeight={800}
            fontSize={24}
          >
            Latest
          </Text>
        </Box>

        <Grid templateColumns="repeat(1, 1fr)" gap={6}>
          {latestPostData.map((amaPodcastData) => {
            const { title, link, date, tags, authers, type } = amaPodcastData;
            return (
              <LatestCard
                title={title}
                link={link}
                date={date}
                tags={tags}
                authers={authers}
                type={type}
              />
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
}

export default Latest;
