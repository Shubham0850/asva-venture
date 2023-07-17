import { Container, Flex, Text, Box, Grid } from "@chakra-ui/react";
import React from "react";
import { AnnouncementData } from "../../data/announcementData";
import AnnouncementCard from "../Cards/AnnouncementCard";
import { GoArrowRight } from "react-icons/go";

function RecentAnnouncement() {
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
            Announcements – explore about news
          </Text>
          <Flex alignItems={"center"}>
            <Text color="#4C545A" fontSize={20} fontWeight={500}>
              See all
            </Text>
            <GoArrowRight
              style={{ marginLeft: "8px", color: "#4C545A", fontSize: 24 }}
            />
          </Flex>
        </Flex>

        <Grid  gap={6} templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} >
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
