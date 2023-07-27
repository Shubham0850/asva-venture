import { Box, Container, Grid, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import LatestCard from "../Cards/LatestCard";
import axios from "axios";

interface Post {
  title: string;
  slug: string;
  author: {
    first_name: string;
    last_name: string;
  };
  categories: { [key: string]: string };
  date: string;
  tags: { [key: string]: string };
}

function Latest() {
  const [latestPosts, setlatestPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchDetails() {
      setLoading(true);
      try {
        const _response = await axios.get(
          "https://public-api.wordpress.com/rest/v1.1/sites/staging-55d8-asvaadmin.wpcomstaging.com/posts"
        );
        console.log({ _response });
        setlatestPosts(_response.data.posts);
        setLoading(false);
      } catch (error) {
        console.log({ error });
        setLoading(false);
      }
    }
    fetchDetails();
  }, []);
  return (
    <Box background={"#fff"} pb={100}>
      <Container maxW={1300} padding="0px 50px">
        <Box py={10}>
          <Text color={"#4C545A"} fontWeight={800} fontSize={24}>
            Latest
          </Text>
        </Box>
        {loading ? (
          <p>Loading....</p>
        ) : (
          <Grid templateColumns={["1fr", "repeat(1, 1fr)"]} gap={16}>
            {latestPosts.map((post, index) => {
              console.log("post data: ", post);

              const title = post.title;
              const slug = post.slug;
              const name = `${post.author.first_name} ${post.author.last_name}`;
              const category = Object.keys(post.categories)[0]

              const originalDate = post.date;
              const tagsArray = Object.keys(post.tags);

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
                  <LatestCard
                    title={title}
                    link={`/blog/${slug}`}
                    date={formattedDate}
                    tags={tagsArray}
                    authers={[name]}
                    type={category}
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

export default Latest;
