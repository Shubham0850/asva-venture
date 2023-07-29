import React, { useEffect, useState } from "react";
import { Box, Container, Grid, Text } from "@chakra-ui/react";
import RecentCard from "../Cards/RecentCard";
import axios from "axios";
import { dateFormate } from "../../../utils";
import parse from "html-react-parser";
import { API_ENDPOINT, ENV } from "../../../api-config";

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
          `${API_ENDPOINT}${ENV}/posts/?number=3`
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
              const featuredImg = post.featured_image;
              const title = post.title;
              const slug = post.slug;
              const name = `${post.author.first_name} ${post.author.last_name}`;
              const formattedDate = dateFormate(post.date);
              const description = parse(post.content);

              return (
                <div key={index}>
                  <RecentCard
                    writer={name}
                    date={formattedDate}
                    bannerImg={featuredImg}
                    description={description}
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
