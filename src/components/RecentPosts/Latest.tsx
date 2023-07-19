import { Box, Container, Grid, Text } from "@chakra-ui/react";
import React from "react";
import { latestPostData } from "../../data/latestPostData";
import LatestCard from "../Cards/LatestCard";

function Latest() {
  return (
    <Box background={"#fff"} pb={100}>
      <Container maxW={1300} padding="0px 50px">
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
          {latestPostData.map((amaPodcastData, index) => {
            const { title, link, date, tags, authers, type } = amaPodcastData;
            return (
              <div key={index}>
                <LatestCard
                  title={title}
                  link={link}
                  date={date}
                  tags={tags}
                  authers={authers}
                  type={type}
                />
              </div>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
}

export default Latest;
