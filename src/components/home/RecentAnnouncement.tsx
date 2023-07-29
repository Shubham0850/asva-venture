import React, { useEffect, useState } from "react";
import { Box, Container, Flex, Grid, Text, Link } from "@chakra-ui/react";
import { GoArrowRight } from "react-icons/go";
import axios from "axios";
import AnnouncementCard from "../Cards/AnnouncementCard";
import { dateFormate } from "../../../utils";
import { API_ENDPOINT, ENV } from "../../../api-config";

interface Author {
  first_name: string;
  last_name: string;
}

interface Tag {
  [key: string]: string;
}

interface Announcement {
  title: string;
  slug: string;
  author: Author;
  content: string;
  date: string;
  tags: Tag;
}

const RecentAnnouncement: React.FC = () => {
  const [recentAnnouncement, setRecentAnnouncement] = useState<Announcement[]>(
    []
  );
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchDetails = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `${API_ENDPOINT}${ENV}/posts/?number=3&category='Announcement'`
        );
        setRecentAnnouncement(response.data.posts);
        setLoading(false);
      } catch (error) {
        console.log({ error });
        setLoading(false);
      }
    };
    fetchDetails();
  }, []);

  return (
    <Box background="#F8F8F8" pb={100} className="border">
      <Container maxW={1300} padding="0px 25px">
        <Flex justifyContent="space-between" py={10}>
          <Text
            color="#4C545A"
            fontWeight={{ base: 700, md: 800 }}
            fontSize={{ base: "20px", md: "24px" }}
          >
            Announcements
            <span className="hidden">- Our Inside Scoop</span>
          </Text>

          <Link href="/announcements">
            <Flex alignItems="center">
              <Text
                color="#4C545A"
                fontSize={{ base: "16px", md: "20px" }}
                fontWeight={500}
              >
                See all
              </Text>
              <GoArrowRight
                style={{ marginLeft: "8px", color: "#4C545A", fontSize: 24 }}
              />
            </Flex>
          </Link>
        </Flex>

        {loading ? (
          <p>Loading...</p>
        ) : (
          <Grid gap={6} templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}>
            {recentAnnouncement.map((announcement, index) => {
              const title = announcement.title;
              const slug = announcement.slug;
              const name = `${announcement.author.first_name} ${announcement.author.last_name}`;
              const tagsArray = Object.keys(announcement.tags);
              const formattedDate = dateFormate(announcement.date);

              return (
                <div key={index}>
                  <AnnouncementCard
                    title={title}
                    date={formattedDate}
                    name={name}
                    link={`/blog/${slug}`}
                    tags={tagsArray}
                  />
                </div>
              );
            })}
          </Grid>
        )}
      </Container>
    </Box>
  );
};

export default RecentAnnouncement;
