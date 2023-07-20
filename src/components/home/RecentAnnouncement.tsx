import { Container, Flex, Text, Box, Grid, Link } from "@chakra-ui/react";
import React from "react";
import { AnnouncementData } from "../../data/announcementData";
import AnnouncementCard from "../Cards/AnnouncementCard";
import { GoArrowRight } from "react-icons/go";

function RecentAnnouncement() {
  return (
    <Box background={"#F8F8F8"} pb={100} className="border">
      <Container maxW={1300} padding="0px 25px">
        <Flex justifyContent={"space-between"} py={10}>
          <Text color={"#4C545A"} fontWeight={{base:700,md:800}} fontSize={{base:'20px',md:'24px'}}>
            ANNOUNCEMENTS <span className="hidden">– Explore About News</span>
          </Text>

          <Link href="/announcements">
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

        <Grid gap={6} templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}>
          {AnnouncementData.map((announcementData, index) => {
            const { title, date, tags, name, link } = announcementData;
            return (
              <div key={index}>
                <AnnouncementCard
                  title={title}
                  date={date}
                  name={name}
                  link={link}
                  tags={tags}
                />
              </div>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
}

export default RecentAnnouncement;
