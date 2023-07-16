import { Text, Box, Container, Grid } from "@chakra-ui/react";
import { AmaPodcastData } from "../../data/amaPodcastData";
import React from "react";
import LatestCard from "../Cards/LatestCard";

function Latest() {
  return (
    <Container maxW="1300">
      <Box background={"#fff"}>
        <Text
          color="#4C545A"
          fontSize="24px"
          fontWeight="700"
          textTransform="uppercase"
        >
          Latest
        </Text>
        <Grid templateColumns="repeat(1, 1fr)" gap={6}>
          {AmaPodcastData.map((amaPodcastData) => {
            const {
              spotifyLink,
              twitterLink,
              title,
              link,
              date,
              tags,
              authers,
              type,
            } = amaPodcastData;
            return (
              <LatestCard
                spotifyLink={spotifyLink}
                twitterLink={twitterLink}
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
      </Box>
    </Container>
  );
}

export default Latest;
