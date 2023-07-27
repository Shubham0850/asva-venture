import React, { useEffect, useState } from "react";
import { Box, Container, Grid, Text } from "@chakra-ui/react";
import RecentCard from "../Cards/RecentCard";
import axios from "axios";
import { parse } from "path";

interface Post {
  featured_image: string;
  title: string;
  slug: string;
  author: {
    first_name: string;
    last_name: string;
  };
  content: string;
  date: string;
}

function Featured() {
  const [recentPost, setRecentPost] = useState<Post[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchDetails() {
      setLoading(true);
      try {
        const _response = await axios.get(
          "https://public-api.wordpress.com/rest/v1.1/sites/staging-55d8-asvaadmin.wpcomstaging.com/posts/?number=3"
        );
        console.log({ _response });
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
    <Box
      bg={"#fff"}
      position={"relative"}
      zIndex={10}
      pb={100}
      borderBottom={"1px solid #ddd"}
      borderStyle={"dashed"}
    >
      <Box borderTop={"1px solid #ddd"} borderStyle={"dashed"} />

      <Container maxW={1300} padding="0px 50px">
        <Box py={10}>
          <Text color={"#4C545A"} fontWeight={800} fontSize={24}>
            Featured
          </Text>
        </Box>

        {loading ? (
          <p>Loading....</p>
        ) : (
          <Grid templateColumns={["1fr", "repeat(3, 1fr)"]} gap={10}>
            {recentPost.map((post, index) => {
              console.log("post data: ", post);

              const featuredImg = post.featured_image;
              const title = post.title;
              const slug = post.slug;
              const name = `${post.author.first_name} ${post.author.last_name}`;
              const description = parse(post.content);

              const originalDate = post.date;

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
                // @ts-ignore
                options
              ).format(dateObj);

              return (
                <div key={index}>
                  <RecentCard
                    writer={name}
                    date={formattedDate}
                    bannerImg={featuredImg}
                    description={"desc"}
                    title={title}
                    postLink={`/blog/${slug}`}
                  />
                </div>
              );
            })}
          </Grid>
        )}
      </Container>
    </Box>
  );
}

export default Featured;
