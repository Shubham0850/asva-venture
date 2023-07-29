import { Box, Container, Text, Grid } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import AnnouncementCard from "../Cards/AnnouncementCard";
import axios from "axios";
import { dateFormate } from "../../../utils";
import { API_ENDPOINT, ENV } from "../../../api-config";

interface Post {
  title: string;
  slug: string;
  author: {
    first_name: string;
    last_name: string;
  };
  date: string;
  tags: { [key: string]: string };
}

function Featured() {
  const [recentPost, setRecentPost] = useState<Post[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchDetails() {
      setLoading(true);
      try {
        const _response = await axios.get(
          `${API_ENDPOINT}${ENV}/posts/?number=3&category='Announcement'`
        );
        setRecentPost(_response.data.posts);
        setLoading(false);
      } catch (error) {
        console.log({ error });
        setLoading(false);
      }
    }
    fetchDetails();
  }, []);

  return (
    <Container maxW={1300} padding="0px 25px">
      <Box background={"#fff"}>
        <Text
          pt={"20px"}
          color="#4C545A"
          fontSize={{ base: "20px", md: "24px" }}
          fontWeight="700"
        >
          Featured
        </Text>
        <Box py={10} borderBottom={"1px solid #ddd"} borderStyle={"dashed"}>
          {loading ? (
            <p>Loading....</p>
          ) : (
            <Grid templateColumns={["1fr", "repeat(3, 1fr)"]} gap={10}>
              {recentPost.map((post, index) => {
                const title = post.title;
                const slug = post.slug;
                const name = `${post.author.first_name} ${post.author.last_name}`;
                const formattedDate = dateFormate(post.date);
                const tagsArray = Object.keys(post.tags);

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
        </Box>
      </Box>
    </Container>
  );
}

export default Featured;
