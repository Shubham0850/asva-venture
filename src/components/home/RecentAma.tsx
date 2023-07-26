import { Container, Flex, Text, Link, Grid, Box } from "@chakra-ui/react";
import { AmaPodcastData } from "../../data/amaPodcastData";
import React from "react";
import { GoArrowRight } from "react-icons/go";
import LatestCard from "../Cards/LatestCard";

function RecentAma() {
  return (
    <Box background={"#F8F8F8"} pb={100} className="border">
      <Container maxW={1300} padding="0px 25px">
        <Flex justifyContent={"space-between"} py={10}>
          <Text color={"#4C545A"} fontWeight={{base:700,md:800}} fontSize={{base:'20px',md:'24px'}}>
            Ama & Podcast<span className="hidden">- Explore Industry Expert Insights</span>
          </Text>

          <Link href="/ama-podcast">
            <Flex alignItems={"center"}>
              <Text color="#4C545A" fontSize={{base:'16px',md:'20px'}} fontWeight={500}>
                See all
              </Text>
              <GoArrowRight
                style={{ marginLeft: "8px", color: "#4C545A", fontSize: 24 }}
              />
            </Flex>
          </Link>
        </Flex>

        <Grid templateColumns="repeat(1, 1fr)" gap={6}>
          {AmaPodcastData.map((amaPodcastData, index) => {
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
              <div key={index}>
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
              </div>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
}

export default RecentAma;
