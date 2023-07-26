import { Container, Flex, Text, Box, Grid, Link } from "@chakra-ui/react";
import React from "react";
import { AnnouncementData } from "../../data/announcementData";
import AnnouncementCard from "../Cards/AnnouncementCard";
import { GoArrowRight } from "react-icons/go";
import { useState,useEffect } from "react";
import axios from "axios";
import parse from "html-react-parser";

function RecentAnnouncement() {

  const [recentAnnouncement, setRecentAnnouncement] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchDetails() {
      setLoading(true);
      try {
        const _response = await axios.get(
          "https://public-api.wordpress.com/rest/v1.1/sites/staging-55d8-asvaadmin.wpcomstaging.com/posts/?number=3&category='Announcement'"
        );
        console.log({ _response });
        setRecentAnnouncement(_response.data.posts);
        setLoading(false);
      } catch (error) {
        console.log({ error });
        setLoading(false);
      }
    }
    fetchDetails();
  }, []);


  return (
    <Box background={"#F8F8F8"} pb={100} className="border">
      <Container maxW={1300} padding="0px 25px">
        <Flex justifyContent={"space-between"} py={10}>
          <Text color={"#4C545A"} fontWeight={{base:700,md:800}} fontSize={{base:'20px',md:'24px'}}>
            Announcements <span className="hidden">– Explore About News</span>
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
        {recentAnnouncement.map((announcement, index) => {
              console.log("announcement data: ", announcement);

              const title = announcement.title;
              const slug = announcement.slug;
              const name = `${announcement.author.first_name} ${announcement.author.last_name}`;
              const description = parse(announcement.content);
              const originalDate = announcement.date;
             
               
              // Create a new Date object with the original date string
              const dateObj = new Date(originalDate);

              // Define options for the date formatting
              const options = {
                day: "numeric",
                month: "long",
                year: "numeric",
              };

              // Format the date using Intl.DateTimeFormat
              const formattedDate = new Intl.DateTimeFormat(
                "en-US",
                options
              ).format(dateObj);

            return (
              <div key={index}>
                <AnnouncementCard
                  title={title}
                  date={formattedDate}
                  name={name}
                  // link={link}
                  // tags={tags}
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
