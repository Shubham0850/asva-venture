import { Container, Flex, Text, Link, Grid, Box } from "@chakra-ui/react";
import { AmaPodcastData } from "../../data/amaPodcastData";
import React from "react";
import { GoArrowRight } from "react-icons/go";
import LatestCard from "../Cards/LatestCard";

function RecentAma() {
  return (
    <Box
      background={"#F8F8F8"}
      pb={100}
      borderBottom={"1px solid #ddd"}
      borderStyle={"dashed"}
    >
      <Container maxW={1300}>
        <Flex justifyContent={"space-between"} py={10}>
          <Text
            color={"#4C545A"}
            textTransform={"uppercase"}
            fontWeight={800}
            fontSize={24}
          >
            AMA & Podcasts - explore industry expert insights
          </Text>

          <Link href="#">
            <Flex alignItems={"center"}>
              <Text color="#4C545A" fontSize={20} fontWeight={500}>
                See all
              </Text>
              <GoArrowRight
                style={{ marginLeft: "8px", color: "#4C545A", fontSize: 24 }}
              />
            </Flex>
          </Link>
        </Flex>

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
      </Container>
    </Box>
  );
}

export default RecentAma;
