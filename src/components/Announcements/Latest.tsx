import { Text, Box, Container, Grid } from "@chakra-ui/react";
import { AmaPodcastData } from "../../data/amaPodcastData";
import React from "react";
import LatestCard from "../Cards/LatestCard";

function Latest() {
  return (
    <Container maxW="1300" padding="50px 25px">
      <Box background={"#fff"}>
        <Text
         pb={8}
          color="#4C545A"
          fontSize={{base:'20px', md:'24px'}}
          fontWeight="700"
          textTransform="uppercase"
        >
          Latest
        </Text>
        <Grid templateColumns="repeat(1, 1fr)" gap={6}>
          {AmaPodcastData.map((amaPodcastData, index) => {
            const {
              title,
              link,
              date,
              tags,
              authers,
              type,
            } = amaPodcastData;
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
      </Box>
    </Container>
  );
}

export default Latest;
